package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetalleVenta;
import com.krakedev.inventarios.entidades.Venta;
import com.krakedev.inventarios.excepciones.KrakedevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {

	public void guardar(Venta venta) throws KrakedevException {
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement psDet = null;
		PreparedStatement psActCabecera = null;
		PreparedStatement psHistorial =null;
		ResultSet rsClave = null;
		int codigoCabecera = 0;
		BigDecimal sumatoriaSubtotales = new BigDecimal(0);
		BigDecimal sumatoriaIVA = new BigDecimal(0);
		BigDecimal IVA = new BigDecimal(0.12);
		BigDecimal total = new BigDecimal(0);

		Date fechaActual = new Date();
		Timestamp fechaSQL = new Timestamp(fechaActual.getTime());

		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_venta(fecha,total_sin_iva,iva,total)" + " values(?,?,?,?)",
					Statement.RETURN_GENERATED_KEYS);

			ps.setTimestamp(1, fechaSQL);
			ps.setBigDecimal(2, new BigDecimal(0));
			ps.setBigDecimal(3, new BigDecimal(0));
			ps.setBigDecimal(4, new BigDecimal(0));

			ps.executeUpdate();
			rsClave = ps.getGeneratedKeys();

			if (rsClave.next()) {
				codigoCabecera = rsClave.getInt(1);
			}

			ArrayList<DetalleVenta> detallesVenta = venta.getDetalles();
			DetalleVenta det;
			for (int i = 0; i < detallesVenta.size(); i++) {
				det = detallesVenta.get(i);
				psDet = con.prepareStatement(
						"insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_iva)"
								+ " values(?,?,?,?,?,?);");
				psHistorial=con.prepareStatement("insert into historial_stock(fecha,referencia,producto,cantidad) "
						+ " values(?,?,?,?)");
				
				psHistorial.setTimestamp(1, fechaSQL);
				psHistorial.setString(2,"Venta "+ codigoCabecera);
				psHistorial.setInt(3, det.getProducto().getCodigo());
				psHistorial.setInt(4, (det.getCantidad()*-1));

				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidad());
				psDet.setBigDecimal(4, det.getProducto().getPrecioVenta());
				BigDecimal can = new BigDecimal(det.getCantidad());
				BigDecimal subtotal = can.multiply(det.getProducto().getPrecioVenta());
				System.out.println(subtotal);

				sumatoriaSubtotales = sumatoriaSubtotales.add(subtotal);

				BigDecimal subtotalIVA = subtotal;
				psDet.setBigDecimal(5, subtotal);
				if (det.getProducto().isTieneIVA()) {
					subtotalIVA = subtotalIVA.multiply(new BigDecimal(1.12));
					sumatoriaIVA = sumatoriaIVA.add(subtotal.multiply(IVA));
				} else {
					System.out.println("Este producto no tiene IVA>>>>>>" + subtotalIVA);
				}
				psDet.setBigDecimal(6, subtotalIVA);

				psDet.executeUpdate();
				psHistorial.executeUpdate();
			}
			total = sumatoriaSubtotales.add(sumatoriaIVA);
			psActCabecera = con
					.prepareStatement("update cabecera_venta set total_sin_IVA=?,IVA=?,total=? where codigo=? ");
			psActCabecera.setBigDecimal(1, sumatoriaSubtotales);
			psActCabecera.setBigDecimal(2, sumatoriaIVA);
			psActCabecera.setBigDecimal(3, total);
			psActCabecera.setInt(4, codigoCabecera);
			psActCabecera.executeUpdate();

		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al insertar Detalle:" + e.getMessage());
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

	}

}

package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.UnidadMedida;
import com.krakedev.inventarios.excepciones.KrakedevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class ProductosBDD {
	public ArrayList<Producto> buscar(String subcadena) throws KrakedevException {
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Producto pro = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select prod.codigo,prod.nombre as nombre_producto,udm.codigo_udm as nombre_udm,"
					+ " udm.descripcion as descripcion_udm,"
					+ " cast(prod.precio_venta as decimal(6,2)),"
					+ " prod.tiene_iva,"
					+ " cast(prod.coste as decimal(6,2)),"
					+ " prod.categoria,cat.nombre as nombre_categoria,prod.stock"
					+ " from productos prod,unidades_medida udm,categorias cat"
					+ " where prod.udm = udm.codigo_udm"
					+ " and prod.categoria = cat.codigo_cat"
					+ " and upper(prod.nombre) like ?");
			ps.setString(1, "%"+subcadena.toUpperCase()+"%");
			rs = ps.executeQuery();

			while (rs.next()) {
				
				String codigo =rs.getString("codigo");
				String nombreProducto= rs.getString("nombre_producto");
				String nombreUDM =rs.getString("nombre_udm");
				String descripcionUDM= rs.getString("descripcion_udm");
				BigDecimal precioVenta =rs.getBigDecimal("precio_venta");
				boolean tieneIVA= rs.getBoolean("tiene_iva");
				BigDecimal coste =rs.getBigDecimal("coste");
				String categoria= rs.getString("categoria");
				String nombreCategoria =rs.getString("nombre_categoria");
				int stock= rs.getInt("stock");
				
				
				UnidadMedida unidadMedida = new UnidadMedida();
				unidadMedida.setCodigo(nombreUDM);
				unidadMedida.setDescripcion(descripcionUDM);
				Categoria cat = new Categoria();
				cat.setCodigo(categoria);
				cat.setNombre(nombreCategoria);
				
				pro = new Producto(); 
				pro.setCodigo(codigo);
				pro.setNombre(nombreProducto);
				pro.setUnidadMedida(unidadMedida);
				pro.setPrecioVenta(precioVenta);
				pro.setTieneIVA(tieneIVA);
				pro.setCoste(coste);
				pro.setCategoria(cat);
				pro.setStock(stock);
				
				
				
				


				productos.add(pro);
				System.out.println(pro);

			}

		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar Detalle:" + e.getMessage());
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return productos;
	}
}

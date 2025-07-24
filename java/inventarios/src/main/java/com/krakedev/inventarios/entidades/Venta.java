package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;

public class Venta {

	private int codigo;
	private Timestamp fecha;
	private BigDecimal totalSinIVA;
	private BigDecimal IVA;
	private BigDecimal total;
	private ArrayList<DetalleVenta> detalles;

	public Venta(int codigo, Timestamp fecha, BigDecimal totalSinIVA, BigDecimal iVA, BigDecimal total,
			ArrayList<DetalleVenta> detalles) {
		super();
		this.codigo = codigo;
		this.fecha = fecha;
		this.totalSinIVA = totalSinIVA;
		IVA = iVA;
		this.total = total;
		this.detalles = detalles;
	}

	public Venta() {
		super();
	}

	@Override
	public String toString() {
		return "Venta [codigo=" + codigo + ", fecha=" + fecha + ", totalSinIVA=" + totalSinIVA + ", IVA=" + IVA
				+ ", total=" + total + ", detalles=" + detalles + "]";
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public Timestamp getFecha() {
		return fecha;
	}

	public void setFecha(Timestamp fecha) {
		this.fecha = fecha;
	}

	public BigDecimal getTotalSinIVA() {
		return totalSinIVA;
	}

	public void setTotalSinIVA(BigDecimal totalSinIVA) {
		this.totalSinIVA = totalSinIVA;
	}

	public BigDecimal getIVA() {
		return IVA;
	}

	public void setIVA(BigDecimal iVA) {
		IVA = iVA;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public ArrayList<DetalleVenta> getDetalles() {
		return detalles;
	}

	public void setDetalles(ArrayList<DetalleVenta> detalles) {
		this.detalles = detalles;
	}

}

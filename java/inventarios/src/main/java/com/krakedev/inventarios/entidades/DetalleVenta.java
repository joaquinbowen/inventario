package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetalleVenta {

	private int codigo;
	private Venta cabecera;
	private Producto producto;
	private int cantidad;
	private BigDecimal precioVenta;
	private BigDecimal subtotal;
	private BigDecimal subtotalIVA;

	public DetalleVenta(int codigo, Venta cabecera, Producto producto, int cantidad, BigDecimal precioVenta,
			BigDecimal subtotal, BigDecimal subtotalIVA) {
		super();
		this.codigo = codigo;
		this.cabecera = cabecera;
		this.producto = producto;
		this.cantidad = cantidad;
		this.precioVenta = precioVenta;
		this.subtotal = subtotal;
		this.subtotalIVA = subtotalIVA;
	}

	public DetalleVenta() {
		super();
	}

	@Override
	public String toString() {
		return "DetalleVenta [codigo=" + codigo + ", cabecera=" + cabecera + ", producto=" + producto + ", cantidad="
				+ cantidad + ", precioVenta=" + precioVenta + ", subtotal=" + subtotal + ", subtotalIVA=" + subtotalIVA
				+ "]";
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public Venta getCabecera() {
		return cabecera;
	}

	public void setCabecera(Venta cabecera) {
		this.cabecera = cabecera;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public BigDecimal getSubtotalIVA() {
		return subtotalIVA;
	}

	public void setSubtotalIVA(BigDecimal subtotalIVA) {
		this.subtotalIVA = subtotalIVA;
	}

}

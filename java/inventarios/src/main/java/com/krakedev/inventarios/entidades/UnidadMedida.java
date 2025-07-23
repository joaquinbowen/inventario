package com.krakedev.inventarios.entidades;

public class UnidadMedida {

	private String codigo;
	private String descripcion;
	private CategoriasUDM categoriaUDM;

	public UnidadMedida(String codigo, String descripcion, CategoriasUDM categoriaUDM) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
		this.categoriaUDM = categoriaUDM;
	}

	public UnidadMedida() {
		super();
	}

	@Override
	public String toString() {
		return "UnidadMedida [codigo=" + codigo + ", descripcion=" + descripcion + ", categoriaUDM=" + categoriaUDM
				+ "]";
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public CategoriasUDM getCategoriaUDM() {
		return categoriaUDM;
	}

	public void setCategoriaUDM(CategoriasUDM categoriaUDM) {
		this.categoriaUDM = categoriaUDM;
	}

}

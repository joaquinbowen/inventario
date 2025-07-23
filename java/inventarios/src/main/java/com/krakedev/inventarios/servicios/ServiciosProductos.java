package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProductosBDD;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.excepciones.KrakedevException;

@Path("productos")
public class ServiciosProductos {

	@Path("buscar/{sub}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("sub")  String subcadena){
		ProductosBDD pro = new ProductosBDD();
		ArrayList<Producto> productos=null;
		try {
			productos = pro.buscar(subcadena);
			return Response.ok(productos).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	
	
}

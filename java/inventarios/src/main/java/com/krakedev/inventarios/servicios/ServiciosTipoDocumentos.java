package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.TipoDocumentosBDD;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakedevException;

@Path("tipoDocumentos")
public class ServiciosTipoDocumentos {
	
	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperar() {
		TipoDocumentosBDD doc = new TipoDocumentosBDD();
		ArrayList<TipoDocumento> tiposDoc =null;
		try {
			tiposDoc=doc.recuperar();
			return Response.ok(tiposDoc).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
			
		}
	}
	
	

}

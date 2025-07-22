drop table if exists detalle_pedido;
drop table if exists cabecera_pedido;
drop table if exists historial_stock;
drop table if exists productos;
drop table if exists unidades_medida;
drop table if exists proveedores;
--------------------------------------
drop table if exists cabecera_venta;
drop table if exists tipo_documento;
drop table if exists estado_pedido;
drop table if exists categorias;
drop table if exists categorias_udm;
------------------------------------
create table categorias(
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key(codigo_cat),
	constraint categorias_fk foreign key(categoria_padre) references categorias(codigo_cat)
);

insert into categorias(nombre,categoria_padre)
values('Materia Prima',null);
insert into categorias(nombre,categoria_padre)
values('Proteina',1);
insert into categorias(nombre,categoria_padre)
values('Salsas',1);
insert into categorias(nombre,categoria_padre)
values('Punto de venta',null);
insert into categorias(nombre,categoria_padre)
values('Bebidas',4);
insert into categorias(nombre,categoria_padre)
values('Con alcohol',5);
insert into categorias(nombre,categoria_padre)
values('Sin alcohol',5);

select * from categorias;

create table categorias_udm(
	codigo char(1) not null,
	nombre varchar(100) not null,
	constraint categorias_udm_pk primary key(codigo)
);

insert into categorias_udm(codigo,nombre)
values('U','Unidades');
insert into categorias_udm(codigo,nombre)
values('V','Volumen');
insert into categorias_udm(codigo,nombre)
values('P','Peso');

select * from categorias_udm;

create table unidades_medida(
	codigo_udm varchar(3) not null,
	descripcion varchar(100) not null,
	categoria_udm char (1) not null,
	constraint unidades_medida_pk primary key(codigo_udm),
	constraint unidades_categoria_fk foreign key(categoria_udm) references categorias_udm(codigo)
);

insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('ml','Mililitros','V');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('l','Litros','V');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('u','Unidad','U');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('d','Docena','U');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('g','Gramos','P');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('kg','Kilogramos','P');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('lb','Libras','P');

select * from unidades_medida;

create table productos(
	codigo serial,
	nombre varchar(100) not null,
	udm varchar(3) not null,
	precio_venta money not null,
	tiene_IVA boolean not null,
	coste money not null,
	categoria int not null,
	stock int not null,
	constraint productos_pk primary key(codigo),
	constraint productos_udm_fk foreign key(udm) references unidades_medida(codigo_udm),
	constraint productos_categoria_fk foreign key(categoria) references categorias(codigo_cat)
);

insert into productos(nombre,udm,precio_venta,tiene_IVA,coste,categoria,stock)
values('Cocacola pequeña','u',0.5804,true,0.3729,7,105);
insert into productos(nombre,udm,precio_venta,tiene_IVA,coste,categoria,stock)
values('Salsa de tomate','kg',0.95,true,0.8736,3,0);
insert into productos(nombre,udm,precio_venta,tiene_IVA,coste,categoria,stock)
values('Mostaza','kg',0.95,true,0.89,3,0);
insert into productos(nombre,udm,precio_venta,tiene_IVA,coste,categoria,stock)
values('FuzeTea','u',0.8,true,0.7,7,49);

select * from productos;


create table historial_stock(
	codigo serial,
	fecha timestamp not null,
	referencia varchar(50) not null,
	producto int not null,
	cantidad int not null,
	constraint historial_stock_pk primary key(codigo),
	constraint historial_stock_producto_fk foreign key(producto) references productos(codigo)
);

insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 14:23','Pedido 1',1,100);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 14:23','Pedido 1',2,20);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 14:23','Pedido 2',1,10);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 14:23','Venta 1',1,-5);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 14:23','Venta 1',4,1);

select * from historial_stock;

create table tipo_documento(
	codigo char(1) not null,
	descripcion varchar(100) not null,
	constraint tipo_documento_pk primary key(codigo)
);

insert into tipo_documento(codigo,descripcion)
values('C','Cedula');
insert into tipo_documento(codigo,descripcion)
values('R','Ruc');

select * from tipo_documento;

create table proveedores(
	identificador varchar(13) not null,
	tipo_documento char(1) not null,
	nombre varchar(100) not null,
	telefono varchar(10) not null,
	correo varchar(100) not null,
	direccion varchar(100) not null,
	constraint proveedores_pk primary key(identificador),
	constraint proveedores_tipo_documento_fk foreign key(tipo_documento) references tipo_documento(codigo)
);

insert into proveedores(identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1710028224001','R','Suarez','0995531173','bow@gmail.com','Guamani');
insert into proveedores(identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1725040479','C','Bowen','0995771173','bw@gmail.com','Conocoto');

select * from proveedores;

create table estado_pedido(
	codigo char(1) not null,
	descripcion varchar(100) not null,
	constraint estado_pedido_pk primary key(codigo)
);

insert into estado_pedido(codigo,descripcion)
values('S','Solicitado');
insert into estado_pedido(codigo,descripcion)
values('R','Recibido');

select * from estado_pedido;

create table cabecera_pedido(
	numero serial,
	proveedor varchar(13) not null,
	fecha date not null,
	estado char(1) not null,
	constraint cabecera_pedido_pk primary key(numero),
	constraint cabecera_pedido_estado_fk foreign key(estado) references estado_pedido(codigo),
	constraint cabcera_pedido_proveedor_fk foreign key(proveedor) references proveedores(identificador)
);


insert into cabecera_pedido(proveedor,fecha,estado)
values('1725040479','28/11/2022','R');
insert into cabecera_pedido(proveedor,fecha,estado)
values('1725040479','28/11/2022','R');

select * from cabecera_pedido;

create table detalle_pedido(
	codigo serial,
	cabecera_pedido int not null,
	producto int not null,
	cantidad_solicitada int not null,
	subtotal money not null,
	cantidad_recibida int not null,
	constraint detalle_pedido_pk primary key(codigo),
	constraint detalle_cabecera_pedido_fk foreign key(cabecera_pedido) references cabecera_pedido(numero),
	constraint detalle_pedido_producto_fk foreign key(producto) references productos(codigo)
);

insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(1,1,100,37.29,100);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(1,2,20,15,20);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(2,1,10,3.73,10);

select * from detalle_pedido;


create table cabecera_venta(
	codigo serial,
	fecha timestamp not null,
	total_sin_IVA money not null,
	IVA money not null,
	total money not null,
	constraint cabecera_venta_pk primary key(codigo)
);

insert into cabecera_venta(fecha,total_sin_IVA,IVA,total)
values('20/11/2023 14:23',3.26,0.39,3.65);

select  * from cabecera_venta;

create table detalle_ventas(
	codigo serial,
	cabecera_ventas int not null,
	producto int not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal money not null,
	subtotal_IVA money not null,
	constraint detalle_ventas_pk primary key(codigo),
	constraint detalle_cabecera_ventas_fk foreign key(cabecera_ventas) references cabecera_venta(codigo),
	constraint ventas_producto_fk foreign key(producto) references productos(codigo)
);

insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_IVA)
values(1,1,5,0.58,2.9,3.25);
insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_IVA)
values(1,4,1,0.36,0.36,0.4);

select * from detalle_ventas;



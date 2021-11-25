// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  var obj = {
    nombre : nombre,
    edad: edad,
    meow: function() {
      return('Meow!');
    }
  };
return obj;
}


function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  var multiplicación = objetoMisterioso.numeroMisterioso * 5;
  return multiplicación;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  var objeto = {
    nombre: nombre,
    email: email,
    password: password
  }
  return objeto;
}

function tieneEmail(usuario) {
  if (usuario['email']){
    return true;
  }  else {
    return false;
  }
}



function tienePropiedad(objeto, propiedad) {
  if(objeto[propiedad]) {
  return true;
}  else {
  return false;
}
}

function verificarPassword(usuario, password) {
  if(usuario['password'] === password) {
    return true;
  }  else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);

  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  var suma = 0;
  for (var i = 0; i < usuario.posts.length; i++) {
    suma = suma + usuario.posts[i].likes;
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  producto.calcularPrecioDescuento = function () {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};

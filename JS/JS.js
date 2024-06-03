// Array para guardar los datos de los productos
let productos = [];

// Función para agregar un producto al array
function agregarProducto() {
  const categoria = document.querySelector("#categoria").value;
  const producto = document.querySelector("#producto").value;
  const precio = document.querySelector("#precio").value;
  const fechaVencimiento = document.querySelector("#fechaVencimiento").value;
  const cantidad = document.querySelector("#cantidad").value;

  const nuevoProducto = {
    categoria: categoria,
    producto: producto,
    precio: precio,
    fechaVencimiento: fechaVencimiento,
    cantidad: cantidad
  };

  productos.push(nuevoProducto);

  // Agregar el producto a la tabla
  const tbody = document.querySelector("#tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nuevoProducto.categoria}</td>
    <td>${nuevoProducto.producto}</td>
    <td>${nuevoProducto.precio}</td>
    <td>${nuevoProducto.fechaVencimiento}</td>
    <td>${nuevoProducto.cantidad}</td>
  `;
  tbody.appendChild(row);

  // Limpiar los campos del formulario
  document.querySelector("#producto").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#fechaVencimiento").value = "";
  document.querySelector("#cantidad").value = "";
}
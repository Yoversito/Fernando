// Datos de los productos con precios unitarios corregidos
const productos = [
    { nombre: 'Desodorante Axe', cantidad: 12, precioCompra: 9.90, precioVenta: 16, vendido: 1 },   // YA ESTÁ
    { nombre: 'Desodorante Dove F.', cantidad: 12, precioCompra: 11.50, precioVenta: 16, vendido: 0 },  // YA ESTÁ
    { nombre: 'Desodorante Dove M.', cantidad: 12, precioCompra: 11.50, precioVenta: 16, vendido: 1 },  // YA ESTÁ
    { nombre: 'Desodorante Nivea', cantidad: 12, precioCompra: 10.50, precioVenta: 16, vendido: 0 }, // YA ESTÁ
    { nombre: 'Desodorante Rexona', cantidad: 12, precioCompra: 10.50, precioVenta: 15, vendido: 0 }, // YA ESTÁ
    { nombre: 'Shampoo Hys 375 ml', cantidad: 12, precioCompra: 15.50, precioVenta: 19, vendido: 0 }, // YA ESTA
    { nombre: 'Shampoo Hys 650 ml', cantidad: 6, precioCompra: 23.50, precioVenta: 27, vendido: 0 }, // YA ESTÁ
    { nombre: 'Shampoo Pantene 400 ml', cantidad: 12, precioCompra: 15.50, precioVenta: 19, vendido: 0 }, // YA ESTÁ
    { nombre: 'Shampoo Sedal 340 ml', cantidad: 12, precioCompra: 9.50, precioVenta: 14, vendido: 0 }, // YA ESTÁ
    { nombre: 'Shampoo Ego', cantidad: 12, precioCompra: 14.50, precioVenta: 19, vendido: 0 }, // YA ESTÁ
    { nombre: 'Shampoo Clear', cantidad: 12, precioCompra: 13.50, precioVenta: 18, vendido: 0 },  // YA ESTÁ 
    { nombre: 'Shampoo Amarás', cantidad: 6, precioCompra: 13.50, precioVenta: 16, vendido: 0 },  // YA ESTÁ
    { nombre: 'Jabón Protex', cantidad: 12, precioCompra: 3.38, precioVenta: 4.50, vendido: 1 }, // YA ESTÁ
    { nombre: 'Jabón Palmolive', cantidad: 12, precioCompra: 3.04, precioVenta: 4.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Jabón Moncler', cantidad: 12, precioCompra: 3.71, precioVenta: 4.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Jabón Camay', cantidad: 12, precioCompra: 2.88, precioVenta: 4, vendido: 0 }, // YA ESTÁ
    { nombre: 'Jabón Dove', cantidad: 12, precioCompra: 3.38, precioVenta: 4.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Alcohol Pequeño 70°', cantidad: 24, precioCompra: 1.04, precioVenta: 2.50, vendido: 4 }, // YA ESTÁ
    { nombre: 'Alcohol Pequeño 96°', cantidad: 24, precioCompra: 1.13, precioVenta: 2.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Agua Azahar', cantidad: 12, precioCompra: 0.88, precioVenta: 2, vendido: 0 }, // YA ESTÁ
    { nombre: 'Agua Oxigenada', cantidad: 12, precioCompra: 0.88, precioVenta: 2, vendido: 0 }, // YA ESTÁ
    { nombre: 'Vinagre Tipo Bully', cantidad: 24, precioCompra: 1.13, precioVenta: 2, vendido: 1 }, // YA ESTÁ
    { nombre: 'Aceite de Coco', cantidad: 24, precioCompra: 0.96, precioVenta: 2, vendido: 1 }, // YA ESTÁ
    { nombre: 'Violeta', cantidad: 24, precioCompra: 0.96, precioVenta: 2, vendido: 0 }, // YA ESTÁ
    { nombre: 'Aceite Rosado', cantidad: 12, precioCompra: 1.04, precioVenta: 2.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Alcohol Yodado', cantidad: 12, precioCompra: 0.96, precioVenta: 1.50, vendido: 0 }, // YA ESTÁ
    { nombre: 'Gel Ego', cantidad: 12, precioCompra: 3.25, precioVenta: 6, vendido: 0 }, // YA ESTÁ
    { nombre: 'Ponds Pte. Pequeño', cantidad: 6, precioCompra: 11.17, precioVenta: 15, vendido: 0 }, // YA ESTÁ
    { nombre: 'Ponds Sachet', cantidad: 40, precioCompra: 0.93, precioVenta: 1.50, vendido: 3 }, // YA ESTÁ
];

// Control de ventas - editable desde el código
let ventasControl = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

// Función para actualizar ventas desde el código
function actualizarVentas(nuevasVentas) {
    if (nuevasVentas.length === productos.length) {
        ventasControl = [...nuevasVentas];
        // Sincronizar con productos
        productos.forEach((producto, index) => {
            producto.vendido = ventasControl[index];
        });
        actualizarTabla();
    }
}

// Función para calcular ganancias y actualizar la tabla
function actualizarTabla() {
    let totalBruto = 0;
    let totalNeto = 0;
    let totalInversion = 0;
    const tableBody = document.getElementById('productTable');

    // Limpiar tabla
    tableBody.innerHTML = '';

    productos.forEach((producto, index) => {
        // Calcular stock actual
        const stockActual = producto.cantidad - producto.vendido;
        
        // Calcular subtotal de compra por fila
        const subtotalCompra = producto.precioCompra * producto.cantidad;
        
        // Calcular ganancias
        const gananciaNeta = producto.vendido > 0 ? 
            (producto.precioVenta - producto.precioCompra) * producto.vendido : 0;
        
        const gananciaBruta = producto.vendido > 0 ? 
            producto.precioVenta * producto.vendido : 0;

        totalBruto += gananciaBruta;
        totalNeto += gananciaNeta;
        totalInversion += subtotalCompra;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td class="text-center">${stockActual}</td>
            <td class="text-center">${producto.vendido}</td>
            <td class="text-center">S/. ${producto.precioCompra.toFixed(2)}</td>
            <td class="text-center">S/. ${subtotalCompra.toFixed(2)}</td>
            <td class="text-center">${producto.precioVenta > 0 ? 'S/. ' + producto.precioVenta.toFixed(2) : 'Por definir'}</td>
            <td class="text-center">S/. ${gananciaBruta.toFixed(2)}</td>
            <td class="text-center">S/. ${gananciaNeta.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Actualizar totales
    document.getElementById('totalBruto').textContent = totalBruto.toFixed(2);
    document.getElementById('totalNeto').textContent = totalNeto.toFixed(2);
    document.getElementById('totalInversion').textContent = totalInversion.toFixed(2);
}

window.onload = actualizarTabla;

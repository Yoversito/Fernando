// Datos de productos CON VENTAS YA DEFINIDAS
const productos = [
    { nombre: 'Desodorante Axe', cantidad: 12, precioCompra: 9.90, precioVenta: 16, vendido: 5 },
    { nombre: 'Desodorante Dove F.', cantidad: 12, precioCompra: 11.50, precioVenta: 16, vendido: 3 },
    { nombre: 'Desodorante Dove M.', cantidad: 12, precioCompra: 11.50, precioVenta: 16, vendido: 0 },
    { nombre: 'Desodorante Nivea', cantidad: 12, precioCompra: 10.50, precioVenta: 16, vendido: 0 },
    { nombre: 'Desodorante Rexona', cantidad: 12, precioCompra: 10.50, precioVenta: 15, vendido: 0 },
    { nombre: 'Shampoo Hys 375 ml', cantidad: 12, precioCompra: 15.50, precioVenta: 19, vendido: 7 },
    { nombre: 'Shampoo Hys 650 ml', cantidad: 6, precioCompra: 23.50, precioVenta: 27, vendido: 2 },
    { nombre: 'Shampoo Pantene 400 ml', cantidad: 12, precioCompra: 15.50, precioVenta: 19, vendido: 1 },
    { nombre: 'Shampoo Sedal 340 ml', cantidad: 12, precioCompra: 9.50, precioVenta: 14, vendido: 4 },
    { nombre: 'Shampoo Ego', cantidad: 12, precioCompra: 14.50, precioVenta: 19, vendido: 0 },
    { nombre: 'Shampoo Clear', cantidad: 12, precioCompra: 13.50, precioVenta: 18, vendido: 1 },
    { nombre: 'Shampoo Amarás', cantidad: 6, precioCompra: 13.50, precioVenta: 16, vendido: 3 },
    { nombre: 'Jabón Protex', cantidad: 12, precioCompra: 3.38, precioVenta: 4.50, vendido: 3 },
    { nombre: 'Jabón Palmolive', cantidad: 12, precioCompra: 3.04, precioVenta: 4.50, vendido: 2 },
    { nombre: 'Jabón Moncler', cantidad: 12, precioCompra: 3.71, precioVenta: 4.50, vendido: 1 },
    { nombre: 'Jabón Camay', cantidad: 12, precioCompra: 2.88, precioVenta: 4, vendido: 0 },
    { nombre: 'Jabón Dove', cantidad: 12, precioCompra: 3.38, precioVenta: 4.50, vendido: 0 },
    { nombre: 'Alcohol Pequeño 70°', cantidad: 24, precioCompra: 1.04, precioVenta: 2.50, vendido: 8 },
    { nombre: 'Alcohol Pequeño 96°', cantidad: 24, precioCompra: 1.13, precioVenta: 2.50, vendido: 3 },
    { nombre: 'Agua Azahar', cantidad: 12, precioCompra: 0.88, precioVenta: 2, vendido: 1 },
    { nombre: 'Agua Oxigenada', cantidad: 12, precioCompra: 0.88, precioVenta: 2, vendido: 3 },
    { nombre: 'Vinagre Tipo Bully', cantidad: 24, precioCompra: 1.13, precioVenta: 2, vendido: 5 },
    { nombre: 'Aceite de Coco', cantidad: 24, precioCompra: 0.96, precioVenta: 2, vendido: 5 },
    { nombre: 'Violeta', cantidad: 24, precioCompra: 0.96, precioVenta: 2, vendido: 2 },
    { nombre: 'Aceite Rosado', cantidad: 12, precioCompra: 1.04, precioVenta: 2.50, vendido: 0 },
    { nombre: 'Alcohol Yodado', cantidad: 12, precioCompra: 0.96, precioVenta: 1.50, vendido: 3 },
    { nombre: 'Gel Ego', cantidad: 12, precioCompra: 3.25, precioVenta: 6, vendido: 3 },
    { nombre: 'Ponds Pte. Pequeño', cantidad: 6, precioCompra: 11.17, precioVenta: 15, vendido: 1 },
    { nombre: 'Ponds Sachet', cantidad: 40, precioCompra: 0.93, precioVenta: 1.50, vendido: 10 },
];

// Adelantos SOLO para Fernando
let adelantosFernando = [
    { monto: 300, fecha: "12/12/2025" },
    { monto: 8, fecha: "28/12/2025" },
    { monto: 100, fecha: "18/01/2026" },
];

// Función PRINCIPAL que calcula TODO
function calcularYMostrarTodo() {
    console.log("Ejecutando cálculos...");
    
    let totalBruto = 0;
    let totalNeto = 0;
    let totalInversion = 0;
    const tableBody = document.getElementById('productTable');

    // Limpiar tabla
    tableBody.innerHTML = '';

    // 1. CALCULAR GANANCIAS DE PRODUCTOS (igual que antes)
    productos.forEach((producto, index) => {
        const stockActual = producto.cantidad - producto.vendido;
        const subtotalCompra = producto.precioCompra * producto.cantidad;
        const gananciaNeta = producto.vendido > 0 ? 
            (producto.precioVenta - producto.precioCompra) * producto.vendido : 0;
        const gananciaBruta = producto.vendido > 0 ? 
            producto.precioVenta * producto.vendido : 0;

        totalBruto += gananciaBruta;
        totalNeto += gananciaNeta;
        totalInversion += subtotalCompra;

        // Crear fila
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-start">${producto.nombre}</td>
            <td class="text-center">${stockActual}</td>
            <td class="text-center">${producto.vendido}</td>
            <td class="text-center">S/. ${producto.precioCompra.toFixed(2)}</td>
            <td class="text-center">S/. ${subtotalCompra.toFixed(2)}</td>
            <td class="text-center">${producto.precioVenta > 0 ? 'S/. ' + producto.precioVenta.toFixed(2) : 'Por definir'}</td>
            <td class="text-center text-success fw-bold">S/. ${gananciaBruta.toFixed(2)}</td>
            <td class="text-center text-success fw-bold">S/. ${gananciaNeta.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // 2. MOSTRAR TOTALES EN TABLA PRINCIPAL
    document.getElementById('totalBruto').textContent = totalBruto.toFixed(2);
    document.getElementById('totalNeto').textContent = totalNeto.toFixed(2);
    document.getElementById('totalInversion').textContent = totalInversion.toFixed(2);

    // 3. CALCULAR DISTRIBUCIÓN (según tu explicación)
    // Yover recibe 40% de la ganancia NETA
    const yoverRecibe = totalNeto * 0.40;
    
    // Fernando recibe la ganancia BRUTA menos lo que recibe Yover
    const fernandoAntesAdelantos = totalBruto - yoverRecibe;
    
    // Total de adelantos de Fernando
    const totalAdelantosFernando = adelantosFernando.reduce((sum, adelanto) => sum + adelanto.monto, 0);
    
    // Fernando recibe lo que le corresponde menos sus adelantos
    const fernandoFinal = fernandoAntesAdelantos - totalAdelantosFernando;
    
    // Total dinero a distribuir
    const totalADistribuir = totalBruto;

    // 4. MOSTRAR EN LA DISTRIBUCIÓN DE GANANCIAS (¡Aquí es donde quieres que se muestre!)
    // Sección Fernando
    document.getElementById('fernandoBruto').textContent = `S/. ${totalBruto.toFixed(2)}`;
    document.getElementById('fernandoMenosYover').textContent = `- S/. ${yoverRecibe.toFixed(2)}`;
    document.getElementById('fernandoMenosAdelantos').textContent = `- S/. ${totalAdelantosFernando.toFixed(2)}`;
    document.getElementById('fernandoTotal').textContent = `S/. ${fernandoFinal.toFixed(2)}`;
    
    // Sección Yover
    document.getElementById('gananciaNetaTotal').textContent = `S/. ${totalNeto.toFixed(2)}`;
    document.getElementById('yoverPorcentaje').textContent = `S/. ${yoverRecibe.toFixed(2)} (40%)`;
    document.getElementById('yoverTotal').textContent = `S/. ${yoverRecibe.toFixed(2)}`;
    
    // 5. MOSTRAR EN CONTROL DE ADELANTOS
    document.getElementById('totalFernandoAdvances').textContent = `S/. ${totalAdelantosFernando.toFixed(2)}`;
    
    // 6. MOSTRAR EN RESUMEN FINAL
    document.getElementById('finalBruto').textContent = `S/. ${totalBruto.toFixed(2)}`;
    document.getElementById('finalNeto').textContent = `S/. ${totalNeto.toFixed(2)}`;
    document.getElementById('finalFernandoBalance').textContent = `S/. ${fernandoFinal.toFixed(2)}`;
    document.getElementById('finalYoverBalance').textContent = `S/. ${yoverRecibe.toFixed(2)}`;
    document.getElementById('totalADistribuir').textContent = `S/. ${totalADistribuir.toFixed(2)}`;
    
    // 7. MOSTRAR LISTA DE ADELANTOS
    actualizarListaAdelantos();
    
    console.log("Cálculos completados:");
    console.log("Total Bruto:", totalBruto.toFixed(2));
    console.log("Total Neto:", totalNeto.toFixed(2));
    console.log("Yover recibe:", yoverRecibe.toFixed(2));
    console.log("Fernando final:", fernandoFinal.toFixed(2));
}

// Función para mostrar lista de adelantos
function actualizarListaAdelantos() {
    const historyContainer = document.getElementById('advancesHistory');
    historyContainer.innerHTML = '';
    
    if (adelantosFernando.length === 0) {
        historyContainer.innerHTML = `
            <div class="list-group-item text-center text-muted">
                No hay adelantos registrados
            </div>
        `;
        return;
    }
    
    adelantosFernando.forEach((adelanto, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center py-2';
        
        const fecha = adelanto.fecha || `Adelanto ${index + 1}`;
        
        listItem.innerHTML = `
            <div>
                <span class="badge bg-primary me-2">Fernando</span>
                <small class="text-muted">${fecha}</small>
            </div>
            <div>
                <span class="fw-bold">S/. ${adelanto.monto.toFixed(2)}</span>
            </div>
        `;
        historyContainer.appendChild(listItem);
    });
}

// Función para actualizar fecha
function actualizarFechaHora() {
    const now = new Date();
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    };
    const dateTimeStr = now.toLocaleString('es-ES', options);
    document.getElementById('currentDateTime').textContent = dateTimeStr;
}

// Cuando la página cargue, calcular TODO automáticamente
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado, ejecutando cálculos automáticos...");
    
    // 1. Calcular y mostrar todo
    calcularYMostrarTodo();
    
    // 2. Actualizar fecha
    actualizarFechaHora();
    
    // 3. Año actual
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // 4. Botón de actualizar (solo para forzar recalcular)
    document.getElementById('refreshData').addEventListener('click', function() {
        calcularYMostrarTodo();
        actualizarFechaHora();
        this.innerHTML = '<i class="fas fa-sync-alt fa-spin me-1"></i> Actualizando...';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-sync-alt me-1"></i> Actualizar datos';
        }, 1000);
    });
    
    console.log("Todo listo, cálculos mostrados en pantalla.");
});

// Funciones para modificar desde la consola (opcional)
window.actualizarVentas = function(nuevasVentas) {
    if (nuevasVentas.length === productos.length) {
        nuevasVentas.forEach((venta, index) => {
            productos[index].vendido = venta;
        });
        calcularYMostrarTodo();
    }
};

window.actualizarAdelantos = function(nuevosAdelantos) {
    adelantosFernando = [...nuevosAdelantos];
    calcularYMostrarTodo();
};
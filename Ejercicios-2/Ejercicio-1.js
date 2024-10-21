// ## Sistema de Gestión de Inventario
//Defino una clase de error para el producto no encontrado
function findProduct(inventory, id //Id del producto a buscar
) {
    var product = inventory.find(function (p) { return p[0] === id; });
    if (!product) {
        throw new Error('Producto no encontrado');
    }
    if (product[3] === 0) {
        throw new Error('Producto agotado');
    }
    return product;
}
var inventory = [
    [1, "Camiseta", 19.99, 50],
    [2, "Pantalón", 39.99, 30],
    [3, "Zapatos", 59.99, 0], // Agotado
];
try {
    console.log(findProduct(inventory, 1)); // Debería retornar el producto con ID 1
    console.log(findProduct(inventory, 3)); // Debería retornar la advertencia de que está agotado
    console.log(findProduct(inventory, 5)); // Debería lanzar un error de producto no encontrado
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // Captura el error de producto no encontrado
        // Captura otros errores (como producto agotado)
    }
    else {
        console.error('Unknown error', error); // Captura cualquier otro tipo de error
    }
}

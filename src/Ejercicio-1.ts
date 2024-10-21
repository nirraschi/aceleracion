// ## Sistema de Gestión de Inventario

// **Enunciado:**
// Desarrolla un sistema avanzado de gestión de inventario para una tienda en línea. Cada producto debe representarse mediante una tupla que contenga su `id`, `name`, `price` y `quantity`. El sistema debe incluir una función genérica que busque productos por su `id`. Además, asegúrate de implementar manejo de errores para productos no encontrados o con existencias agotadas.

// **Requisitos adicionales:**
// - Si el producto no existe, se debe lanzar un error personalizado.
// - Si el producto está agotado (cantidad = 0), debe retornar una advertencia.
// - El sistema debe poder registrar operaciones de búsqueda, indicando si fueron exitosas o fallidas.

// **Código base:**
// ```typescript
// type Product = [number, string, number, number];

// function findProduct<T extends Product>(
//   inventory: T[],
//   id: number
// ): T | undefined {
//   // Implementar la búsqueda del producto y manejo de errores
// }

// // Ejemplo de inventario (solo como referencia)
// const inventory: Product[] = [
//   [1, "Camiseta", 19.99, 50],
//   [2, "Pantalón", 39.99, 30],
//   [3, "Zapatos", 59.99, 0], // Agotado
// ];
// ```

// ---

// 1er elemento =  id (número).
// 2do elemento = name (string).
// 3er elemento = price (número).
// 4to elemento = quantity (número).


type Product = [number, string, number, number]; //Defino los tipos de Producto

//Defino una clase de error para el producto no encontrado



function findProduct<T extends Product>(
    inventory: T[],
    id: number //Id del producto a buscar
): T | string  {
    const product = inventory.find((p) => p[0] === id);

    if (!product) {
        throw new Error('Producto no encontrado');
    }
    if (product[3] === 0) {
        throw new Error('Producto agotado');
    }
    
    return product;
}

const inventory: Product[] = [
    [1, "Camiseta", 19.99, 50],
    [2, "Pantalón", 39.99, 30],
    [3, "Zapatos", 59.99, 0], // Agotado
];

try {
    console.log(findProduct(inventory, 1)); // Debería retornar el producto con ID 1
    console.log(findProduct(inventory, 3)); // Debería retornar la advertencia de que está agotado
    console.log(findProduct(inventory, 5)); // Debería lanzar un error de producto no encontrado
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // Captura el error de producto no encontrado
    } else {
        console.error('Unknown error', error); // Captura cualquier otro tipo de error
    }
}
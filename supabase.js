// Importar las librerías necesarias
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

// Inicializar la conexión con Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// Consultar productos con stock mayor a cero
async function obtenerProductosDisponibles() {

    const { data, error } = await supabase
        .from('productos')
        .select('*')
        .gt('stock', 0);

    if (error) {
        console.error('Error al consultar productos:', error);
        return;
    }

    console.log('Productos disponibles:', data);
}

// Ejecutar la consulta
obtenerProductosDisponibles();
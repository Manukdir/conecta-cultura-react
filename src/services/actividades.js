export async function obtenerNombres(servicios) {
    const actividades = await servicios.listar();
    return actividades.map((actividad) => actividad.nombre);

}
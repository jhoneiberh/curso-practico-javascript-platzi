const tipoSuscripciones = {
    free: "Puedes tomar todos los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzo",
    expert: "Pueden tomar casi todos los cursos de platzi durante un año",
    expertduo: "Tú y alhuien más pueden tomar casi todos los cursos de platzi durante un año",
}

let readSuscripsion = "basic";


function conseguirTipoSuscripcion(suscripcion)
{
    if(tipoSuscripciones[suscripcion])
    {
        console.log(tipoSuscripciones[suscripcion]);
        return;
    }
    console.warn("Ese tipo de suscripcion no existe");
}

conseguirTipoSuscripcion(readSuscripsion);
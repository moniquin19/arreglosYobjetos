let ubiCacion = document.location.href.split("/").slice(-1)[0]

const smoke_true = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
const smoke_false = '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'
const pets_true = '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>'
const pets_false = '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'

const renderize = function(propiedad) {
    let smoke = (propiedad.smoke) ? smoke_true : smoke_false;
    let pets = (propiedad.pets) ? pets_true : pets_false
    return `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
            src=${propiedad.src}
            class="card-img-top"
            alt="Imagen del departamento"
        />
        <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">
            ${propiedad.descripcion}
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones 
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            ${smoke}
            ${pets}
        </div>
        </div>
    </div>
    `
}

if (ubiCacion == 'index.html') {

    let row_vtas = document.getElementById('row_vtas')
    let row_alq = document.getElementById('row_alq')

    let venta_html = ""
    let alquiler_html = ""
    let cont_v = 0
    let cont_a = 0
    for (const prop of propiedades_venta) {

        if (cont_v < 3) {
            venta_html += renderize(prop)
            cont_v++
        } else {
            break
        }
    }

    for (const prop of propiedades_alquiler) {
        if (cont_a < 3) {
            alquiler_html += renderize(prop)
            cont_a++
        } else {
            break
        }
    }

    row_vtas.innerHTML = venta_html
    row_alq.innerHTML = alquiler_html
}


// Se ejecuta solo si estamos en ventas
if (ubiCacion == 'propiedades_venta.html') {
    let row_vtas_page = document.getElementById('row_vtas_page')
    let venta_html_page = ""

    for (const prop of propiedades_venta) {
        venta_html_page += renderize(prop)
    }

    row_vtas_page.innerHTML = venta_html_page
}

// Se ejecuta solo si estamos en alquiler
if (ubiCacion == 'propiedades_alquiler.html') {
    let row_alq_page = document.getElementById('row_alq_page')
    let alquiler_html_page = ""

    for (const prop of propiedades_alquiler) {
        alquiler_html_page += renderize(prop)
    }

    row_alq_page.innerHTML = alquiler_html_page
}
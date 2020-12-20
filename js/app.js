window.onload = function() {
    let links = document.querySelectorAll('.sin-permiso')
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            swal({
              title: "Vaya!",
              text: "Sé que quieres ver más de este increíble sítio, pero justo en este momento estoy renovando algunas paginas como la de habilidades, portafolio y contacto. Pero ánimo, ya está casi listo!",
              icon: "info",
              button: "Ok, entiendo!",
            });
        })
    })
}
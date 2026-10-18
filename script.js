const hora = document.querySelector(".hora");
const fecha = document.querySelector(".fecha")



function actualizarHora() {
    let now = new Date()
    let hrs = now.getHours().toString()
    let mins = now.getMinutes().toString()
    let secs = now.getSeconds().toString()
    
    hrs = hrs.padStart(2,0)
    mins = mins.padStart(2,0)
    secs = secs.padStart(2,0)
    hora.textContent = `${hrs}:${mins}:${secs}`
    
    fecha.textContent = now.toLocaleDateString("es-ES", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    })
}

actualizarHora()
setInterval(actualizarHora, 500)
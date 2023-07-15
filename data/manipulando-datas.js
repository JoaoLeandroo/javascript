function registerDateAndHour() {
    const date = new Date()
    let day = date.getDay()
    day = String(day).padStart(2, "0")

    let month = date.getMonth() + 1
    month = String(month).padStart(2, "0")

    let year = date.getFullYear()
    year = String(year).padStart(2, "0")

    let hour = date.getHours()
    hour = String(hour).padStart(2, "0")

    let minutes = date.getMinutes()
    minutes = String(minutes).padStart(2, "0")

    let seconds = date.getSeconds()
    seconds = String(seconds).padStart(2, "0")
    
    return {
        dia: day,
        mes: month,
        ano: year,

        hora: hour,
        minuto: minutes,
        segundo: seconds
    }
}

const x = registerDateAndHour()
console.log(`Data: ${x.dia}/${x.mes}/${x.segundo}`)
console.log(`Horas: ${x.hora}:${x.minuto}:${x.segundo}`)
function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`
    if (hora >= 0 && hora <12){
        img.src= 'fotos/foto-manha.jpg'
        document.body.style.background = "#e2cd9f"
        document.querySelector('section').style.boxShadow = "5px 5px 10px rgba(203, 172, 105, 0.59)"
        document.box-shadow
    } else if (hora >=12 && hora < 18){
        img.src = 'fotos/foto-tarde.jpg'
        document.body.style.background = "#de8d29"
        document.querySelector('section').style.boxShadow = "5px 5px 10px rgba(117, 66, 4, 0.76)"
    } else {
        img.src='fotos/foto-noite.jpg'
        document.body.style.background = "#14033a"
        document.querySelector('section').style.boxShadow = "5px 5px 10px rgba(14, 3, 37, 0.73)" 
    }
}

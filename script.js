let agora = new Date()
let hora = agora.getHours()
console.log(`são exatamente ${hora} horas.`)

if ( hora >=0 && hora <= 5 ){
    console.log("é madrugada.")
    console.log("durma bem.")
} else if (hora >=6 && hora <= 11){ 
    console.log("é manhã.")
    console.log("bom dia")
}else if (hora >=12 && hora <=17){
    console.log("é tarde.")
    console.log("boa tarde")
}else{
    console.log("é noite.")
    console.log("boa noite, hora de dormir.")
}

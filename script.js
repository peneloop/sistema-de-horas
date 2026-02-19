//horas

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

//dia da semana
let agora = new Date()
let diaSem = agora.getDay()
/* 
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

switch(diaSem){
    case 0:
        console.log("domingo")
        break
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 6:
        console.log("sabado")
        break
    default:
        console.log("vc ta no nether")
} 

const priceMonopolio = 70.99;
const priceAjedrez = 78.99;
const priceLego = 100.99;
const priceDama = 58.50;
const priceLaberinto = 35.00;

let btnComprar = document.getElementById('comprar');

btnComprar.addEventListener('click',montoTotal);

function montoTotal(){
    let cantidadMonopolio = document.getElementById('monopolio').value;
    let cantidadAjedrez = document.getElementById('ajedrez').value;
    let cantidadLego = document.getElementById('lego').value;
    let cantidadDama = document.getElementById('dama').value;
    let cantidadLaberinto = document.getElementById('laberinto').value;
    let resultado = document.getElementById('resultado'); 

    let subTotal = priceMonopolio*cantidadMonopolio+priceAjedrez*cantidadAjedrez+priceLego*cantidadLego+priceDama*cantidadDama+priceLaberinto*cantidadLaberinto;
    //console.log(subTotal);

    let sumaCantidades = cantidadMonopolio+cantidadAjedrez+cantidadLego+cantidadDama+cantidadLaberinto;
    //console.log(sumaCantidades);

    let descuento = 0;
    if(sumaCantidades > 0 && sumaCantidades < 10){
        descuento = 3.5;
    }else if(sumaCantidades >= 10 && sumaCantidades <= 20){
        descuento = 7.0;
    }else if(sumaCantidades >20){
        descuento = 9.5;
    }
    //console.log(descuento)

    let total = subTotal - (subTotal*descuento/100);
    //console.log(total)
    resultado.textContent = 'El total a pagar es: '+total + ' con el descuento del '+descuento+'%.';
}






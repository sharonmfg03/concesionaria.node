const autos = require('./autos');
const personas=require("./personas");

const concesionaria = {
    autos: autos,
    personas:personas,
    buscarAuto(patente) {
        let stock = this.autos
        let autoFiltrado = stock.filter((stock) => {
            return stock.patente == patente  
        });

        if(autoFiltrado.length > 0){
            return autoFiltrado[0]
        }else{
            return null
        }

    },
    venderAuto(patente){
        autoFiltrado = this.buscarAuto(patente);
        this.autos.map(function(autos){
           autoFiltrado == autos ?  autos.vendido = true : ''
           console.log(autos);  
        })
    },
    autosParaLaVenta(){

        let autosNoVendidos =this.autos.filter((stock)=>{
            return stock.vendido != true
        });
        return autosNoVendidos
    },
    autos0KM(patente){
          
        let autosOKm =  this.autosParaLaVenta().filter((stock)=>{
         
       return stock.km < 100;
        });
        return autosOKm
    },
    autosNuevos(patente){
        
        let autosOKm = this.autos0KM.filter((stock)=>{
            return stock.patente != patente;
        });
        return autosOKm
    },
    listaDeVentas (){
        let b = [];
        let autosVendidos =  this.autos.filter(stock => stock.vendido == true); //funciona
        b.push(autosVendidos.map(stock => stock.precio));
        return b[0]
    },
    puedeComprar (auto,persona){
        let pagoPorCuota = auto.precio/auto.cuotas;
        if (pagoPorCuota<=persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal){ // nose pq pide && y no ||
           // this.venderAuto(auto.patente)
            return true
        }
         return false
    },
    autosQuePuedeComprar(persona){
       //let listaAutos=[];  
       //let a=this.autosParaLaVenta;
       //let pagoPorCuota = a.precio/a.cuotas;
     // let a=this.autosParaLaVenta().filter((precio, cuotas)=>)
        //for (let i = 0; i < a.length; i++) {
          //     if (pagoPorCuota<=persona.capacidadDePagoEnCuotas && a.precio <= persona.capacidadDePagoTotal) {
              //      listaAutos.push([i])
            //   }
          //} 
           //return listaAutos;
         
            let respuesta =this.autosParaLaVenta().filter((auto) =>this.puedeComprar(auto,persona));
            return respuesta;
    }
}

//console.log(concesionaria.autos0KM('JJK116'));
//console.log(concesionaria.puedeComprar(concesionaria.autos[2], personas[0]));
//console.log(concesionaria.autosQuePuedeComprar(concesionaria.personas[0]));
console.log(concesionaria.autosQuePuedeComprar(concesionaria.personas[0]))
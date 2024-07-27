let retiro = document.getElementById("ret");
let deposito = document.getElementById("dep");
let saldo = document.getElementById("inputSaldo");
let cuentas = [
    {nombre: "Meztly", saldo: 900, password: "1815",pagina:"cajeroMeztly.html"},
    {nombre:"Aydee", saldo: 800, password:"3115",pagina:"cejeroAydee.html"},
    {nombre:"Tonatiuh", saldo: 700, password:"1831",pagina:"cajeroTonatiuh.html"}
];

function retirar(){
    if(saldo.value >= 10){
        let saldoActual = saldo.value//900
        let saldoMinino = 10
        let saldo_por_retirar = retiro.value
        let saldo_despues_de_movimiento = parseInt(saldoActual) - parseInt(saldo_por_retirar);
        
        if(saldo_despues_de_movimiento >= saldoMinino){
            saldo.value = saldo_despues_de_movimiento; 
        }else{
            alert("No puedes tener menos de $10 en tu cuenta")
        }

    }else{
        alert("No puedes tener menos de $10 en tu cuenta")
    }
}

function depositar(){
    if(saldo.value < 950){
        let saldoActual = saldo.value
        let saldoMaximo = 950
        let saldo_depositado = deposito.value
        let saldo_despues_de_movimiento = parseInt(saldoActual) + parseInt(saldo_depositado);
        
        if(saldo_despues_de_movimiento <= saldoMaximo){
            saldo.value = saldo_despues_de_movimiento; 
        }else{
            alert("No puedes tener más de $950 en tu cuenta")
        }

    }else{
        alert("No puedes tener más de $950 en tu cuenta")
    }
}


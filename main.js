let cuentas = [
    {nombre: "Meztly", saldo: 50000, password: "1815",pagina:"cajeroMeztly.html"},
    {nombre:"Aydee", saldo: 45000, password:"3115",pagina:"cejeroAydee.html"},
    {nombre:"Tonatiuh", saldo: 40000, password:"1831",pagina:"cajeroTonatiuh.html"}
];

function iniciarSesion (){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    for(indexCuenta in cuentas){
        if(usuario == cuentas[indexCuenta].nombre){
            if(password == cuentas[indexCuenta].password){
              window.location=cuentas[indexCuenta].pagina
            }else{
                alert("Por favor ingrese un usuario y contraseña correctos")
            }
        }
    }
    

}
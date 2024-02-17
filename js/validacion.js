function validacion(){
    let devolver=true;
    let nombre=document.getElementById('Cuenta').value;
    if(nombre=="" || /^\s+$/.test(nombre)){
        document.getElementById('nombrehelp').style.visibility= "visible";
        document.getElementById('Cuenta').style.borderColor="red"
        devolver=false;
    }

    let apellidos=document.getElementById('apellidos').value;
    if(apellidos==""){
        document.getElementById('Apellidoshelp').style.visibility= "visible";
        document.getElementById('apellidos').style.borderColor="red"
        devolver=false;
    }

    let email=document.getElementById('email').value;
    if(email==""){
        document.getElementById('Emailhelp').style.visibility= "visible";
        document.getElementById('email').style.borderColor="red"
        devolver=false;
    }

    return devolver;
}

function eliminarerror(id,id2){
        document.getElementById(id2).style.visibility= "hidden";
        document.getElementById(id).style.borderColor="lightgray"
}
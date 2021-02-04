export default function validarCrearCuenta(valores){
    let errores = {};

    //Validar el nombre del usuario
    if(!valores.nombre){
        errores.nombre = "El nombre es obligatorio";
    }

    //Validar el email
    if(!valores.email){
        errores.email = "El email el obligatorio";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email = "Email no valido"
    }

    //validar el password
    if(!valores.password){
        errores.password = "El password es obligatorio"
    }else if(valores.password.length < 6){
        errores.password = 'El password debe ser de al menos 6 caracteres'
    }

    //Confirmando la contraseña
    if(!valores.passwordConfirmar){
        errores.passwordConfirmar = "Confirma tu password"
    }else if(valores.passwordConfirmar !== valores.password){
        errores.passwordConfirmar = 'Los password no coinciden'
    }

    return errores;
}
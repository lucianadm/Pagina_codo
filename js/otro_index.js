function valida_envia() {
    //valido el nombre
    if (document.fvalida.name.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.name.focus()
        return 0;
    }
    if (document.fvalida.lname.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.lname.focus()
        return 0;
    }

    if (document.fvalida.email.value.length == 0) {
        alert("Tiene que escribir su correo electrónico")
        document.fvalida.email.focus()
        return 0;
    }
    if (document.fvalida.subject.value.length == 0) {
        alert("Tiene que escribir un asunto")
        document.fvalida.subject.focus()
        return 0;
    }    
    if (document.fvalida.comments.value.length == 0) {
        alert("Introduzca un mensaje")
        document.fvalida.comments.focus()
        return 0;
    }   
               //el formulario se envia
               alert("Mensaje enviado");
               document.fvalida.submit();
           }
(function(){
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        if(fname.value=='' || femail.value=='' || fmessage.value==''){
          alert("Hay campos vacios");
        }else{
          
          enviar.value = "Enviando...";
          const serviceID = "service_t855crg";
          const templateID = "template_5dsarek";
          emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              enviar.value = "Enviado";
              alert("Mensaje Enviado");
              setTimeout(()=>{
                window.location.reload()
              },1000)
            }, (err) => {
              enviar.value = "No Enviado";
              alert("No fue posible enviar " + JSON.stringify(err));
            });
        }
        });
        
})()
document.getElementById('consultaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    
    mensajeConfirmacion.textContent = `¡Gracias ${nombre}! Hemos recibido tu consulta. Nos pondremos en contacto contigo pronto.`;
    mensajeConfirmacion.classList.remove('hidden');
    
    setTimeout(() => {
        this.reset();
        mensajeConfirmacion.classList.add('hidden');
    }, 3000);
});

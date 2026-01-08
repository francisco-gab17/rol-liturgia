// Añadir un evento de clic a todas las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Quitar el resaltado de cualquier otra tarjeta
        document.querySelectorAll('.card').forEach(c => c.style.backgroundColor = 'white');
        
        // Resaltar la tarjeta seleccionada
        card.style.backgroundColor = '#e8f5e9'; 
    });
});
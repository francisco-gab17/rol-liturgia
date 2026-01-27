// 1. BUSCADOR DINÁMICO
function buscarNombre() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let nombres = card.querySelectorAll('name');
        let encontrado = false;
        
        nombres.forEach(n => {
            if (n.innerText.toLowerCase().includes(input) && input !== "") {
                encontrado = true;
            }
        });

        if (encontrado) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });
}

// 2. CONTADOR REGRESIVO (Próximo Domingo 6:00 PM)
function actualizarContador() {
    const ahora = new Date();
    let proximoDomingo = new Date();
    
    // Calculamos días faltantes para el domingo (0)
    let diasFaltantes = (7 - ahora.getDay()) % 7;
    
    // Si hoy es domingo pero ya pasó la hora de la misa (18:00)
    if (ahora.getDay() === 0 && ahora.getHours() >= 18) {
        diasFaltantes = 7;
    }
    
    proximoDomingo.setDate(ahora.getDate() + diasFaltantes);
    proximoDomingo.setHours(18, 0, 0, 0);

    const diferencia = proximoDomingo - ahora;

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diferencia / 1000 / 60) % 60);
    const s = Math.floor((diferencia / 1000) % 60);

    document.getElementById('timer').innerText = `${d}d ${h}h ${m}m ${s}s`;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// 3. EFECTO DE SELECCIÓN (Mantener tu función anterior mejorada)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.style.backgroundColor = 'white');
        card.style.backgroundColor = '#f1fcf4'; 
    });
});

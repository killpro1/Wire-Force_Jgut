// Открытие/закрытие мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.header1 nav');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('active');
            
            // Меняем иконку
            if (menu.classList.contains('active')) {
                menuButton.textContent = '✕'; // Крестик когда открыто
            } else {
                menuButton.textContent = '☰'; // Гамбургер когда закрыто
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var openPopupLinks = document.querySelectorAll('.open-popup');
    var closePopupButton = document.querySelector('.close-popup');
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.popup-overlay');

    openPopupLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.add('popup-opened');
            overlay.style.display = 'block';
        });
    });

    closePopupButton.addEventListener('click', function() {
        popup.classList.remove('popup-opened');
        overlay.style.display = 'none';
    });
});
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
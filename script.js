document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        button.classList.add('animate');
        console.log(ahahahahahahha)

        button.addEventListener('animationend', () => {
            button.classList.remove('animate');
        }, { once: true });
    });
});
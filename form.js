var form = document.getElementById('contactForm');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body : new FormData(document.getElementById('contactForm')),

    })
    // .then((html)=> {
    //     window.open('1.html', '_blank');
    })
// })
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top-btn');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="images/loading.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Send';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyxOSxNkTFDcvxMvC2z6A98gusidOKee7L7udA37UrmqhENvbBHrWFayVQEchw7GIqV/exec';

const form = document.forms['contactForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    addLoading();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        removeLoading();
        window.location.reload();
        
    })
    .catch(error => console.error('Error!', error.message));
});

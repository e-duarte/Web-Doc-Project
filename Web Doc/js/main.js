const links = document.querySelectorAll('.main-nav a');

const currentPage = window.location.pathname.split('/').pop();


links.forEach(link=>{
    if(link.getAttribute('href') == currentPage){
        link.classList.add('checked');
    }
});


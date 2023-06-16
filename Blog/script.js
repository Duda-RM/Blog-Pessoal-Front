


let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 150) {
        header.style.background = '#191919'
    } else{ 
        header.style.background = 'transparent'
    }
    
})


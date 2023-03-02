// hover action for navbar

let navbar=document.querySelector('.navbar');
let links=document.querySelectorAll('.navbar-links');
let imageSec=document.querySelector('.rolex-logo')

navbar.addEventListener('mouseenter',()=>{
    navbar.classList.add('bg-white');
    imageSec.src=
    for(let i=0;i<links.length;i++){
        console.log(links[i]);
        links[i].classList.remove('text-white')
        links[i].classList.add('text-[rgba(18,120,80,1)]','font-bold');
    }
})
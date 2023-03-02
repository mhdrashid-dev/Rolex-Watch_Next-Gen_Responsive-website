// hover action for navbar

let navbar=document.querySelector('.navbar');
let links=document.querySelectorAll('.navbar-links');
let imageSec=document.querySelector('.rolex-logo')

navbar.addEventListener('mouseenter',()=>{
    navbar.classList.add('bg-white');
    imageSec.src='../Assets/LogoGreen.png' 
    for(let i=0;i<links.length;i++){        
        links[i].classList.remove('text-white')
        links[i].classList.add('text-[rgba(18,120,80,1)]','font-bold');
    }
})
navbar.addEventListener('mouseleave',()=>{
    navbar.classList.remove('bg-white');
    imageSec.src='../Assets/LogoWhite.png';
    for(let i=0;i<links.length;i++){        
        links[i].classList.add('text-white')
        links[i].classList.remove('text-[rgba(18,120,80,1)]','font-bold');
    }
})



//scroll carousel in watches

let leftButton=document.querySelector('.left-button');
let rightButton=document.querySelector('.right-button');
let scrollDiv=document.querySelector('.product-list');

leftButton.addEventListener('click',()=>{
    scrollDiv.scrollLeft=scrollDiv.scrollLeft-100;
});
rightButton.addEventListener('click',()=>{
    scrollDiv.scrollLeft=scrollDiv.scrollLeft+100;
})


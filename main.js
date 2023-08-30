const form = document.querySelector('form');
const container_1 = document.querySelector('.container'); 
const container_2= document.querySelector('.container2'); 

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    container_1.classList.add('hide');
    container_2.classList.remove('hide'); 
});

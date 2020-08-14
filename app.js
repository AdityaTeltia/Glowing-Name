
document.querySelector('.container').addEventListener('click',(e)=>{
    if(e.target.classList.contains('button')){
        e.target.classList.toggle('clicked');
    }
    e.preventDefault();
});





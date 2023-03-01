const d = document,
 w = window;

 d.addEventListener("DOMContentLoaded", (e) => {
    scrollTopButton(".scroll-top-btn");
});


function scrollTopButton(btn) {
 const $scrollBtn = d.querySelector(btn);

 w.addEventListener("scroll", e => {
   let scrollTop = w.pageYOffset || d.documentElement.scrollTop;


   if(scrollTop > 600){
     $scrollBtn.classList.remove("hidden");
     $scrollBtn.classList.add("btnJump");
     $scrollBtn.addEventListener("animationend", () =>{
       $scrollBtn.classList.remove("btnJump");
     });
   } else{
     $scrollBtn.classList.add("hidden");
   }
 });

 d.addEventListener("click", e => {
   if(e.target.matches(btn)){
     w.scrollTo({
       behavior: "smooth",
       top:0,
     });
   }

 });
}

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

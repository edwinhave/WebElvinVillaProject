var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });


window.addEventListener("load",function(){
this.setTimeout(
    function open(event){
        document.querySelector(".popup").style.display="block";
    },
    1500
)
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
});










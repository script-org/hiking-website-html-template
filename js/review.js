



    function menuToggle() {
        var nav= document.querySelector('nav');
        var navLinks= document.querySelectorAll('.nav-links a');
       nav.classList.toggle('decrease-height-responsive');
      
       navLinks.forEach(link=>{
         link.classList.toggle('hide-link-responsive');
       })
    }
 
 
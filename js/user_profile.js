$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 5, // Shows a 5 slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  
    prevArrow:$('.prev'),
    nextArrow:$('.next'),
  
    responsive: [
      { 
		breakpoint: 1200,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        }
      },
	  { 
		breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
            
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });

  function menuToggle() {
    var nav= document.querySelector('nav');
    var navLinks= document.querySelectorAll('.nav-links a');
   nav.classList.toggle('decrease-height-responsive');
  
   navLinks.forEach(link=>{
     link.classList.toggle('hide-link-responsive');
   })
}
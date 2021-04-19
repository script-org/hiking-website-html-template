var rangeColor = document.querySelector('#range-color'); 
var output = document.querySelector('.slider-value');
var sideNav = document.querySelector('.side-nav');
var upperSlider = document.getElementById('upper');
var lowerSlider = document.getElementById('lower');


function renderValue() {

  output.innerHTML = `$ ${lowerSlider.value} -  $ ${upperSlider.value}`;
  
  
  
}



upperSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value); 
   upperVal = parseInt(upperSlider.value); 
   
   if (upperVal < lowerVal + 2) {
      lowerSlider.value = upperVal - 2;
      if (lowerVal == lowerSlider.min) {
        
         upperSlider.value = 2;
      }
   }
   
   
  
   rangeColor.style.marginLeft = (lowerSlider.value /2 ) + '%';
   
  
   rangeColor.style.width = (upperSlider.value /2) - (lowerSlider.value /2) + '%';
  
   
};


lowerSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value); 
   upperVal = parseInt(upperSlider.value); 
   
   if (lowerVal > upperVal - 2) {
      upperSlider.value = lowerVal + 2;
      
      if (upperVal == upperSlider.max) {
         lowerSlider.value = parseInt(upperSlider.max) - 2;
      }

   }
 
   rangeColor.style.marginLeft = (lowerSlider.value /2) + '%';
   rangeColor.style.width = (upperSlider.value /2) - (lowerSlider.value /2) + '%';


 
};




function sideNavClose() {
   
sideNav.classList.remove('side-nav-responsive-open');


}

function sideNavOpen(){
sideNav.classList.add('side-nav-responsive-open');

}

		  
		$( ".search-button" ).click(function() {
		  $( ".s-result" ).fadeIn();
		});


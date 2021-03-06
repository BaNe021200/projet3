var viewSlideShow = {
    
    
    listenKeyboardEvents : function(slideShow){
        $(document).keydown(function(event){
            switch(event.keyCode){
                case 37 :
                    slideShow.switchToPrevSlide();
                    break;
                    
                case 39 : 
                    slideShow.switchToNextSlide();
                    break;
            };
        });
    },
    
    listenMouseEvents : function(SlideShow){
        document.getElementById("back").addEventListener('click', function(){
            SlideShow.switchToPrevSlide();
        });
        document.getElementById('forward').addEventListener('click', function(){
            SlideShow.switchToNextSlide();
        });
    },
    
    
    updateSlider : function(currentSlideIndex){
        
        $("#slideShow li").css('display', 'none'); 
        var currentSlide = $("#slideShow li").eq(currentSlideIndex); 
        currentSlide.css('display', 'block'); 
    }

                    
    
    
}
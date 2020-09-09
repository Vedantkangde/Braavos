// JavaScript 
	
	
$("#team-members").owlCarousel({
	items:3,
		autoplay:true,
			smartspeed:700,
				loop:true,
					autoplayHoverPause:true,
	
});
	
});

$(function(){

$("#customer-testimonials").owlCarousel({
	items:1,
		autoplay:true,
			smartspeed:700,
				loop:true,
					autoplayHoverPause:true,
	
});
	
});
$(function(){
	
	$('.counter').counterUp({
		
		delay:10,
		time:1000
		
		
	})
	
	
	
});
 
$('.customer-testimonials').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 
 
 
 
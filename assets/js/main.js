$(document).ready(()=>{
	if($(window).width()>768) {
		console.log('1111');
		$('#nav-close-btn').hide();
	} else {
		console.log('2222');
		$('#nav-close-btn').show();
	}
	
	$('#navToggleIcon').click(()=>{
		if(parseInt($('#colorlib-aside').css("transform").split(", ")[4])==-300) {
			$('#colorlib-aside').css("transform", 'translateX(0px)'); 
			$('#nav-close-btn').show();
			$('#navToggleIcon').hide();
		} else {
			$('#colorlib-aside').css("transform", 'translateX(-300px)'); 
			$('#nav-close-btn').hide();
			
		}
	});
	
	
	$('#nav-close-btn').click(()=>{
		$('#nav-close-btn').hide();
		$('#colorlib-aside').css("transform", 'translateX(-300px)'); 
		$('#navToggleIcon').show();
	});
});
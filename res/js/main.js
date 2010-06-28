jQuery.noConflict();
jQuery(document).ready(function(){
	// Equalize Heights of Floating Columns
	jQuery(".equal").equalize();
	jQuery(window).resize(function(){ 
		jQuery(".equal").equalize();
	});
	
	jQuery(".slideshow").each(function(){
		jQuery(this).nivoSlider({effect:'sliceDown',animSpeed:50,pauseTime:4500, directionNav:false });
		
	});
	
	jQuery("table tr:nth-child(even)").addClass("tr-even");
	jQuery("table tr:nth-child(odd)").addClass("tr-odd");
	
	window.setTimeout(function(){ jQuery(".equal").equalize(); }, 500);
	window.setTimeout(function(){ jQuery(".equal").equalize(); }, 1000);
	window.setTimeout(function(){ jQuery(".equal").equalize(); }, 1500);
	
	jQuery(".csc-textpic-caption div").each(function(){
		if(jQuery(this).text() == "" || jQuery(this).text() == "\n"){
			jQuery(this).parent().remove();
		}
	});
	
	window.setTimeout("swfready()", 500);
	window.setTimeout("swfready()", 1000);
	window.setTimeout("swfready()", 1500);
});

//function swfobjectReady(){ window.setTimeout("swfready()", 500); }
function swfready(){ 
	jQuery(".equal").children("div:not(.clear)").css("min-height","0px");
	jQuery(".equal").equalize(); 
}
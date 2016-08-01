var navborder = false;
var orientation;

/*___ COMMON FUNCTIONS ____*/
function imageHoverSetup(){
	$(".work-holder").each(function(){
		var thisH = $(this).children('a').children('.work-img').children('img').outerHeight();
		var thisW = $(this).children('a').children('.work-img').children('img').width();
		var myhover = $(this).children('a').children('.work-hover');
		var innerH = myhover.children('.work-name').outerHeight() + myhover.children('.caption').outerHeight();

		$(this).height(thisH);
		myhover.css({'width': thisW +"px",'height': thisH +"px", opacity:0});
		myhover.children('.work-name').css({'margin-top': (thisH/2 - innerH/2) +"px"});

		myhover.hover(
			function(){
			  $(this).stop().animate({
			     opacity:0.9
			  },'fast');
			},
			function() {
			  $(this).stop().animate({
			     opacity:0
			  },'fast');
		});
	});
}

function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top -90},
        1000);
}

function navScrollCheck(_top, _bot){
	
   	if(typeof(_bot)==='undefined') _bot = "none";
	var zone = 1;
	$(document).scroll(function(){
		if (_bot !== "none"){
		    var currsize, el = $('#large-nav'), mel = $('#mobile-nav');
		    var top = $(_top).offset().top - $(document).scrollTop();
		    var bot = $(_bot).offset().top - $(document).scrollTop();
		    
	        if(el.is(":visible")){

	        	if (top > 91 && zone == 2 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');
			        zone = 1;
			    }

			    if (top < 91 &&  zone == 1 && el.is('.bg-white')){
			        $(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');
			        zone = 2;
			    }

			    if (bot > 91 && zone == 3 && el.is('.bg-white')){
			    	$(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');
			        zone = 2;
			    }

			    if (bot < 91 && zone == 2 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');
			        zone = 3;
			    } 
	        } else {
	        	if (top > 61 && zone == 2 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');
			        zone = 1;
			    }

			    if (top < 61 &&  zone == 1 && el.is('.bg-white')){
			        $(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');
			        zone = 2;
			    }

			    if (bot > 61 && zone == 3 && el.is('.bg-white')){
			    	$(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');
			        zone = 2;
			    }

			    if (bot < 61 && zone == 2 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');
			        zone = 3;
			    } 
	        }
	    } else {
	    	var currsize, el = $('#large-nav'), mel = $('#mobile-nav');
		    var top = $(_top).offset().top - $(document).scrollTop();
		    
	        if(el.is(":visible")){

	        	if (top > 91 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');

			    }

			    if (top < 91 && el.is('.bg-white')){
			        $(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');

			    }
			    
	        } else {
	        	if (top > 61 && !el.is('.bg-white')){
			        $(el).addClass('bg-white');
			        $(mel).addClass('bg-white-mobile');
			    }

			    if (top < 61 && el.is('.bg-white')){
			        $(el).removeClass('bg-white');
			        $(mel).removeClass('bg-white-mobile');

			    }
			    
	        }

	    }
	    
	});
}

function animateNavBorderOut(){
  	navborder = false;
}

function animateNavBorderIn(){
  	navborder = true;
}

function orient() {  
    if (window.orientation == 0 || window.orientation == 180) {
    	$("body").attr("class", "portrait");
	orientation = 'portrait';

    	return false;
    }
	else if (window.orientation == 90 || window.orientation == -90) {
    	$("body").attr("class", "landscape");
    	orientation = 'landscape';

    	return false;
    }
}

function hoverNav(){
	$(".hovernav").hover(function () {
	    $(this).children("span").stop().animate({
	        opacity: 0
	    }, 250);
	}, function () {
	    $(this).children("span").animate({
	        opacity: 1
	    }, 250);
	});
}


/*___ HOMEPAGE FUNCTIONS ____*/
function setIntroPosition(){

	var spacerH;
	var winW = window.innerWidth;
	var winH = (window.innerHeight > 570) ? window.innerHeight : 570;
	var titleH = $("#intro-title").outerHeight();
	var titleW = $("#intro-title").width();
	var copyH = $("#intro-copy").outerHeight();
	if(window.innerHeight > 571){
		spacerH = ((winH - 90) - (titleH+copyH)) * 0.4;
	} else {
		spacerH = 46;
	}
	var titleX = (winW/2) - (titleW/2) ;
	var titleY = spacerH +76;

	if ($.browser.mobile != true) {
		$("#intro-bkg").height(winH +2);
		$("#intro-spacer").height(spacerH);
	}	
	
	$("#intro-arrow").css({
		bottom : '20px' , // note (+'px')
		left: (winW/2 -7) + 'px'
	});
	$("#intro-title").css({
		top : titleY + 'px' , // note (+'px')
		left: titleX + 'px'
	});
	
	$("#intro-title").animate({opacity: 1}, 500);
	$("#intro-title2").animate({opacity: 1}, 500);
	$("#intro-copy").animate({opacity: 1}, 500);
	$("#intro-arrow").animate({opacity: 1}, 500);
}

/*
function homeScrollCheck(){
	$(document).scroll(function(){

	    var currsize, el = $('#large-nav'), mel = $('#mobile-nav');
	    
		var top = $('#featured-work').offset().top - $(window).scrollTop();
		var bar = $('#intro').offset().top - $(window).scrollTop();
		
	    //	var top = $('#featured-work').offset().top - $(document).scrollTop();
		//  var bar = $('#intro').offset().top - $(document).scrollTop();
	    
        if(el.is(":visible")){

        	if (top >= 10 && top <= 91 && !el.is('.bg-white')){
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');
		        $("#main-nav").removeAttr('class');
		        $("#main-nav").addClass("clear-blue-nav-line");
		    }
		    if (top >= 91 && el.is('.bg-white')){
		        $(el).removeClass('bg-white');
		        $("#main-nav").removeAttr('class');
		        $("#main-nav").addClass("blue-nav-line");
		        $(mel).removeClass('bg-white-mobile');
		    }
			
        } else {
        	if (top < 61 && !el.is('.bg-white')){
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');
		    }
		    if (top > 61 && el.is('.bg-white')){
		        $(el).removeClass('bg-white');
		        $(mel).removeClass('bg-white-mobile');
		    }  
        }

    	if ($(document).scrollTop() === 10) {
    		$("#main-nav").removeClass('blue-nav-line');
    	}
	    
	});
}*/

function homeScrollCheck(){
	$(document).scroll(function(){

	    var currsize, el = $('#large-nav'), mel = $('#mobile-nav'),
	        top = $('#featured-work').offset().top - $(document).scrollTop();
	    var bar = $('#intro').offset().top - $(document).scrollTop();
	    
        if(el.is(":visible")){
        	//console.log(bar);
        	if (top < 91 && !el.is('.bg-white')){
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');
		        $("#main-nav").removeAttr('class');
		        $("#main-nav").addClass("clear-blue-nav-line");
		        //if (navborder){animateNavBorderOut();}
		    }
		    if (top > 91 && el.is('.bg-white')){
		        $(el).removeClass('bg-white');
		        $("#main-nav").removeAttr('class');
		        $("#main-nav").addClass("blue-nav-line");
		        $(mel).removeClass('bg-white-mobile');
		    }
		    /*if (bar < -5 ){
		    	if (!navborder){animateNavBorderIn();}
		    }
		    if (bar > -5){
		    	if (navborder){animateNavBorderOut();}
		    }*/
        } else {
        	if (top < 61 && !el.is('.bg-white')){
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');
		    }
		    if (top > 61 && el.is('.bg-white')){
		        $(el).removeClass('bg-white');
		        $(mel).removeClass('bg-white-mobile');
		    }  
        }
	    
	});
}

function homeWayPoint(){
	$("#intro").waypoint(function (a, b) {
			$("#main-nav").removeAttr('class');
            $("#main-nav").addClass("blue-nav-line");
        }, {
        	offset: "-25"
        });
	$("#testimonials-bkg").waypoint(function (a, b) {
		console.log("here");
			$("#main-nav").removeAttr('class');
            $("#main-nav").addClass("grey-nav-line");
        }, {
            offset: "90"
        });
}

function homeScrollResizeCheck(){
	var currsize, el = $('#large-nav'), mel = $('#mobile-nav'),
        top = $('#featured-work').offset().top - $(document).scrollTop();
    if(el.is(":visible")){
    	if (top < 91 && !el.is('.bg-white')){
	        $(el).addClass('bg-white');
	        $(mel).addClass('bg-white-mobile');
	    }
	    if (top > 91 && el.is('.bg-white')){
	        $(el).removeClass('bg-white');
	        $(mel).removeClass('bg-white-mobile');
	    }  
    } else {
    	if (top < 61 && !el.is('.bg-white')){
	        $(el).addClass('bg-white');
	        $(mel).addClass('bg-white-mobile');
	    }
	    if (top > 61 && el.is('.bg-white')){
	        $(el).removeClass('bg-white');
	        $(mel).removeClass('bg-white-mobile');
	    }  
    }
}

/*___ CASE STUDY FUNCTIONS ____*/
function setCasePosition(){
	var spacerH;
	var winW = window.innerWidth;
	var winH = (window.innerHeight > 550) ? window.innerHeight : 550;
	var titleH = $("#case-title").outerHeight();
	var titleW = $("#case-title").width();
	var copyH = $("#case-copy").outerHeight();
	if(window.innerHeight > 571){
		spacerH = ((winH - 90) - (titleH+copyH)) * 0.4;
	} else {
		spacerH = 120;
	}
	var titleX = (winW/3) - (titleW/2);

	$("#case-intro-bkg").height(winH +2);
	$("#case-spacer").height(spacerH);

	$("#case-arrow").css({
		bottom : '20px' , // note (+'px')
		left: (winW/2 -7) + 'px'
	});

	$("#case-title").delay(500).animate({opacity: 1}, 500);
    $("#case-intro").delay(500).animate({opacity: 1}, 500);
    $("#case-arrow").delay(500).animate({opacity: 1}, 500);
}

function caseWayPoint(){
	$("#case-intro-bkg").waypoint(function (a, b) {
            $("#main-nav").toggleClass("white-nav-line")
        }, {
            offset: "-2"
        })
}

function caseScrollResizeCheck(){
	var currsize, el = $('#large-nav'), mel = $('#mobile-nav'),
        top = $('#case-identity').offset().top - $(document).scrollTop();
    if(el.is(":visible")){
    	if (top < 91 && !el.is('.bg-white')){
    		$(el).removeClass('bg-clear');
	        $(mel).removeClass('bg-clear-mobile');
	        $(el).addClass('bg-white');
	        $(mel).addClass('bg-white-mobile');    
	    }
	    if (top > 91 && el.is('.bg-white')){
	    	$(el).addClass('bg-clear');
	        $(mel).addClass('bg-clear-mobile'); 
	        $(el).removeClass('bg-white');
	        $(mel).removeClass('bg-white-mobile');
	    }  
    }
    /* else {
    	if (top < 61 && !el.is('.bg-white')){
    		$(el).removeClass('bg-clear');
	        $(mel).removeClass('bg-clear-mobile');
	        $(el).addClass('bg-white');
	        $(mel).addClass('bg-white-mobile');    
	    }
	    if (top > 61 && el.is('.bg-white')){
	    	$(el).addClass('bg-clear');
	        $(mel).addClass('bg-clear-mobile'); 
	        $(el).removeClass('bg-white');
	        $(mel).removeClass('bg-white-mobile');
	    } 
    } */
}

function caseScrollCheck(){
	$(document).scroll(function(){
	    var currsize, el = $('#large-nav'), mel = $('#mobile-nav'),
	        top = $('#case-identity').offset().top - $(document).scrollTop();
        if(el.is(":visible")){
	    	if (top < 91 && !el.is('.bg-white')){
	    		$(el).removeClass('bg-clear');
		        $(mel).removeClass('bg-clear-mobile');
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');    
		    }
		    if (top > 91 && el.is('.bg-white')){
		    	$(el).addClass('bg-clear');
		        $(mel).addClass('bg-clear-mobile'); 
		        $(el).removeClass('bg-white');
		        $(mel).removeClass('bg-white-mobile');
		    }  
	    } 
	    /*else {
	    	if (top < 61 && !el.is('.bg-white')){
	    		$(el).removeClass('bg-clear');
		        $(mel).removeClass('bg-clear-mobile');
		        $(el).addClass('bg-white');
		        $(mel).addClass('bg-white-mobile');    
		    }
		    if (top > 61 && el.is('.bg-white')){
		    	$(el).addClass('bg-clear');
		        $(mel).addClass('bg-clear-mobile'); 
		        $(el).removeClass('bg-white');
		        $(mel).removeClass('bg-white-mobile');
		    } 
	    } */
	    
	});
}

function caseNavSelector(){
	
	$("#case-nav ul li a").click(function() {
		$("#case-nav ul li a").children(".nav-circle").removeClass("current");
    	$(this).children(".nav-circle").addClass("current");
  	});
}

/*___ Other FUNCTIONS ____*/


function scrollToSetup(){
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (  locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {
			var $target = $(this.hash), target = this.hash;
			if (target) {
				var targetOffset = $target.offset().top -90;
				$(this).click(function(event) {
					event.preventDefault();
					$(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
						location.hash = target;
					});
				});
			}
		}
	});

	// use the first element that is "scrollable"
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
			var el = arguments[i],
			$scrollElement = $(el);
			if ($scrollElement.scrollTop()> 0) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop()> 0;
				$scrollElement.scrollTop(0);
				if (isScrollable) {
					return el;
				}
			}
		}
		return [];
	}
}

function accordionToggle(){
	$('.first').css({color:"#fff"});
	$('.accordion-toggle').click(function() {
		$('.accordion-toggle').css({color:"#000"});
  		$(this).css({color:"#fff"});
  	});
}

function servicesWayPoint(){
	$("#language-bkg").waypoint(function (a, b) {
            $("#main-nav").toggleClass("grey-nav-line")
        }, {
            offset: "90"
        });
	$("#capabilities-bkg").waypoint(function (a, b) {
            $("#main-nav").toggleClass("white-nav-line")
        }, {
            offset: "90"
        });
}

function staffWayPoint(){
	$("#staff-bkg").waypoint(function (a, b) {
            $("#main-nav").toggleClass("grey-nav-line")
        }, {
            offset: "90"
        });
}

function textAreaFocus(){
	$('textarea').focus(function(){
		console.log("textarea");
	    if ( $(this).val() == $(this).attr('defaultval') ){
	      $(this).val('');
	      $(this).css({color:'black'});
	    }
	});
	$('textarea').blur(function(){
		console.log("textarea out");
	    if ( $(this).val() == '' ){
	      $(this).val($(this).attr('defaultval'));
	      $(this).css({color:'#999999'});
	    }
    });
}



/*___ MAIN CONTROLLERS ____*/
function resizeController(){
	orient();
	if($("#intro-bkg").length > 0){
		setIntroPosition();
		imageHoverSetup();
		homeScrollResizeCheck();
	}
	if($("#case-studies-bkg").length > 0){
		imageHoverSetup();
	}
	if($("#case-intro-bkg").length > 0){
		setCasePosition();
		caseScrollResizeCheck();
		
	}
	if($("#contact").length > 0){
		hoverNav();
	    map.setCenter(centre);
	}
	if($("#services-intro-bkg").length > 0){
	    //servicesScrollResizeCheck();
	}
	if($("#planner-page").length > 0){
		textAreaFocus();
	}
}

function pageController(){
	if($("#intro-bkg").length > 0){
		//$('#large-nav').css({"border-bottom":"1px solid #0241e2"});
		imageHoverSetup();
		homeScrollCheck();
		homeWayPoint();
	}
	/*
	if($("#case-intro-bkg").length > 0){
		$("#case-intro-bkg").backstretch("./img/case-bkg.jpg");
		$(window).on("backstretch.show", function (e, instance) {
  			setCasePosition();
			caseScrollCheck();
		});
	}
	*/
	if($("#case-studies-bkg").length > 0){
		imageHoverSetup();
	}
	if($("#staff-bkg").length > 0){
		staffWayPoint();
		//navScrollCheck("#staff-bkg");
	}
	if($("#planner").length > 0){
		$("#projectplan").validate({
			rules: {
				'name': "required",
				'email': {
					required: true,
					email: true
				},
				'description': {
					required: true
				},
				'phone': {
					required: true
				},
				'budget': {
					required: true
				},
				'deadline': {
					required: true
				},
				'additional': {
					required: true
				}
			},
			messages: {
				'name': "",
				'description': "",
				'budget': "",
				'deadline': "",
				'additional': "",
				email: ""
			}
		});
	}
	
	if($("#about-page").length > 0){
	    accordionToggle();
	}
	if($("#services-page").length > 0){
		servicesWayPoint();
	    //navScrollCheck("#language-bkg","#capabilities-bkg");
	}
}

/*___ MAIN CALLERS ____*/
$(document).ready(function() {

	$('select').selectBoxIt();

	$(document).scroll(function(){

    	if ($(document).scrollTop() <= 20){
	        $('#main-nav').removeClass('blue-nav-line');
	    }
    
	});

});

$(window).load(function () {
	hoverNav();
	resizeController();
	pageController();
	//hide address bar
	setTimeout(function(){window.scrollTo(0, 1);}, 0);
	
	//fadeController();
});

$(window).resize(function(){
	resizeController();
});

/* Call orientation function on orientation change */
$(window).bind( 'orientationchange', function(e){
	orient();
});

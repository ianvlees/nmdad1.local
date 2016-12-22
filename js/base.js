(function() {
    
    // ----------------- NAVIGATION -----------------
    
    'use strict';

    var toggleOpen = document.querySelector('.nav-toggle--open');
    if(toggleOpen) {
        toggleOpen.addEventListener('click', function(ev) {
            ev.preventDefault();
            document.querySelector('body').classList.toggle('js__nav-is-open');
            return false;
        });
    }

    var toggleClose = document.querySelector('.nav-toggle--close');
    if(toggleClose) {
        toggleClose.addEventListener('click', function(ev) {
            ev.preventDefault();
            document.querySelector('body').classList.remove('js__nav-is-open');
            return false;
        });
    }
    
    // ----------------- SMOOTHSCROLL ----------------
    
    $(".smoothscroll").on('click', function(event) {

    // Prevent default anchor click behavior
        event.preventDefault();

    // Store hash
        var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    });
    
    // ----------------- HAMBURGER -------------------
    
    $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
    
    $('.header-homenav ul li').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
    
    
    $('#nav-icon3').mouseover(function(){
        $('#nav-icon3 span').css('background-color','#564781');
    });
    $('#nav-icon3').mouseleave(function(){
        $('#nav-icon3 span').css('background-color','#ffffff');
    });
    
    // ----------------- HAMBURGER-HOMENAV -----------
    
    $('#nav-icon3').click(function(){
		$('.header-homenav').fadeToggle();
	});
    
    $('.header-homenav ul li').click(function(){
		$('.header-homenav').toggle();
	});
    
    // ----------------- MOBILE-LOGIN ----------------
    
    $('#button1').click(function(){
		$('.mobile-login').slideToggle();
        
	});
    
    $('#header-login').click(function(){
		$('.mobile-login').slideToggle();
        
	});
    
    //BORDER
    
    $('#username').focusin(function(){
		$('.login-border1').addClass('login-border__extra');
        
        
	});
    $('#username').focusout(function(){
		$('.login-border1').removeClass('login-border__extra');
        
        
	});
    $('#password').focusin(function(){
		$('.login-border2').addClass('login-border__extra');
        
        
	});
    $('#password').focusout(function(){
		$('.login-border2').removeClass('login-border__extra');
        
        
	});
    
    //LABEL
    
    $('#username').keydown(function(){
        $('.label1').addClass('label-display').delay( 800 );
        
	});
    
    function check() {
        if($("#username").val.lenght == 0){
            $('.label1').hide;
        } else {
            console.log(nee);
        }
    };
    
    $('#password').keydown(function(){
        $('.label2').addClass('label-display').delay( 800 );
        
	});
    
    function check() {
        if($("#password").val.lenght == 0){
            $('.label2').hide;
        } else {
            console.log(nee);
        }
    };
    
    
    
    
    
    
    
    
    
    
    // ----------------- WAYPOINT --------------------
    
    function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 9)
    : cb();
    };

        ready(function(){

            // Literal object
            var App = {
                init: function() {
                    console.log('Initialize the app.');
                    this.registerWaypoints(); // Register the waypoints
                },
                registerWaypoints: function() {
                    var weffectElements = document.querySelectorAll('.weffect');
                    for(var i=0;i<weffectElements.length;i++) {
                        var weffectElement = weffectElements[i];
                        console.log(i);
                        var waypoint = new Waypoint({
                            element: weffectElement,
                            handler: function(direction) {
                                if(direction == 'down') {
                                    this.element.classList.add('weffect--show');
                                } else {
                                    this.element.classList.remove('weffect--show');
                                }
                            },
                            offset: '80%'
                        });
                    }
                }
            }

            App.init(); // Initalize the app by calling the init() function
        });
    
  
    // ---------- MAP ----------
    
    

    
    

}());
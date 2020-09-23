$(document).ready(function() {
    $(".testi_person_img_icon ul li img").bind('click', function(){
    
    let i = $(".testi_person_img_icon ul li img").index(this)+1
    $('.left_text_testi_contetn div').css("display","none")
    $(`.left_text_testi_contetn div:nth-child(${i})`).css("display","block")
    
    $('.testi_person_img_icon ul li').removeClass('active_user')
    $(this).parent().addClass('active_user')
    
    $(".img_peroson_fullsize iframe").attr("src",$(this).attr('id'))
    });
    
    });

    $(document).ready(function() {

        
        $('#myCarousel').carousel({
        interval: 5000
        })
        
        $('#myCarousel').on('slid.bs.carousel', function() {
            //alert("slid");
        });
        
        
    });

  
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"goDown",
        navigationText:["",""],
        autoPlay:true
    });
});
    
    $(document).ready(function() {
        
        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
        
            /* Check the location of each desired element */
            $('#oprah1').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $('#oprah11').animate({'opacity':'1'},5);
                    $('#oprah22').animate({'opacity':'0'},5);
                    $('#oprah33').animate({'opacity':'0'},5);
    
                    console.log(bottom_of_window);
                    console.log(bottom_of_object);
                        
                        
                }
                else
    
                {
                    $('#oprah11').animate({'opacity':'0'},5);
                    // $('#oprah22').animate({'opacity':'0'},50);
                    // $('#oprah33').animate({'opacity':'0'},50);
                }
                
            }); 
    
            $('#oprah2').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $('#oprah22').animate({'opacity':'1'},5);
                    $('#oprah11').animate({'opacity':'0'},5);
                    $('#oprah33').animate({'opacity':'0'},5);
    
                    console.log(bottom_of_window);
                    console.log(bottom_of_object);
                        
                        
                }
                
            }); 
    
            $('#oprah3').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $('#oprah33').animate({'opacity':'1'},5);
                    $('#oprah22').animate({'opacity':'0'},5);
                    $('#oprah11').animate({'opacity':'0'},5);
                    
    
                    console.log(bottom_of_window);
                    console.log(bottom_of_object);
                        
                        
                }
                else
                {
                  if((bottom_of_object-bottom_of_window) < 50)
                  {
                    // $('#oprah11').animate({'opacity':'0'},50);
                    // $('#oprah22').animate({'opacity':'0'},50);
                    $('#oprah33').animate({'opacity':'0'},5);
                  }
                }
                
            }); 
    
            //         $('#oprah31').each( function(i){
                
            //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            //     var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            //     /* If the object is completely visible in the window, fade it it */
            //     if( bottom_of_window > bottom_of_object ){
                    
            //         $('#oprah33').animate({'opacity':'0'},5);
            //         $('#oprah22').animate({'opacity':'0'},5);
            //         $('#oprah11').animate({'opacity':'0'},5);
                    
    
            //         console.log(bottom_of_window);
            //         console.log(bottom_of_object);
                        
                        
            //     }
            //     else
            //     {
    
            //     }
                
            // }); 
        
        });
        
    });

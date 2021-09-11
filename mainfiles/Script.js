// JavaScript source code

$(window).on("load",function(){
    $(".loader-start").fadeOut(1000);
  
})


 $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
    
    //slide-up script
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
    
    });

   $(".menu-btn,.navli").click(function(){
       $(".navigation").toggleClass("active");
       $(".menu-btn i").toggleClass("active");



   });

   $(".carousel").owlCarousel({
       margin:20,
       loop:true,
       autoplay:true,
       autoplayTimeOut:1,

       responsive:{
             0:{
                items:1,
                nav:false
               },
             600:{
                items:1,
                nav:false
               }

       }
   });

   $(".row-imgs").isotope({
      itemSelector:".col-imgs",
      layoutMode:"fitRows"
   });                                                                                       
       $(".portfolio-up").click(function(){
         $(".portfolio-up").removeClass("active");
         $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          $(".row-imgs").isotope({
                filter:selector
         });
       });
    
   //typing animation 
   var typed = new Typed(".typing",{
      strings:["Web Designer","Developer","Freelancer","Programmer"],
      typeSpeed:100,
      backSpeed:60,
      backDelay: 1000,
      loop:true
      
   });
      
      
 });
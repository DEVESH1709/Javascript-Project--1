var rectangle = document.querySelector(".wrapper")

rectangle.addEventListener("mousemove",function(details){
        

         var rectangleLocation = rectangle.getBoundingClientRect();
        var insiderectLocval =  details.clientX - rectangleLocation.left;

        if(insiderectLocval < rectangleLocation.width / 2){
           // mapping by using gsap
           var redcolor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderectLocval);
           gsap.to(rectangle,{
            backgroundColor:`rgb( ${redcolor},0,0)`,
            ease:Power4,
           })
           
        }
        else{ // mapping by using gsap
            var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderectLocval);
            gsap.to(rectangle,{
                backgroundColor:`rgb(0,0, ${bluecolor})`,
             ease:Power4,
            })
         
        }
})



rectangle.addEventListener("mouseleave",function(){
   gsap.to(rectangle,{
    backgroundColor: "white"
   })
})
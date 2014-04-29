$(document).ready(function(){

   var logoLines = $("#top .logo .line span");

   logoLines
   	.attr("data-anchor-target","#top")
   	.attr("data-0","height:3px")
   	.attr("data-100-top-bottom","height:2px");
   	

//   logoLines.css({ width: "0%" });
//   
//   var lineSpeed = 1000;
//   
//   $("#line1 span,#line2 span").transition({ width: "100%", delay: 2000 }, lineSpeed, function() {
//   
//       $("#line3 span, #line4 span, #line5 span, #line6 span").transition({ width: "100%" }, lineSpeed, function() {
//       
//         $("#line7 span, #line8 span, #line9 span").transition({ width: "100%" }, lineSpeed, function() {
//         
//           $("#about").transition({opacity: 1,delay: 1000}, function() {
//           
//             $(".city, .date").transition({opacity: 1,delay: 1000})
//                       
//           })
//         
//         
//         
//         })
//       
//       } )
//   
//   });
// 
//   var letters = $("#name .letter");
// 
//   letters.css({ opacity: 0 });
// 
//   var chain = function(toAnimate, ix){
//       if(toAnimate[ix]){
//           if (ix==0) delayLetters=1000; else delayLetters=0;
//           $(toAnimate[ix]).transition({opacity:1, delay:delayLetters}, 400, function(){ chain(toAnimate, ix + 1 )});
//       }
//   };
//   
//   chain(letters,0);


  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
  }
  


})
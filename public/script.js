// $(document).ready(function() {
//     $(window).on("scroll" , function(){
//         $('.progress').each(function(index,progress){
//             if($(window).scrollTop() > $(progress).offset.top){
//                 $('.progress .progress-bar').css("width",
//                 function() {
//                     return $(this).attr("aria-valuenow") + "%";
//                 }
//         )
//             }
//         })
//     })
//   });
$(document).ready(function() {
    $('.progress .progress-bar').css("width",
              function() {
                  return $(this).attr("aria-valuenow") + "%";
              }
      )
  });

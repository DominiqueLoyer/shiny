$(document).ready(function(){
  
  function adaptDisplay(){
    if($("#display").val() == '1024' || $("#display").val() == '800'){
      $("h1").css({"font-size": "16px", "line-height": "20px"})
      $(".span12").css({"padding": "2px 0px"})
      $(".span4").css({"max-width": "200px"})
      $("#beta1").css({"width": "150px"})
      $("#alpha1").css({"width": "150px"})
      $("#display").css({"width": "100px"})
      $(".nav-tabs li a").css({"padding": "2px 1px"})
    } else {
      $("h1").css({"font-size": "36px", "line-height": "40px"})
      $(".span12").css({"padding": "10px 0px"})
      $(".span4").css({"max-width": "310px"})
      $("#beta1").css({"width": "200px"})
      $("#alpha1").css({"width": "200px"})
      $("#display").css({"width": "100px"})
      $(".nav-tabs li a").css({"padding": "6px 2px"})
    }
   }
   
  $('#display').on('change', function () {adaptDisplay()}
  );
  
  adaptDisplay();
  
  $(document).click(function(){
    if($("#visM").prop('checked')){
      $(".span8").width('95%')
      $(".span12").css({"display": "none"})
    } else {
      $(".span8").width('65.812%') 
      $(".span12").css({"display": "block"})
    }
  });
});
$("div").on("click", function(){
  if ($(this).hasClass("bruhA")){
  $(this).removeClass("bruhA")
  $(this).addClass("bruhB")
}
  else if ($(this).hasClass("bruhB")) {
    $(this).removeClass("bruhB")
  }else {
    $(this).addClass("bruhA")
  }
});
$("#clear").on("click",clickClearCompleted);
function clickClearCompleted(){
  $(".bruhA").removeClass()
  $(".bruhB").removeClass()
}

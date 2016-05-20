
$('#Go').click(function(){

  console.log('hello?');
var hardinessVal =$('#climateZone').val();
var soilDrainage = $('#soilDrainage').val();
console.log(hardinessVal);
console.log(soilDrainage);


$('.plantdiv').each(function(){
if ( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain'))){
  $(this).show();
console.log($(this));
}
else {
  console.log('else')
}
});
});

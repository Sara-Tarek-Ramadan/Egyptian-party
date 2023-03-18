let navWidth=$('#navbar').outerWidth(true)
$('#left').css('left','-236.422px')

$('#icons').click(()=>{
    let left= $('#left').css('left')
    if(left=='0px'){
$('#left').animate({left:`-${navWidth}`},1000)
    }
    else{
        $('#left').animate({left:`0px`},1000)
    }
})
$('#closed').click(()=>{
    $('#left').animate({left:`-${navWidth}`},1000)

})
$('#navbar i,#navbar ul li a').hover(function(){
   $('#navbar i,#navbar ul li a').removeClass('hoverCalor')
   $(this).addClass('hoverCalor')

})
/******************************************************* */

$('.card-header ').click(function(){
  let body=  $(this).parent().find('.card-body')
  body.slideToggle()
  $('.card-body').not(body).slideUp()

})
/**************************************************** */

let countDate=new Date('april 5,2023 4:00:00').getTime();
console.log(countDate);

let counter=setInterval(()=>{
    let currentDate=new Date().getTime();
    let dateDeff=countDate-currentDate;
    let days=Math.floor(dateDeff/(1000*60*60*24));
    let hours=Math.floor((dateDeff % (1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((dateDeff % (1000*60*60))/(1000*60));
    let seconds=Math.floor((dateDeff % (1000*60))/(1000));
$('.days').text(days+" D")
$('.hours').text(hours+" H")
$('.minutes').text(minutes+" M")
$('.seconds').text(seconds+" S")

    if (dateDeff<0) {
        clearInterval(counter)
    }
},1000)
/**************************************************** */

let maxLength=$('.textArea').attr('maxlength');
$('.textArea').keyup(function(){
    var textLength=$(this).val().length;
    finalText=maxLength-textLength;
    $('.num').text(finalText)
    if (finalText<=0) {
    $('.num').text("your available character finished ")
        
    }
 })


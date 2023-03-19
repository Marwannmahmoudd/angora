$(Document).ready(function(){
    $(window).scrollTop(0)
})
$(window).scroll(function(){
    let x = $('#about').offset().top
    let z = $(window).scrollTop()
    if( z > x-100){
        $('#navbar-exampleees').css('background','black')
    }
    else{
        $('#navbar-exampleees').css('background','transparent')
    }

})
$('#gotoabout').click(function(){
    let x = $('#about').offset().top
    $(window).scrollTop(x)
})
let s = document.querySelectorAll('section')
let l = document.querySelectorAll('.nav-link')
console.log(s);
window.onscroll =() => {
    var current = '';
}
s.forEach((element) => {
    let z = $(window).scrollTop()
    let elementtop = element.offsetTop;
    if(z >= elementtop - 60){
current = element.getAttribute('id');
    }
});
console.log(current);
l.forEach((li)=>{
    li.classList.remove("active");
    if(li.classList.contains("current")){
        li.classList.add("active")
    }
})
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#navbarNavAltMarkup  ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
   //console.log(a.classList);
    a.classList.remove("active");
   
    if (a.innerHTML.toUpperCase() == current.toUpperCase()) {
        
      a.classList.add("active");
    }
  });
};

$('#home').ready(function(){
    $("#loading").fadeOut(2000,function(){
        $('body').css('overflow','auto')
    })
    $('.lds-roller').fadeOut(1000)
   
})
$('.iconof-setting').click(function(){
    if($('.fixed').css("left")== "0px"){
        $('.fixed').animate({
            left:"-200px"
        },700)
    }
    else{
        $('.fixed').animate({
            left:"0px"
        },700)
    }
})
$('.yourcolor').click(function(e){
    e.stopprop
    let bgcolor = $(this).css("backgroundColor")
    //console.log(bgcolor);
    $('h1,h2,h3,h4,h5').css('color',bgcolor)
})


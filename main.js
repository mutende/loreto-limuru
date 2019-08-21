//preloader
window.onload= function () {
    setTimeout(() => {
            $('.preloader').animate({
                    width: "toggle",
                    height: "toggle"
            },{
                    duration: 2500,
            });
            $('.preloader-2').animate({
                    width: "toggle",
                    height: "toggle"
            },{
                    duration: 2500,
            });
    }, 1000);
};

// smooth scrolling
$('.navbar a').on('click', function(e) {
    if(this.hash !== ''){    
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top
        },
        800
    );
}
}); 

// add active class on click
$('.navbar ul li a').on('click', function(){       
        $('.navbar ul li a.active').removeClass('active');
        $(this).addClass('active');
});

// about section expand

$('.about-more a').on('click', function(e){
        document.querySelector('.about-div').classList.toggle('about-div-full');
        var x = document.getElementById("AboutreadMore");
        if (x.innerHTML === "More...") {
                x.innerHTML = "...less";
              } else {
                x.innerHTML = "More...";
              }
})

// staff section expand
$('.staff-more a').on('click', function(e){
        document.querySelector('.staff-div').classList.toggle('staff-div-full');
        var x = document.getElementById("readMore");
        if (x.innerHTML === "More...") {
                x.innerHTML = "...less";
              } else {
                x.innerHTML = "More...";
              }
})


// academic section expand
//science
$('.toggle-science a').on('click', function(e){
        document.querySelector('.science').classList.toggle('science-full');
        var x = document.getElementById("readmore-sci");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})


//math-languages
$('.toggle-ml a').on('click', function(e){
        document.querySelector('.math-languages').classList.toggle('math-languages-full');
        var x = document.getElementById("readmore-ml");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})

// humanities-technical
$('.toggle-gg a').on('click', function(){
        document.querySelector('.gg').classList.toggle('gg-full');
        var x = document.getElementById("readmore-gg");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})


$('.toggle-ht a').on('click', function(){
        document.querySelector('.humanities-technical').classList.toggle('humanities-technical-full');
        var x = document.getElementById("readmore-ht");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})

$('.toggle-boarding a').on('click', function(){
        document.querySelector('.boarding').classList.toggle('boarding-full');
        var x = document.getElementById("readmore-boarding");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})

$('.toggle-cc a').on('click', function(){
        document.querySelector('.cc').classList.toggle('cc-full');
        var x = document.getElementById("readmore-cc");
        if (x.innerHTML === "Read more ...") {
                x.innerHTML = "Minimize";
              } else {
                x.innerHTML = "Read more ...";
              }
})


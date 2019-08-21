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

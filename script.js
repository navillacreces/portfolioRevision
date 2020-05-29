function clicksContact(){
    $("#contact-button").click(function(){
        $("body,html").animate({
            scrollTop: $(".footer-container").offset().top
        }, 800);
});
}

function clicksBio(){


    $("#bio-button").on('click', function(){
        $('.hero-text').addClass("w3-animate-opacity");
        $('.hero-text').css("visibility","visible");
        
      
    });

}

function clicksProjects(){

    $("#projects-button").click(function(){
        $("body,html").animate({
            scrollTop: $(".project-flex").offset().top
        }, 800);
});
}

function clicksPopBio(){
    

    $('#pop-bio').click(function(){
        $('.hero-text').addClass("w3-animate-opacity");
        $('.hero-text').css("visibility","visible");
    });
}

function clicksPopProjects(){
    
    $("#pop-projects").click(function(){
        $("body,html").animate({
            scrollTop: $(".project-flex").offset().top
        }, 800);
    });

}

function clicksPopContacts(){
    
    $("#pop-contacts").click(function(){
        $("body,html").animate({
            scrollTop: $(".footer-container").offset().top
        }, 800);
    });
}


function theApp(){

    clicksBio();
    clicksProjects();
    clicksContact();
    clicksPopBio();
    clicksPopProjects();
    clicksPopContacts();
}

$(theApp);
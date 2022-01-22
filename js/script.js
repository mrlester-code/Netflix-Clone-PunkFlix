/*abre uma pagina nova/open a new page*/
function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }

/*Carousel js*/
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
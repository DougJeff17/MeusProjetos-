const $header = document.querySelector('header');


window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
    if (window.pageYOffset > 0 && $header.classList.contains('max-header')) {
        console.log('M');
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
    }   else if (window.pageYOffset == 0  && $header.classList.contains('min-header')) {
        console.log('m');
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
    }
}

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
	
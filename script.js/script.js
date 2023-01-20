const html = document.documentElement;
const body = document.body;
const canvas = document.getElementById("port");
const context = canvas.getContext("2d");



const frameCount = 191;
const currentFrame = index => (
  `https://aerialist1.github.io/aerialist.github.io/JPG/${index.toString().padStart(2, '0')}.jpeg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages();

const img = new Image()
img.src = currentFrame(1);
canvas.width=1120;
canvas.height=1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', (one) => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1))

	


  // _____ Уменшить Canvas на scroll______
	
  // let st = page.scrollTop
  // if (st >= height.page) return
  // let percent = height.page / st,
  // value = height.el / percent
  // el.style.height = height.el - value + minSize + 'px',
	// el.style.transform = "translateX(" + (-600) + "px) translateY(" + (-180) + "px)" + st ;

});

// let minSize = width = 300,
// el = document.querySelector('canvas'),
// page = document.querySelector('html'),
// height = {
//   el:el.offsetHeight + minSize,
//   page: 1750
// }
// width = {
// 	el:el.offsetWidth + minSize,
//   page: 1750
// };


const circleType = new CircleType(
	document.getElementById("rotation")
).radius(90);

$(window).scroll(function() {
	var offset = $(window).scrollTop();
	offset = offset * -0.2;
	
  $(".circular-a").css("opacity", 1 - $(window).scrollTop() / 850);

	
	if ($(this).scrollTop() > 950) {
		$('.intro').css("opacity", 0.75);
	} else if ($(this).scrollTop() > 910) {
		$('.intro').css("opacity", 0.8);
	} else if ($(this).scrollTop() > 870) {
		$('.intro').css("opacity", 0.85);
	} else if ($(this).scrollTop() > 830) {
		$('.intro').css("opacity", 0.9);
	} else if ($(this).scrollTop() > 790) {
		$('.intro').css("opacity", 0.95);
	} else {
		$('.intro').css("opacity", 1);
	}
	
	$(".circular-a").css({
			"-moz-transform": "rotate(" + offset + "deg)",
			"-webkit-transform": "rotate(" + offset + "deg)",
			"-o-transform": "rotate(" + offset + "deg)",
			"-ms-transform": "rotate(" + offset + "deg)",
			transform: "rotate(" + offset + "deg)"

	});

});

const scrollElements = document.querySelectorAll(".logos__item2 img, .logos__item1 img, .logos__item img");

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// const hideScrollElement = () => {
//   scrollElement.classList.remove('scrolled');
// }

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 85)) {
      displayScrollElement(el);
    }
  })
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

// BURGER menu
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

let loader = document.getElementById('preloader');

// $(window).load(function() {
//      $('#preloader').delay(350).fadeOut('slow');
// });

window.addEventListener('load', function(){
loader.style.display = ('none').delay(350).fadeOut('slow');
});

// Loading Page

// var loader;
// function loadNow(opacity) {
// 	if(opacity <= 0) {
// 		displayContent();
// 	}
// 	else {
// 		loader.style.opacity = opacity;
// 		window.setTimeout(function() {
// 			loadNow(opacity - 0.05)
// 		},100);
// 	}
// }

// function displayContent() {
// 	loader.style.display = 'none';
// 	document.getElementById('content').style.display = 'block';

// }

// document.addEventListener("DOMContentLoader", function() {
// 	loader = document.getElementById('loader');
// 	loadNow(1);
// });




// $(document).ready(function(){

// 	var counter = 0;
// 	var c = 0;
// 	var i = setInterval(function(){

// 		$(".loading-page . counter h1").html(c);
// 		$(".loading-page").css("width", c + "%");

// 		counter++;
// 		c++;
// 		if(counter == 101) {
// 			clearInterval(i);
// 		}
// 	}, 50);
// });


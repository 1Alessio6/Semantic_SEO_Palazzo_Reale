/*1776694988000*/
//Variabili che servono per il menu responsive
var maxWidth = 768;	
var API;
if(API){
	API.close();
	API = null;
}

var 
//	$jq = jQuery.noConflict(),
	userAgent = window.navigator.userAgent,
	loadingType = "doors"; // Alternativo: bars

window.addEventListener("click", function () {
	document.body.classList.add("using-mouse");
	document.body.classList.remove("using-keyboard");
})
window.addEventListener("keydown", function () {
	document.body.classList.add("using-keyboard");
	document.body.classList.remove("using-mouse");
})

$(document).ready(function(){
	var searchButtonLabel = 'Cerca';
	$('.portlet-search-bar .search-bar-simple .btn.btn-unstyled .inline-item svg').remove();
	$('.portlet-search-bar .search-bar-simple .btn.btn-unstyled .inline-item').html(searchButtonLabel);

	//Hamburger menu icona
	var hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('is-active');
	});
	
	//Gestione posizionamento Mega Menu se presente breadcrumbs
	if (document.getElementsByClassName("breadcrumbs").length) {
		document.getElementById("mega_menu_navigazione").getElementsByClassName("row")[0].style.paddingTop = document.getElementsByClassName("breadcrumbs")[0].offsetHeight + 'px';
	}
	
	//Nascondo immagine full e la imposto come background - FIX IE
	if (document.getElementsByClassName("image-container").length) {
		var windowSize = window.screen.height,
		imageContainer = document.getElementsByClassName("image-container")[0],
		imageFullWidth = imageContainer.getElementsByTagName("img")[0],
		imageOverlay = imageContainer.getElementsByClassName("overlay")[0],
		bloccoTitolo = document.getElementsByClassName("blocco-titolo")[0],
		summaryText = document.getElementsByClassName("summary")[0],
		navbarElement = document.getElementById("main-navbar"),
		megaMenu = document.getElementById("mega_menu_navigazione"),
		searchBar = document.getElementById("navbar-search"),
		breadcrumbElement = document.getElementsByClassName("breadcrumbs")[0],
		wrapperElement = document.getElementsByClassName("wrapper")[0];
		
		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
			imageContainer.style.background = 'url("' + imageFullWidth.src + '")';
			imageContainer.style.backgroundAttachment = 'local';
			imageContainer.style.backgroundSize = 'auto 100vh';
			imageContainer.style.backgroundRepeat = 'no-repeat';
			imageContainer.style.backgroundPosition = 'center 0';
		} else if (userAgent.match(/Trident/i)) {
			document.body.style.background = 'url("' + imageFullWidth.src + '")';
			document.body.style.backgroundAttachment = 'fixed';
			document.body.style.backgroundRepeat = 'no-repeat';
			document.body.style.backgroundPosition = 'center 0';
		} else {
			imageContainer.style.background = 'url("' + imageFullWidth.src + '")';
			imageContainer.style.backgroundAttachment = 'fixed';
			imageContainer.style.backgroundSize = 'cover';
			imageContainer.style.backgroundRepeat = 'no-repeat';
			imageContainer.style.backgroundPosition = 'center 0';
		}
		
		bloccoTitolo.style.marginTop = windowSize / 2 + 'px';
		bloccoTitolo.style.marginBottom = windowSize / 1.3 + 'px';
		document.getElementsByClassName("summary")[0].style.marginBottom = windowSize / 1.5 + 'px';
		
		//	Imposto header e bredcrumbs
		wrapperElement.classList.add("full");
		navbarElement.classList.add("fixed");
		breadcrumbElement.classList.add("fixed");
		megaMenu.classList.add("fixed");
		searchBar.classList.add("fixed");
		
		if ($("body").hasClass('live-view')){
			setTimeout(function(){
				$(breadcrumbElement).css('top',navbarElement.offsetHeight + navbarElement.offsetTop);
				$(megaMenu).css('top',navbarElement.offsetHeight + navbarElement.offsetTop + breadcrumbElement.offsetHeight);
				$(searchBar).css('top',navbarElement.offsetHeight + navbarElement.offsetTop);
			},1000);
		}	
		else{
			$(breadcrumbElement).css('top',navbarElement.offsetHeight + navbarElement.offsetTop);
		}
		//breadcrumbElement.style.top = navbarElement.offsetHeight;
		setTimeout(function(){
			$(megaMenu).css('top',navbarElement.offsetHeight + navbarElement.offsetTop + breadcrumbElement.offsetHeight);
		},1000);
		//megaMenu.style.top = navbarElement.offsetHeight + breadcrumbElement.offsetHeight;
		$(searchBar).css('top',navbarElement.offsetHeight + navbarElement.offsetTop);
		//searchBar.style.top = navbarElement.offsetHeight;
		
		if (breadcrumbElement) {
			megaMenu.getElementsByClassName("row")[0].style.paddingTop = breadcrumbElement.offsetHeight + searchBar.offsetHeight + 'px';
		}
		
		//	Gestisco animazione HERO
		window.addEventListener('scroll', function () {
			
			if (window.scrollY >= window.outerHeight / 2) {
				if (document.getElementsByClassName("hamburger")[0].classList.contains("is-active")) {
					document.getElementsByClassName("hamburger")[0].click();
				}
				navbarElement.style.transform = 'translateY(-' + navbarElement.offsetHeight + 'px)';
				breadcrumbElement.style.transform = 'translateY(-' + (navbarElement.offsetHeight + breadcrumbElement.offsetHeight) + 'px)';
				megaMenu.style.transform = 'translateY(-' + (navbarElement.offsetHeight + breadcrumbElement.offsetHeight) + 'px)';
				searchBar.style.transform = 'translateY(-' + (navbarElement.offsetHeight + breadcrumbElement.offsetHeight) + 'px)';
			} else {
				navbarElement.style.transform = 'translateY(-0)';
				breadcrumbElement.style.transform = 'translateY(0)';
				megaMenu.style.transform = 'translateY(0)';
				searchBar.style.transform = 'translateY(0)';
			}
			
			if (window.scrollY >= window.outerHeight / 3 && window.scrollY <= window.outerHeight) {
				// bloccoTitolo.classList.add("slide-in");
			}
			
			bloccoTitolo.style.opacity = 1 - (window.pageYOffset / 1000);
			summaryText.style.opacity = 0 + (window.pageYOffset / 1100);
			
			imageOverlay.style.opacity = 0 + window.pageYOffset / 1000;
			if (imageOverlay.style.opacity > 0.75) {
				imageOverlay.style.opacity = 0.75;
			}
			
		});
	}
})	

//Gestisco il loader
window.addEventListener("load", function () {
	if (document.getElementsByClassName("loader-wrapper").length) {
		setTimeout(function () {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("full-loaded");
		}, 1500);
	}
})
//Liferay.on('beforeNavigate', function(event) {
//	$jq('.loader-wrapper').show();
//});

function onNavigateEnd(){
	if (document.getElementsByClassName("loader-wrapper").length) {
		setTimeout(function () {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("full-loaded");
		}, 1500);
	}
	
	if (reloadOTBanner != undefined){
	   console.log('ricarica OT banner');
	   reloadOTBanner();
	}
	
	Liferay.detach('endNavigate', onNavigateEnd);
}

Liferay.on('endNavigate', onNavigateEnd);

//Se il browser non supporta type="date" su input, inizializza il Date Picker jQuery UI
var datefield = document.createElement('input');
datefield.setAttribute('type', 'date');
if (datefield.type != 'date') {
	$(document).ready(function () {
		$('input[type="date"]').val('');
		$('input[type="date"]').datepicker();
	})
};

AUI().ready(
	'liferay-sign-in-modal',
	function(A) {
		var signIn = A.one('.sign-in > a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}
	}
);
	
Liferay.Portlet.ready(
	/*
	This function gets loaded after each and every portlet on the page.
	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/
	function(portletId, node) {
	}
);
Liferay.on(
	'allPortletsReady',
	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/
	function() {
	}
);
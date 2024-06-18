import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

AOS.init();


//Mask for phone number
if (document.querySelector('input[type="tel"]')) {
	document.querySelector('input[type="tel"]').addEventListener('input', function (e) {
		var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	 });
	}

//Smooth scroll
// document.addEventListener('DOMContentLoaded', function() {
// 	document.body.style.display = 'none';
 
// 	setTimeout(function() {
// 	  document.body.style.display = 'block';
// 	  document.body.style.opacity = '1';
// 	  document.body.style.transition = 'opacity 2s';
// 	}, 0);
 
// 	document.querySelectorAll('a.transition').forEach(function(element) {
// 	  element.addEventListener('click', function(event) {
// 		 event.preventDefault();
// 		 const linkLocation = this.href;
 
// 		 setTimeout(function() {
// 			document.body.style.opacity = '0';
// 			document.body.style.transition = 'opacity 1s';
// 		 }, 0);
 
// 		 setTimeout(function() {
// 			window.location = linkLocation;
// 		 }, 700);
// 	  });
// 	});
//  });


 //Validation for form
 document.addEventListener('DOMContentLoaded', function() {
	if (document.getElementById('form')) {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	 async function formSend(e) {
		e.preventDefault();

		let buttons = this.querySelectorAll('button[type=submit]');
		for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
		}

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.status === 200) {
				form.reset();
				form.classList.remove('_sending')
				modal();
			} else {
				alert(`Error ${response.status}`);
				form.classList.remove('_sending')
			}
		} else {
			alert("Please fill out the required fields")
		}
	 }
	
	 function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if(input.classList.contains('_email')) {
				if( emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	 }
	
	 function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	 }

	 function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	 }
	}
	//Pop up after submit
	function modal() {
			const overlay = document.querySelector('#overlay');
			const modal = document.querySelector('.modal');
			const close = document.querySelector('.modal_close');

			overlay.classList.add("open");
			modal.classList.add("open_content");
		
			close.addEventListener('click', function() {

			overlay.classList.remove("open");
			modal.classList.remove("open_content");
			});
	}

	 //Function for test email-input
	 function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
	 }
});

//Menu hamburger
	window.addEventListener('DOMContentLoaded', () => {
		//Menu-hamburger
		 const menu = document.querySelector('.menu');
		 const menuItem = document.querySelectorAll('.menu_item');
		 const hamburger = document.querySelector('.hamburger');
		//  const body = document.querySelector('body');
		 const cross = document.querySelector('.menu_close')
	 
	 
		 hamburger.addEventListener('click', () => {
			 menu.classList.toggle('menu_active');
		 });
	 
		 menuItem.forEach(item => {
			 item.addEventListener('click', () => {
				 menu.classList.toggle('menu_active');
			 })
		 })
	 
		 cross.addEventListener('click', () => {
			 menu.classList.toggle('menu_active');
		 });
	 
	 })

// Get all elements with class "warehousing-about_card"
const cards = document.querySelectorAll(".warehousing-about_card");

// Loop through each card
cards.forEach((card, i) => {
    // Add event listener for mouseenter
    card.addEventListener("mouseenter", (e) => {
        // Prevent default link behavior
        e.preventDefault();
        // Toggle class for card title
        card.querySelector(".warehousing-about_card_descr").classList.toggle("warehousing-about_card_descr_active");
		  card.querySelector(".warehousing-about_card_img").classList.toggle("warehousing-about_card_img_active");
        // Toggle class for card name
        card.querySelector(".warehousing-about_card_name").classList.toggle("warehousing-about_card_name_active");
    });
    
    // Add event listener for mouseleave
    card.addEventListener("mouseleave", (e) => {
        // Prevent default link behavior
        e.preventDefault();
        // Toggle class for card title
        card.querySelector(".warehousing-about_card_descr").classList.toggle("warehousing-about_card_descr_active");
		  card.querySelector(".warehousing-about_card_img").classList.toggle("warehousing-about_card_img_active");
        // Toggle class for card name
        card.querySelector(".warehousing-about_card_name").classList.toggle("warehousing-about_card_name_active");
    });
});

// Elements with class "transloading-about_card"
const items = document.querySelectorAll(".transloading-about_item");

items.forEach((item, i) => {
	// Add event listener for mouseenter
	item.addEventListener("mouseenter", (e) => {
		 // Prevent default link behavior
		 e.preventDefault();
		 // Toggle class for card title
		 item.querySelector(".transloading-about_item_descr").classList.toggle("transloading-about_item_descr_active");
		 // Toggle class for card name
		 item.querySelector(".transloading-about_item_title").classList.toggle("transloading-about_item_title_active");
		 item.style.setProperty("--before-opacity", "0");
	});

	item.addEventListener("touchstart", (e) => {
		// Prevent default link behavior
		e.preventDefault();
		// Toggle class for card title
		item.querySelector(".transloading-about_item_descr").classList.toggle("transloading-about_item_descr_active");
		// Toggle class for card name
		item.querySelector(".transloading-about_item_title").classList.toggle("transloading-about_item_title_active");
		item.style.setProperty("--before-opacity", "0");
  });
	
	// Add event listener for mouseleave
	item.addEventListener("mouseleave", (e) => {
		 // Prevent default link behavior
		 e.preventDefault();
		 // Toggle class for card title
		 item.querySelector(".transloading-about_item_descr").classList.toggle("transloading-about_item_descr_active");
		 // Toggle class for card name
		 item.querySelector(".transloading-about_item_title").classList.toggle("transloading-about_item_title_active");
		 item.style.removeProperty("--before-opacity");
	});

	item.addEventListener("touchend", (e) => {
		// Prevent default link behavior
		e.preventDefault();
		// Toggle class for card title
		item.querySelector(".transloading-about_item_descr").classList.toggle("transloading-about_item_descr_active");
		// Toggle class for card name
		item.querySelector(".transloading-about_item_title").classList.toggle("transloading-about_item_title_active");
		item.style.removeProperty("--before-opacity");
  });
});

// Get the current year
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.addEventListener('DOMContentLoaded', () => {
	const contentDiv = document.getElementById('content');
	const links = document.querySelectorAll('.nav-link');

	links.forEach(link => {
		 link.addEventListener('click', (event) => {
			  event.preventDefault();
			  const page = event.target.getAttribute('data-page');

			  // Fade out the current content
			  contentDiv.classList.add('hidden');

			  // Load new content after fade-out effect
			  setTimeout(() => {
					fetch(page)
						 .then(response => response.text())
						 .then(data => {
							  contentDiv.innerHTML = data;
							  contentDiv.classList.remove('hidden');
						 })
						 .catch(error => {
							  console.error('Error loading page:', error);
						 });
			  }, 500); // Adjust the timeout to match the CSS transition duration
		 });
	});
});
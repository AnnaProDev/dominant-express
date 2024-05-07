import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//Mask for phone number
if (document.querySelector('input[type="tel"]')) {
	document.querySelector('input[type="tel"]').addEventListener('input', function (e) {
		var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	 });
	}

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

// Update the year in the HTML
document.getElementById("currentYear").textContent = currentYear;
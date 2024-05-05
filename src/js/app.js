import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


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
});
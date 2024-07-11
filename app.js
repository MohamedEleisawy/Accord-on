"use strict"
const accordion = document.querySelector(".accordion")
const items = accordion.querySelectorAll("li")
const titles = accordion.querySelectorAll(".title")

function toggleAccordion() {
	const thisItem = this.parentNode
	console.log(thisItem)
	items.forEach((item) => {
		if (thisItem == item) {
			thisItem.classList.toggle("open")
			return
		}
		item.classList.remove("open")
	})
}
titles.forEach((title) => title.addEventListener("click", toggleAccordion))

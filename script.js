const tabContainer = document.querySelector(".tabs");
const tabs = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");

//hide all tab-content div

function hideTabContent() {
	tabContent.forEach((el) => (el.style.display = "none"));
	tabs.forEach((el) => el.classList.remove("active-tab-class"));
}

function showTabContent(a = 0) {
	tabContent[a].style.display = "block";
	tabs[a].classList.add("active-tab-class");
}

hideTabContent();
showTabContent();

tabContainer.addEventListener("click", ({ target }) => {
	if (target.classList.contains("tab-item")) {
		tabs.forEach((el, i) => {
			if (target == el) {
				hideTabContent();
				showTabContent(i);
			}
		});
	}
});

var hideContactBar = document.querySelector('.hideContactBar')
var showContactBar = document.querySelector('.showContactBar')
var contactButton = document.querySelector("#nav li [href='##']")
var open = false

//why did these variables have to be var, not const?
//still trying to figure out what exactly 'open' represents

contactButton.addEventListener('click', toggleContact, false);

function toggleContact() {
	if (!open) {
		openContact() 
	} else {
		closeContact() 
	}
}

function openContact() {
	open = true
	contactBar.classList.add('showContactBar')
	contactBar.classList.remove('hideContactBar')
}

function closeContact() {
	open = false
	contactBar.classList.remove('showContactBar')
	contactBar.classList.add('hideContactBar')
}
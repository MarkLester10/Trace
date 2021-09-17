window.onscroll = function () {
	stickyNav();
};
var navbar = document.getElementById('navbar');
function stickyNav() {
	if (window.pageYOffset >= 10) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

function displayImage(t) {
	if (t.files[0]) {
		var e = new FileReader();
		(e.onload = function (t) {
			document.querySelector('#imageDisplay').setAttribute('src', t.target.result);
		}),
			e.readAsDataURL(t.files[0]);
	}
}
const modal = document.querySelector('.modal'),
	vaccineModal = document.querySelector('.vaccine-modal'),
	tooltipPopUp = document.querySelector('.popup-tooltip'),
	tooltipClose = document.querySelector('.close-tooltip'),
	vaccinePopUp = document.querySelector('.popup-vaccine'),
	vaccineClose = document.querySelector('.close-vaccine');

function toggleModal() {
	modal.classList.toggle('active');
}
tooltipPopUp.addEventListener('click', function (t) {
	t.preventDefault(), toggleModal();
}),
	tooltipClose.addEventListener('click', function (t) {
		t.preventDefault(), toggleModal();
	}),
	modal.addEventListener('click', function (t) {
		t.target.classList.contains('modal') && modal.classList.toggle('active');
	});

// Vaccine Popup
function toggleVaccineModal() {
	vaccineModal.classList.toggle('active');
}
vaccinePopUp.addEventListener('click', function (t) {
	t.preventDefault(), toggleVaccineModal();
}),
	vaccineClose.addEventListener('click', function (t) {
		t.preventDefault(), toggleVaccineModal();
	}),
	vaccineModal.addEventListener('click', function (t) {
		t.target.classList.contains('vaccine-modal') && vaccineModal.classList.toggle('active');
	});

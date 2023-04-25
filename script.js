const hambugerIcon = document.querySelector('.nav-toggler')
const body = document.querySelector('html')
const navigation = document.querySelector("nav")

hambugerIcon.addEventListener("click", toggleNav)

function toggleNav(){
	hambugerIcon.classList.toggle("active")
	navigation.classList.toggle("active")
	body.classList.toggle("active")
}


const zones = document.querySelectorAll('.zone');
const infos = document.getElementById('infos');
let selectedZone = null;

for (let i = 0; i < zones.length; i++) {
	zones[i].addEventListener('click', () => {
		// Si une zone était déjà sélectionnée, on la désélectionne
		if (selectedZone !== null) {
			selectedZone.style.fill = '#47BFAE';
		}
		// Si la zone cliquée est différente de la zone sélectionnée précédemment, on la sélectionne
		if (selectedZone !== zones[i]) {
			zones[i].style.fill = 'red';
			selectedZone = zones[i];
			// Mise à jour des informations sur la zone sélectionnée
			const text = zones[i].getAttribute('data-text');
			infos.innerHTML = text;
			// Affichage de l'élément infos
			infos.style.display = 'flex';
		} else {
			// Si la zone cliquée est la même que la zone sélectionnée précédemment, on la désélectionne
			zones[i].style.fill = '#47BFAE';
			selectedZone = null;
			// Réinitialisation des informations
			infos.innerHTML = "<h2>Sélectionnez une case</h2><div id='contenu'><p></p><img src='' alt=''></div>";
			// Cachage de l'élément infos
			infos.style.display = 'none';
		}

	});
}
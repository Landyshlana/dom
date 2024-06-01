export default function punchGoblin() {
    let currentIndex = 0;
	const holes = Array.from(document.querySelectorAll(".hole"));

    if (document.querySelector('.goblin')) {
        document.querySelector('.goblin').remove();
    }
    let randomIndex = Math.floor(Math.random() * holes.length);
    while (randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * holes.length);
    }
    let randomHole = holes[randomIndex];
    currentIndex = randomIndex;
    let goblin = document.createElement('div');
    goblin.classList.add('goblin');
    randomHole.appendChild(goblin);
    console.log(randomHole);
}
const images = [
	'assets/images/photo1.jpg',
	'assets/images/photo2.jpg',
	'assets/images/photo3.jpg',
]

const texts = [
	'Ты самая добрая и светлая, люблю тебя!',
	'Пусть сбудется всё, о чём ты мечтаешь!',
	'Оставайся такой же весёлой и неповторимой!',
]

function startGallery() {
	document.getElementById('start-screen').style.display = 'none'
	document.getElementById('main-content').style.display = 'block'
	showRandom()
}

function showRandom() {
	const img = document.getElementById('random-image')
	const txt = document.getElementById('random-text')

	const randomImg = images[Math.floor(Math.random() * images.length)]
	const randomText = texts[Math.floor(Math.random() * texts.length)]

	img.src = randomImg
	txt.textContent = randomText
}

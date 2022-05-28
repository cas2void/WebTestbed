const myImage = document.querySelector('img')
const originalWidth = myImage.style.width
myImage.onmouseenter = function () {
	myImage.style.width = '510px'
}
myImage.onmouseleave = () => {
	myImage.style.width = originalWidth
}

const myButton = document.querySelector('button')
const myHeading = document.querySelector('h1')

function setHeading(name) {
	myHeading.textContent = "Node is Cool, " + name
}

function setUserName() {
	const myName = prompt('Please enter you name')
	if (!myName) {
		setUserName()
	} else {
		localStorage.setItem('name', myName)
		setHeading(myName)
	}
}

myButton.onclick = () => {
	setUserName();
}

const storedName = localStorage.getItem('name')
if (!storedName) {
	setUserName()
} else {
	setHeading(storedName)
}

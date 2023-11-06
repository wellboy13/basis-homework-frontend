// Задание 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const redSquare = document.querySelector(".red-square")
const redButton = document.querySelector(".red-button")

// 1 вариант
redButton.addEventListener("click", function() {
    redSquare.style.backgroundColor = "green"
    redSquare.style.width = "100px"
    redSquare.style.height = "100px"
})

// 2 вариант
redButton.addEventListener("click", function (){
    redSquare.classList.add("red-square-click")
})

// Задание 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const pinkSquare = document.querySelector(".pink-square")
const blueButton = document.querySelector(".blue-button")

blueButton.addEventListener("click", function () {
    pinkSquare.style.backgroundColor = "blue"
    console.log(pinkSquare.style.backgroundColor)
})

// Задание 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const upSquare = document.querySelector(".square-up")
const upButton = document.querySelector(".button-up")

upButton.addEventListener("click", function () {
    upSquare.classList.remove("square-up")
    upSquare.classList.add("square-up-click")
})

// Задание 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const root = document.querySelector(".root")
const rootButton = document.querySelector(".button-root")

rootButton.addEventListener("click", function() {
    const paragraph = document.createElement("p")
    paragraph.innerText = "Параграф синего цвета"
    paragraph.style.color = "blue"
    root.append(paragraph)
})

// Задание 5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const rootColor = document.querySelector(".root-color")
const buttonRootColor = document.querySelector(".button-root-color")

let counter = 1

// 1 вариант.

buttonRootColor.addEventListener("click", function () {
    counter++
    const paragraphColor = document.createElement("p")
    if (counter % 2 === 0) {
        paragraphColor.style.color = "blue"
        paragraphColor.innerText = "Параграф синего цвета"
    } else {
        paragraphColor.style.color = "green"
        paragraphColor.innerText = "Параграф зеленого цвета"
    }
    rootColor.append(paragraphColor)
})

// 2 вариант.

buttonRootColor.addEventListener("click", function () {
    counter++
    const paragraphColor = document.createElement("p")
    paragraphColor.innerText = "Параграф с текстом"
    paragraphColor.classList.add("p-blue")
    if (counter % 2 != 0) {
        paragraphColor.classList.add("p-green")
    }
    rootColor.append(paragraphColor)
})
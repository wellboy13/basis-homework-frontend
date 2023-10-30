// Задание 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const numbers = document.querySelector(".numbers")
for(let i = 100; i >= 50; i-=10) {
numbers.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
}


// Задание 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const arrayString = ["One", "Two", "Three", "Four", "Five"]
const container = document.querySelector(".strings_container")
for(let i = 0; i < arrayString.length; i++) {
container.insertAdjacentHTML("beforeend", `<p>${arrayString[i]}</p>`)
}

// Задание 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const arrayUsers = [
    {
        first_name: "Artem",
        last_name: "Zemchenko",
        age: 13
    },
    {
        first_name: "Nikolay",
        last_name: "Petrov",
        age: 25
    },
    {
        first_name: "Dmitrii",
        last_name: "Vasylyev",
        age: 34
    },
    {
        first_name: "Anton",
        last_name: "Sydorov",
        age: 12
    },
    {
        first_name: "Filipp",
        last_name: "Sydorov",
        age: 18
    }
]

const usersArea = document.querySelector(".users_container")

for(let i = 0; i < arrayUsers.length; i++) {
    if(arrayUsers[i].age >= 18) {
        usersArea.insertAdjacentHTML("beforeend", 
                                    `<div class="user">
                                    <h3>${arrayUsers[i].first_name} ${arrayUsers[i].last_name}</h3>
                                    <p>Возраст: ${arrayUsers[i].age} лет</p>
                                    </div>`)
    }
}


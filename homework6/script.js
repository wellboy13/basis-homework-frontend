// 1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

for(let i = 0; i <= 10; i+=2) {
    console.log(i)
}


// 2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20    

for(let i = 55; i >= 20; i--) {
    console.log(i)
}


// 3. Дан массив numbers. Вывести в консоль все числа из массива const numbers = [3, 5, 11, 2, 8, 1, 6]; Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6] // создаем массив
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]) // выводим массив в консоль
}

const numbers_squared = [] // создаем пустой массив

for(let i = 0; i < numbers.length; i++) { 
    numbers_squared.push(numbers[i] ** 2)
} // запускаем цикл для заполнения нового массива числами в **2


// 4. Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

let last_elem = numbers_squared[numbers_squared.length - 1] //получаем значение последней ячейки массива numbers_squared


// 5. Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = { // создаем объект с данными
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500
}
console.log(`Users\`s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`) // выводим в консоль строку с подстановкой данных объекта


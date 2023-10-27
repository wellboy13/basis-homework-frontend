// Задание 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function max(num1, num2) {

    if (num1 > num2) {
        return num2
    }
    if (num1 < num2) {
        return num1
    }
       return "Введенные числа равны"
    }

num1 = +(prompt('Введите первое число: '))
num2 = +(prompt('Введите второе число: '))

console.log(max(num1, num2)) 



// Задание 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

//1 вариант.

function evenFirst(num1, num2) {
    if (num1 > num2) {
        for(let i = num1; i >= num2; i--) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }
    } else {
        for(let i = num2; i >= num1; i--) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }
    }
}

// 2 вариант.

function evenSecond(num1, num2) {
    const max = Math.max(num1, num2)
    const min = Math.min(num1, num2)

    for(let i = max; i >= min; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// 3 вариант
function logEvenNums(a, b) {
    if (a == b) {
      console.log("числа равны")
      return
    }
    let min = a // предполагаем, что одно значение мин, а другое макс.
    let max = b
    if(a > b) { // исправляем есди это неверно
      min = b
      max = a
    }
  
    for(let i = max; i >= min; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
 
evenFirst(10, 2) // 1 вариант
evenSecond(10, 2) // 2 вариант
logEvenNums(10, 20) // 3 вариант
logEvenNums(33, 25)



// Задание 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.


function power(base, exp = 2) { // задаем значение по умолчанию экспоненте
    return base ** exp
}

console.log(power(10, 3))
console.log(power(10))


// Задание 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.


function sum(n) {
    if(n < 1) {
        return null
    }
    let sum = 0
    
    for(let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

sum(5)


//Задание 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function divideSum(n, m) {
    let evenSum = 0
    let oddSum = 0

    const max = Math.max(n, m)
    const min = Math.min(n, m)

    for(let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            evenSum += i
        } else {
            oddSum += i
        }
    }
    console.log(`Сумма четных чисел в диапазоне от ${n} до ${m} будет ${evenSum}`)
    console.log(`Сумма нечетных чисел в диапазоне от ${n} до ${m} будет ${oddSum}`)
}

divideSum(1, 15)

//Задание 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 



function firstElementArray(array) {
    if (array.length === 0) {
        return null

    } else {
        let firstLongestElement = array[0] // задаем раб переменную первого длинного элемента массива

        for(let i = 1; i < array.length; i++) { // прогоняем массив через цикл
            if (array[i].length > firstLongestElement.length) { // сравниваем следующий элемент с предыдущим по его длине (если короче или равен, то выход из цикла)
                firstLongestElement = array[i] // если след элемент длинее, чем предыдущий, присваиваем новое значение firstLongestElement 
            }
        }
        return firstLongestElement // возвращаем значение первого длинного элемента
    }
}

const stringArray = ["1", "12", "1234(1)", "1234(2)", "1", "12"]
console.log(`Первый длиный элемент массива: ${firstElementArray(stringArray)}`)

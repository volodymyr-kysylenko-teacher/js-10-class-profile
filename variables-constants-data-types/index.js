// --- Змінні та константи. Типи даних ---

/* 
1. Оголошення змінних

В JavaScript є три ключові слова для оголошення змінних:
- var: старий спосіб оголошення змінних (використовується рідше, в основному в старих програмах).
- let: сучасний спосіб оголошення змінних, який дозволяє змінювати їх значення.
- const: для оголошення констант, які не змінюються після ініціалізації.
*/

// 1.1. Використання var (старий спосіб)

var oldVariable = "Hello, I'm a 'var' variable!";
console.log("oldVariable:", oldVariable, "\n");
// 'var' має функціональну область видимості (function scope)

function testVar() {
    var x = 10;

    if (true) {
        var x = 20; // Це змінює значення x у всій функції, а не тільки в межах блоку.
        console.log("x в блоці:", x);
    }
    console.log("x поза блоком:", x, "\n");
}

testVar();

// ми можемо звернутись до змінної з var раніше, ніж ми її оголосили

console.log("varExample:", varExample, "\n");
var varExample = "Hello, I'm a 'var' variable!";

// 1.2. Використання let (блокова область видимості)

let modernVariable = "I'm a 'let' variable!";
console.log("modernVariable:", modernVariable, "\n");

// 'let' має блокову область видимості (block scope)

function testLet() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log("y в блоці:", y);
    }
    console.log("y поза блоком:", y, "\n");
}

testLet();

// до змінної з let раніше, ніж ми її оголосили, звертатись не можна

// console.log(letExample); // нічого не вийде
let letExample = "Hello, I'm a 'var' variable!";

// 1.3. Використання const (константи, які не можна змінити після оголошення)

const CONSTANT_VARIABLE = "I'm a constant!";
console.log("CONSTANT_VARIABLE:", CONSTANT_VARIABLE, "\n"); // Виведе: I'm a constant!

// Спроба змінити значення константи призведе до помилки

// CONSTANT_VARIABLE = "New value"; // Помилка: Assignment to constant variable

// Однак, якщо const посилається на об'єкт або масив, то його властивості або елементи можна змінювати

const person = { name: "John", age: 25 };
person.age = 26; // Це допустимо, оскільки змінюється властивість об'єкта, а не сама змінна
console.log("person:", person, "\n"); // Виведе: { name: 'John', age: 26 }

// 2. Типи даних

/*
Типи даних в JavaScript включають:
- String (рядок)
- Number (число)
- BigInt (числа більше, ніж може містити тип Number)
- Boolean (булеве значення: true або false)
- Object (об'єкт)
- Null (відсутність значення)
- Undefined (змінна оголошена, але не має значення)
- Symbol (унікальне значення, додано в ES6)
*/

// 2.1. String (рядки)

let name = "Alice";

// 2.2. Number (числа)

let age = 30;
let bigInt = 1234567890123456789012345678901234567890n;
const PI = 3.14;

// 2.3. Boolean (булеві значення)

let isStudent = true;
let isTeacher = false;

// 2.4. Undefined (змінна оголошена, але не має значення)

let undefinedVariable;
console.log("undefinedVariable:", undefinedVariable, "\n"); // Виведе: undefined

// 2.5. Null (явне присвоєння відсутності значення)

let nullVariable = null;
console.log("nullVariable", nullVariable, "\n"); // Виведе: null

// 2.6. Object (об'єкти)

let user = {
    name: "John",
    age: 30,
};
console.log("user:", user, "\n"); // Виведе: { name: 'John', age: 30 }

// Списки в JS - це також об'єкти:
let array = [1, 2, 3, 4, 5];
console.log("array:", array, "\n");

// Як і множини:

let set = new Set([1, 2, 1, 1, 2]);
console.log("set:", set, "\n");

// 3. Робота з різними системами числення в JS

// Десяткова система числення (base 10)
// Це стандартна система числення, яку ми використовуємо в повсякденному житті.

let decimalNumber = 42;
console.log("Десяткова система:", decimalNumber); // Виведе: 42

// Двійкова система числення (base 2)
// Для представлення двійкових чисел використовуємо префікс '0b'.

let binaryNumber = 0b101010;
console.log("Двійкова система:", binaryNumber); // Виведе: 42

// Вісімкова система числення (base 8)
// Для представлення вісімкових чисел використовуємо префікс '0o'.

let octalNumber = 0o52;
console.log("Вісімкова система:", octalNumber); // Виведе: 42

// Шістнадцяткова система числення (base 16)
// Для представлення шістнадцяткових чисел використовуємо префікс '0x'.

let hexadecimalNumber = 0x2a;
console.log("Шістнадцяткова система:", hexadecimalNumber, "\n"); // Виведе: 42

// Перетворення чисел з однієї системи числення в іншу

let number = 42;

// Перетворення в двійкову систему

let binaryString = number.toString(2);
console.log("Число 42 у двійковій системі:", binaryString); // Виведе: '101010'

// Перетворення в вісімкову систему

let octalString = number.toString(8);
console.log("Число 42 у вісімковій системі:", octalString); // Виведе: '52'

// Перетворення в шістнадцяткову систему

let hexString = number.toString(16);
console.log("Число 42 у шістнадцятковій системі:", hexString, "\n"); // Виведе: '2a'

// Парсинг рядків в числа з різних систем числення

let parsedBinary = parseInt("101010", 2);
console.log("Парсинг двійкового рядка '101010':", parsedBinary); // Виведе: 42

let parsedOctal = parseInt("52", 8);
console.log("Парсинг вісімкового рядка '52':", parsedOctal); // Виведе: 42

let parsedHex = parseInt("2a", 16);
console.log("Парсинг шістнадцяткового рядка '2a':", parsedHex); // Виведе: 42

// 4. Присвоєння значень змінним

/*
JavaScript дозволяє присвоювати значення змінним кількома способами:
- Під час оголошення змінної.
- Пізніше, після оголошення змінної.
*/

let newVariable; // Оголошено без значення
newVariable = "Now I have a value"; // Присвоєння значення після оголошення
console.log("newVariable:", newVariable, "\n"); // Виведе: Now I have a value

// 5. Перевірка типу змінної

/*
Для перевірки типу змінної використовують оператор typeof.
*/

console.log("typeof name:", typeof name); // Виведе: string
console.log("typeof age:", typeof age); // Виведе: number
console.log("typeof isStudent:", typeof isStudent); // Виведе: boolean
console.log("typeof user:", typeof user); // Виведе: object
console.log("typeof array:", typeof array); // Виведе: object
console.log("typeof set:", typeof set); // Виведе: object
console.log("typeof undefinedVariable:", typeof undefinedVariable); // Виведе: undefined
console.log("typeof nullVariable:", typeof nullVariable, "\n"); // Виведе: object (це офіційно вважається багом в JavaScript, null має бути окремим типом)

// typeof також можна використовувати як функцію:
console.log("typeof nullVariable:", typeof nullVariable, "\n");

// 6. Важливість іменування змінних

/*
Ім'я змінної повинно бути зрозумілим і описувати її призначення. Є кілька правил для іменування змінних:
- Імена змінних можуть містити лише букви, цифри, символи $ та _.
- Ім'я змінної не може починатися з цифри.
- Рекомендується використовувати camelCase для багатоелементних імен (наприклад, userAge, firstName).
*/

let userAge = 28;
let firstName = "Bob";

// 7. Змінні з глобальною та локальною областями видимості
/*
Змінні в JavaScript можуть бути глобальними (доступні у всій програмі) або локальними (доступні лише в межах певної функції або блоку).
*/

// 7.1. Глобальна змінна
let globalVariable = "I'm global!";

function accessGlobal() {
    console.log("globalVariable:", globalVariable, "\n"); // Можна отримати доступ до глобальної змінної в межах функції
}

accessGlobal();

// 7.2. Локальна змінна
function localVariableExample() {
    let localVariable = "I'm local!";
    console.log("localVariable:", localVariable); // Доступна лише в межах цієї функції
}

localVariableExample();
// console.log(localVariable); // Помилка: localVariable не визначена за межами функції



// Используем новый функционал который не позволяет допускать мелкие ошибки и делает код чище
"use strict"
/* 
// Вызываем уведомление текстом
alert( 'JavaScript начали!' );

// Их может быть несколько
alert('Сейчас!');

// Объявляем переменные 
let message;
message = 'Переменная';
// Обновляем значение переменной
message = 'Новая переменная';

// Объявляем alert через переменную
alert(message);

// Объявляем переменную со значением другой переменной
let child;
child = message;
// Проверяем работоспособность
alert(child)

// Неизменные переменные 
const myname = 'Sergey';
// myname = 'John'; (Не работает)
alert(myname);

// Константы с жесткими значениями которые известны заранее записываются большими буквами
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Когда нам нужно выбрать цвет...
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Alert, но с обратной связью от пользователя
let username = prompt('Как тебя зовут?', 'Сергей');
alert(`Рады тебя видеть, ${username}!`);

// Alert, со значением правда или ложь
let money = confirm("Хочешь зарабатывать больше?");
alert( money );

// Преобразование в другие типы данных
let valuer = true;
alert(typeof valuer); // boolean

valuer = String(valuer); // теперь valuer это строка "true"
alert(typeof valuer); // string

// При операции деления строки преобразуются в числа
alert( "6" / "2" ); // 3

// Строки преобразуются в число
let str = "123";
alert(typeof str); // string 

let num = Number(str); // становится числом 123

alert(typeof num); // number

// Булевые значения при наличии информации принимают значение true
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)

// Унарный оператор измняет значение операнда
let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус

// Бинарный опреатор вычитает операнды
let x = 1, y = 3;
alert( y - x ); // 2, бинарный минус вычитает значения

// Взятие остатка это остаток от деления
alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3

// Возведение в степень умножает первый операнд на количество раз во втором операнде
alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

// Объединение строк 
let vasya = "Привет, " + "Вася!";
alert(vasya);

// Если при сложении один из операндов преобразован в строку, то все они будут преобразованы в строки
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // будет "41", а не "221"

// Все другие опреаторы помимо + приводят все значения к числам
alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// Унарный +, это аналог Number()
// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

// У каждого оператора есть собственный приоретет

// Вложенность переменных в выражениях с присваиванием
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

// Цепочки присваиваний 
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// Использовать переменную и сохранить результат в ней же 
let h = 5;
h = 9 - h;
h = h * 3;

alert(h); //Теперь результатом переменной h будет 12

// Оба используются только для переменных
// Инкремент
let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3

// Декремент 
let counterr = 2;
counterr--;        // работает как counter = counter - 1, просто запись короче
alert( counterr ); // 1

// Префиксная форма декремента и постфиксаня
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

let counter = 1;
let a = counter++; // (*) меняем ++counter на counter++

alert(a); // 1
// ЗАЧЕМ ВОЗРАЩАТЬ СТАРОЕ ЗНАЧЕНИЕ (ОТВЕТ: мы просто в одной строке делаем несколько действий, одно для текущего примера,а ++ уже пойдет для дальнейшего использования)
// То есть для данного примера возврат будет прошлого числа (item++), но в дальнейшем при вызове item оно уже будет +1

// Лучше писать не так 
let counter = 1;
alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение

// А так
let counter = 1;
alert( 2 * counter ); //2
counter++;
++counter;
alert(counter)//3

let bn = 2;
alert(2 * bn++)
alert(2 * bn)

// Запятая используется для вычисления нескольких выражений сразу, но вернется только результат последнего вычисления 
let a = (1 + 2, 3 + 4); //Скобки важны так как запятая имеет очень низкий приоретет

alert( a ); // 7 (результат вычисления 3 + 4)

// Нужны для подобных вычислений 
// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    ...
   }
// Но так лучше не писать так как не читабельно

// Эта запись
let n = 2;
n = n + 5;
n = n * 2;

// Равна этой
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert( n ); // 14

// Задачка
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

// Решение
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 3


// Опрераторы сравнения 
let jimmy, rick, morthy
rick = 2
morthy = 5
jimmy = morthy >= rick

alert(jimmy)

// ДОГАДКИ
if jimmy true то..

// Строки сравниваются по алфавитному порядку либо по длинне слова если алфавит идентичен (строчные главнее заглавных)
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

// При использовании операторов сравнения все приводится к числовым значениям 
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true! //Так как строка будет приведена к 0

// Оператор строгого равенства 
alert( 0 === false ); // false, так как сравниваются разные типы

// Равны друг другу и больше никому не равны
alert( null == undefined ); // true

// Null при испольовании математических операторов сравнения приводится к 0
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// Условия если и в ином случае
let quest 
quest = prompt('За какое минимальное количество месяцев можно изучить JS?', '')
// Если не то,а иначе
if (quest > 6) { //Если срок больше 6 месяцев, то это не мин срок
    alert('Это не минимальный срок!')
}   else  if (quest < 6){ //иначе если ответ не больше 6, то мы переходим к условию если срок меньше 6 месяц
    alert('Нужно постараться еще немного!')
}   else {
    alert('Верно!') // Для всех остальных вариантов помимо >6 и <6
}

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);


// сокращенная запись 
let accessAllowed = (age > 18) ? true : false;


let y = prompt('Напиши 7', '');

let x = (y == 7) ? "Это семь" : "Это не семь";
alert(x);


// Сразу несколько условий
let run = prompt('Как быстро бегаешь в секундах 100м?', '');

let x = (run < 9) ? "Ракета":
(run == 9) ? "Усейн Болт":
(run < 12) ? "Середнячок" : "улитка!"; // Сразу 2 условия, середнячок для тех кто меньше 12 и улитка для всех отсальныъъ кто не вписывается в диапазон от 12 до 0
alert(x);

// Задачки

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result (a + b < 4) ? 'Мало' : 'Много';

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let login = prompt('Введите логин', '')

let message = (login == 'Сотрудник') ? "Привет" :
(login == 'Директор') ? "Здравствуйте" :
(login == '') ? "Нет логина" : '';
alert(message)


// ТРЕНИНГ НА ЗАКРЕПЛЕНИЕ

let dk = prompt('Сколько?','')
let answer

if (dk > 18) {
    answer = 'Неизвестно'
} else if (dk > 13) {
    answer = 'Трудяга'
} else {
    answer = 'Начинающий'
}

alert(answer)


let dk = prompt('Сколько?','')

let answer = (dk > 16) ? 'Уверенно' : 'Не уверенно';

alert(answer)


let men = prompt('Сколько ты зарабатываешь?', '')

let company = (men < 50000) ? 'Начинающий' : 
(men < 100000) ? 'Разнорабочий' :
(men < 200000) ? 'Специалист' :
(men < 500000) ? 'Эксперт' : 'Хозяин жизни';

alert(company)


let who = prompt('Сколько?','')

let sut 

if (who > 3) {
    sut = 'Настоящая'
} else {
    sut = 'Не настоящая'
}

alert(sut)



// // ТРЕНИНГ ЗАВЕРШЕН

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 
// Пример использования опратора ll (две вертикальные палки) (ИЛИ)
// Выдает первое истинное значение

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.' );
}

let speed = prompt('Какая скорость?', '')

let ex = (speed < 90 || speed > 180) ? 'Штраф' : 'Нет штрафа';

alert(ex)

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}

// x не вычислен потому что выражение считается слева и true уже подходящее значение и поэтому присваивание для x еще не успело выполнится
let x;

true || (x = 1);

alert(x); // undefined, потому что (x = 1) не вычисляется
// Оператор ИЛИ это аналог if и лучше использовать именно последний

// Оператор && (И)
// Работает только тогда когда оба аргумента true
// Выдает первое ложное значение

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// Оператор ! (НЕ)

alert( !true ); // false
alert( !0 ); // true

// !! аналог Boolean

// Задачка
// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

// НАЧАЛО ОЧЕНЬ СЛОЖНОГО ЗАДАНИЯ


let system = prompt('Кто там?','')
let admin

if (system == '') { //Забыл что = это присваивание, а правильный оператор это ==
alert('Отмена')
} else if (system == null) {
    alert('Отмена')
} 

else if (system == 'Админ') { //Только если Админ только тогда заложенный цикл начинает действовать
        admin = prompt('Пароль?', '')
    if (admin == 'Я главный') { //Вытащил этот кусок код в самый конец полагая что так как он не вызван он не будет исполняться
        alert('Здравствуйте!') //Но так как система косвенно все равно его анализировала она пыталась подобрать значение и в итоге просто возращала последнюю строчку
    } else if (admin == '') { //В итоге нужно было этот блок включить в ветвь отделив скобками от остальных ветвей
        alert('Отмена')
    } else if (admin == null) {
        alert('Отмена')
    } else {
        alert('Неверный пароль')
    }
} 

 else {
    alert('Я Вас не знаю') //Точно так же исполняется так как принадлежит к system и ограничена от admin скобками
} 

Замечания: 
Нужно было использовать такую конструкцию для сокращения объема кода (admin === '' || admin === null) 

// КОНЕЦ ОЧЕНЬ СЛОЖНОГО ЗАДАНИЯ


// Оператор нулевого слияния
result = a ?? b //это аналог для 
result = (a !== null && a !== undefined) ? a : b;

// Пример
let user;
// Если не user, то Аноним
alert(user ?? "Аноним"); // Аноним (user не существует)

// Различия между двумя операторами 
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0



// ЦИКЛЫ

let test = 1

while(test < 4) {
  alert(test)
  test++
}

let fr 

for(fr = 0; fr < 5; fr++) {
  alert(fr)
}


// Перевожу на человеческий
let sum = 0;

while (true) { //цикл выполняется когда значение true

  let value = +prompt("Введите число", ''); //+говорит чтобы все значения из формы были числовые

  if (!value) break; // (*) //если значение value = false, то остановка и передает управление на строку вне тела, то есть на alert

  sum += value; //присваиваем значение переменной valuse для sum

}
alert( 'Сумма: ' + sum ); // пишем текст который выведем и + для переменной, и так как первое значение строчное и есть +, то и sum будет строчным


for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 3 == 0) continue; //если при делении числа на 3 остается 0, тогда alert не отображается

  alert(i); // 1, затем 3, 5, 7, 9
}



for (let u = 1; u < 11; u++) {
  if (u % 2 == 1)continue //НЕ покажет все что подходит под условия
  alert(u)
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) { //ПОКАЖЕТ все что подходит под условия
    alert( i );
  }
}


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0

while(i < 3) {
  alert( `number ${i}!` );
  i++
}




// Задачка 
while (true) { //Цикл выполняется пока условие верно (true)

  let value = prompt("Введите число > 100", ''); //Так как prompt здесь то он будет вызываться с каждым новым циклом

  if (value > 100 || value == null) break; // (*) //Если значение > 100 или нажата Esc, то цикл завершается с объявлением "Спасибо"(Alert)
  else (value < 100)  ; // (*) // Иначе если выражение value < 100 верно, то цикл будет выполняться заново
  alert('Повторите') //Будет отображаться только в том случае если цикл не прерван (если < 100)
}
alert( 'Спасибо');//Обявлется только тогда когда цикл выполнен


let num;

do {
  num = prompt("Введите число больше 100?", 0); //Выполняется до тех пор пока условия true
} while (num <= 100 && num); //если num это 0 то в первом случае будет true, но во втором это будет false, true&&false==false и цикл прекратится 




// ПОД ВОПРОСОМ ПОКА ЧТО
let b = prompt('Напишите конечный предел для простых числе')
for (let i = 0; i < b; i++) {
  if (i % 2 == 0) continue;

  alert(i); 
}


for (let i = 0; i < 3; i++) { //Условия соответствуют значит начинает выполняться тело цикла

  for (let j = 0; j < 3; j++) { //выполняется это тело цикла до тех пор пока значение не будет == 3
    //когда значение стало равно 3 то происходит увеличение большого цикла на 1 ед и тело выполняется заново
    let input = prompt(`Значение на координатах (${i},${j})`, '');

    // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  }
}

alert('Готово!');



for (let i = 5; i < 7; i++) {

    for (let j = 2; j = true; j++) { 
    
    if (i % j == 0) {
      i = true} else  {alert(i)}
  }
}

alert('Готово!');


nextPrime:
for (let i = 2; i <= 10; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}


nextPrime: 
for (let i = 2; i <= 18; i++) {

  for (let j = 2; j < i; j++) { //ПОЧЕМУ ТУТ НЕЛЬЗЯ ПОСТАВИТЬ ЧИСЛО ВМЕСТО i ???
    if (i % j == 0) continue nextPrime;
  }
  
  alert(i)
}

alert('Готово!');


// Задание
let browser = prompt('Какой браузер?', '')

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

let browser = prompt('Какой браузер?', '')

if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (
  browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
   alert( 'We hope that this page looks ok!');
  }



const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break

  case 1:
    alert('Вы ввели число 1');
    break

  case 2:
  case 3:
    alert('Вы ввели число 2 или 3');
    break

  default:
    alert( 'Неизвестное значение' );
}




nextPrime: //Позволяет начать новую итерацию главного цикла при обнаружении первого подходящего значения
for (let i = 2; i <= 18; i++) {

  for (let j = 2; j < 18; j++) { //ПОЧЕМУ ТУТ НЕЛЬЗЯ ПОСТАВИТЬ ЧИСЛО ВМЕСТО i ???
    if (i % j == 0) continue nextPrime;
  }
  
  alert(i)
}

alert('Готово!');



let x = prompt('Сколько?', '')

switch(x) {
  case 'Много': 
  alert ('Пока')
  break

  case 'Незнаю' :
  alert ('Плохо')
  break
}

function showMessage() {
  alert( 'Всем привет!' );
}

showMessage()


// Функции

function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная

  alert( message );
}

showMessage(); // Привет, я JavaScript!

alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// Доступ к внешним переменным
let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася

// Изменение переменных после вызов функции 
let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией

// При объявлении переменной внутри функции она никак не вляет на внешнюю переменную
let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

function write(answer) {
  alert(answer)
}

write ('супер')


function write(answer, title) { //Создаем локальные переменные
  alert(answer+ ':' +title) // Определяем работу переменных и можем добавить неизменяемое значение например :
}

write ('супер',' класс')

function showMessage(from, text) {

  from = '*' + from + '*'; // немного украсим "from"

  alert( from + ': ' + text );
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert( from ); // Аня

// Так можно добавить параметр по умолчанию 
function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен

// Другой пример 
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

// Возврат значения 
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


function rt (a,b) {
  return a + b
}

let read = rt ('Леша', ' привет')
alert (read)

//Чтобы было легче можно заменить в воображении переменную age на любое число
function checkAge(age) { // 2. Здесь появляется либо конкретное значение либо переменная которая сравнивается с условием 
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  } //второй вариант прохода пот true
}

let age = prompt('Сколько вам лет?', 18); // 1. Сюда поступает значение

if ( checkAge(age) ) { // 3. Если true то выполняем
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}

function showPrimes(n) { //Заменяет значение n в этом выражении

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue; 

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
//НЕПОНЯТНО


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Возвращаем значение наименьшее
function checkNumber(a, b) {
  if (a > b) {
    return b
  } else {return a}
}

let result = checkNumber(12, 22);
alert( result ); 

// Второй вариант 
function min(a, b) {
  return a < b ? a : b;
}

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}



//Простое изначальное выражение
let y = 4
let r = 5
let sum
// 
sum = y + r
alert(sum)
// Эту часть кода мы можем вынести в функцию


let y = 4
let r = 5

function sum(y, r) { //даем название функции и прописываем локальные переменные котрые используются
  sum = y + r //что должно произойти в функции
  alert(sum)
}

sum (y,r) // вызываем в одну строку готовое выражение заключенное в функцию




function sum(y, r) {
  sum = y + r
  alert(sum)
}

sum (3,3) //Можно не объявлять переменные,а просто подставить значение





nextPrime: //Позволяет начать новую итерацию главного цикла при обнаружении первого подходящего значения
for (let i = 2; i <= 18; i++) {

  for (let j = 2; j < 18; j++) { //ПОЧЕМУ ТУТ НЕЛЬЗЯ ПОСТАВИТЬ ЧИСЛО ВМЕСТО i ???
    if (i % j == 0) continue nextPrime;
  }
  
  alert(i)
}

alert('Готово!');


let x = prompt('Ввдеите X', '')
let n = prompt('Ввдеите N', '')

function pow (x,n) {
  let sum = x * n
  alert(sum)
}

pow (x,n) 




function pow(x, n) { //x это то какое число должно получиться а n это сколько раз нжно умнножить
  let result = x; //Задаем значение для result идентичное x чтобы сам x в двльнейшем не измнялся 

  for (let i = 1; i < n; i++) { //ПРИ СООТВЕТСТВИИ ЭТИМ ЗНАЧЕНИЯ ТЕЛО будет выполняться //i это просто начало для условия, i < n это значит функция будет выполняться до тех пор пока она не дойдет до нужнной степени (устено -1 умножение так как мы его провели сами на строке ниже) 
    result = result * x;
  }

  return result; // ??? Возвращает результат то есть делает так что при вызове функции она будет выводить этот результат то есть если изначально значение функции 3 и 3 то после возврата это будет 27
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}
//Проблемы с решением последнего задания были в том числе из за плохих знаний математики


// ДОМАШКА

// // Задание на завтра

// 1. Пройти следующую тему

// // Задание по итогам Основ

// 1. Изучить все типы функций чтобы я их решал без вопросов
// 2. Разобраться с return
// 3. По итогам ОСНОВНОГО раздела досмотреть видео от Владлена
// 4. Найти сторонние задания по JS для лучшего усвоения основ
// 5. Типы данных

// // Черный ящик

// 1. Понять как работает задание которое не получилось решить (цикл в цикле)
// 2. Переписать с нуля похожую задачу 





function sayHi() {
  alert( "Привет" );
}

alert( sayHi() ); // выведет код функции


function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем //Скобки можно поставить и здесь

func(); // Привет    // (3) вызываем копию (работает)!  //И здесь
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)


let sayHi = function () {
  alert( "Привет" );
}

let func = sayHi;

func ()

*/
let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); // 3



let write = (a, b) => a + b

alert (write('Дима','Привет'))



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);

// КОНЕЦ ОСНОВ 

// Закрываем пробелы 

1. Полностью перепройти все функции (return и колбэки)
2. Выполнить 3 разных практических задания по функциям 
3. Повторить циклы на основе другого источника 
4. Понять что не так было в том задании с циклами
5. Повторить преобразования типов данных



function welcomeUser() {
  alert('Здарова, новичок, йоу!')
}

welcomeUser()

function numberUser() {
  let y = 5
  let x = 4 
  alert(y + x)
  welcomeUser() //Вносим другую функцию в условие
}

numberUser() //Вызываются сразу 2 функции


// Фунции можно объявлять внутри функции но не стоит так делать
function test1() {
  
  function test2() {
    alert('test2')
  }

  test2() 
  alert('test1')
}

test1()



function unixTime() {
  let time = Math.floor(new Date().getTime());
  alert(time);
}

unixTime()

function unixTime() {//Можно таким образом переопределяться значение функции
  alert('12:05');
}

unixTime()

let int = 46

function welcomeUser(int) { //Пишем в значении то что у нас используется в коде функции (в теле)
  alert(int + ' Здарова, чертов новичок, йоу!') //Прописываем способ взаимодействия значения с выражением
}

welcomeUser(45) //Можем просто подставить значение которое подставиться тупо по порядку значений
welcomeUser(int) //А можем int вывести в переменную и задавать для нее уже другой параметр


let int = 46
let str = ' Jonny'

function welcomeUser(int, str) { 
  alert(int + str + ' Здарова,  новичок, йоу!') 
}

welcomeUser(int,str) 


let int = 46
let y = 44
let str = ' Jonny'

function welcomeUser(int, str) { 
  alert(int + str + ' Здарова,  новичок, йоу!') 
}

welcomeUser(int,str) 


function summ(int, y) {
  alert(int + y)
}

summ(int, y)


// Аналогично прошлому просто мы поменяли местами порядок вывода функций и вложили одну функцию в другую, так что можно вызывать сразу несколько функций вызвав только одну
let int = 46
let y = 44
let str = ' Jonny'

function summ(int, y) {
  alert(int + y)
}

function welcomeUser(int, str) { 
  summ(int, y)
  alert(int + str + ' Здарова,  новичок, йоу!') 
}

welcomeUser(int,str) 


// Счетчик

function count() {
  let c = 9
  for(c = 9; c < 19;c++){
    alert(c)
  }
}
count()


//При внутренней переменной значение будет статично так как тело выполняется каждый раз заново и с каждым новым вызов изначальное значение будет c = 9
function count() {
  let c = 9
  c++
  alert(c)
}

count()
count()

//При внешней переменной она будет каждый раз изменяться и ее значение будет сохраняться так как происходит наращивание
let c = 9

function count() {

  c++
  alert(c)
}

count()
count()




// Callback

let One = prompt('Перая цифра','')
let Two = prompt('Вторая цифра','') //Была ошибка из за типа данных и получалось что 1+2='12' и '12' при > это 12 > 3

function callBack(One,Two,more,less) {
  
  let summa = One + Two

  if(summa > 3) {
    more() //Здесь мы просто как бы переадресуем значение more  на функцию которое указывается как аргумент при вызове
  } else {
    less() // Это и есть callback
  }
}

function getMore(){ //Соответствует more и связаны с ним 
  alert('Ты не прав это больше 3')
}

function getLess(){
  alert('Ты прав это меньше 3')
}

callBack(One,Two,getMore,getLess) //указываем функции соответствующие more и less (просто по очереди)

// Закрываем пробелы 

1. Полностью перепройти все функции (return и колбэки)
2. Выполнить 3 разных практических задания по функциям 
* Еще раз перечитать весь материал по функциям на js learn и убедиться что для меня все понятно
3. Повторить циклы на основе другого источника 
4. Понять что не так было в том задании с циклами
5. Повторить преобразования типов данных




let int

let user = prompt('Как тебя зовут?','')
let time = prompt('Сколько минут ждешь?','') 

  if(time > 30) {
    int = 2
  } else {
    int = 3
  }

function userName(int) {
  alert(`Рады тебя видеть, ${user}, Вы номер ${int}`);
}

let access = confirm('Вы действительно хотите войти?','')

if(access == true) {
  userName(int)
} else {
  alert('Заходи в следующий раз')
}


// Параметры по умолчанию 
function norm (x = 1, y = 1) {
  alert(x + y)
}
norm (3) // = 4











                                // Как работает RETURN                        #####








function r1(n = 10, t = 15) {
  alert(n + t)
}

r1() //выводит 25

function r2(u = 16, i = 2) {
  alert(u - i)
}

r2() //выводит 14

alert(r1() - r2()) //Происходит все криво


// function r1(n = 10, t = 15) {
//   alert(n + t)
//   return 25 //добавляем return и теперь можем работать уже с результатом вычисления функции
// }


// function r2(u = 16, i = 2) {
//   alert(u - i)
//   return 14
// }


// alert(r1() - r2()) //Происходит все четко но сначала показываются значения функций по порядку и только потом результат

function r1(n = 10, t = 15) {
  let q = n + t
  return q //добавляем return и теперь можем работать уже с результатом вычисления функции
}


function r2(u = 16, i = 2) { // результат возвращается функции 
  let w = u - i // ... результат возвращаем отсюда
  return w //даем задание вернуть результат
}


function r3 () {
  let v = r1() - r2() //результат сохраняется в переменной внутри функции так что нельзя с ней взаимодействовать вне тела функции и можно получить доступ к ретерну через само объявление функции
  return v
}

alert (r3())


// СОвершенствуем 

function r1(n = 10, t = 15) {
//Убрали строчку кода
  return  n + t //добавляем return и теперь можем работать уже с результатом вычисления функции
}


function r2(u = 16, i = 2) { // результат возвращается функции 

  return u - i //даем задание вернуть результат
}


function r3 () {
  let v = r1(11,11) - r2(6,2) //можем задать абсолютно любые значение так как главное это способ расчета который заложен в самой функции
  return v
}

let variable = alert (r3())

alert (variable) //Идентично ?верхнему и по сути одна переменная означает 11 + 11 = 22; 6 - 2 = 4; 22 - 4 = 18;






                                              ***     СУТЬ return


Без return мы можем обратиться к функции по типу showFunc() и получим вывод значения после исчисления функции если есть alert или console.log внутри функции

С return мы получаем уже результат выражения в функции и можем использовать его уже как обычное значение или переменную

return останавливает выполнение функции

Функция когда отработала и вывела резульатт выражения, она без return НИЧЕГО НЕ ВЕРНУЛА обратно в функцию как результат работы


//Маленькое дз с возвратом большего числа
function t1(x,y) {
  if(x > y) {
    return x
  } else {
    return y
  }
}

alert(t1(643,-1318))





3. Сделать самостоятельные тестовые
4. Еще раз перечитать весь материал по функциям на js learn и убедиться что для меня все понятно
4. Понять что не так было в том задании с функциями (//Просто n в этой функции меняется на i в том месте где была n?)
5. Повторить преобразования типов данных
6. Верстка
7. Раскидать заметки в телефоне




// function callB(question, f1,f2) {
//   if(question) {
//     trip()
//   } else {
//     trip2()
//   }
// }

// callB('', trip, trip2)

// function trip () {
//   alert('Норм')
// }

// function trip2 () {
//   alert('Нет значения')
// }


//  Стрелочная функция


// const callB = (question, f1,f2) => {
//   if(question) {
//     trip()
//   } else {
//     trip2()
//   }
// }

// const trip = () => alert('Норм')

// const trip2 = () => alert('Нет значения')

// callB('1', trip, trip2)



// function mathFunc (a, b, c, e, d)  {
//   let num = a + b * c - (e * d)
//   return num
// }

// alert(mathFunc (12, 5, 7, 2, 8) - mathFunc (12, 5, 7, 2, 4))


function mathFunc (a, b, c, e, d)  {
  let num = a + b * c - (e * d)
  return num
}

let get = mathFunc (2, 3, 4, 5, 6)
let get2 = mathFunc (6, 3, 4, 5, 6)

alert(get  - get2)







1. Купить курс 
2. Посмотреть другие источники 
3. Верстать 



//НАЧАЛО ПЕТРИЧЕНКО

// ОБЪЕКТЫ И МАССИВЫ

let arr = ['string','link','pink'];

alert(arr[1]);

const obj = {
  'Kate': 900,
  'John': 1900
};

obj.Max = 2000 //Создаем дополнительный ключ уже после создания объекта
alert(obj.Max) 


alert(obj.Kate); //Можно использовать точку
alert(obj['John']); //Но если ключом должна быть цифра, то используем квадратные скобки и скобки


// // ТЕОРИЯ
// МАССИВЫ ЭТО ТЕЖЕ ОБЪЕКТЫ ПРОСТО У НИХ КЛЮЧ ЭТО НОМЕР ПО ПОРЯДКУ


// Тренинг по теме "Объекты и массивы"

const storeName = 'BubleStore';

let storeDescrition = {
    budget: 10000,
    employees: ['John','Kate','Max'],
    products: {
        cucumber: 45,
        tomato: 30
    },
    open: true
}


const answer = [] //создаем переменную которая создает массив

answer[0] = prompt('Валера, нормально?','') //массив с ключем 0 = значению prompt и аргумент который вводится в поле ввода сохраняется в общем массиве под номером ключа 0
answer[1] = prompt('Валера, сколько надо?','')
answer[2] = prompt('Валера, когда?','')

alert(answer) //Вызываем весь массив








// Переменная i в цикле for говорит только о том сколько этот цикл должен повторяться

for (let i = 1; i <= 5; i++) {
  console.log(i)
}

for (let i = 20; i >= 10; i--) {
  if(i == 12) break
  console.log(i)
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 > 0) continue
  console.log(i)
}

let massive = []

for (let i = 5; i <= 10; i++) {
  massive += i

}
console.log (massive)


1.Вникнуть в массивы
2.Актуализировать задачи в соответствии с заметками в телефоне


***   ВОПРОС БЕЗ ОТВЕТА 

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i; //Почему = i?
    }

    console.log(arrayOfNumbers); //каким образом создается массив из нескольких аргументов, если только один раз ызываем консоль после окончания цикла 
    return arrayOfNumbers;
}

let massive = [];

for (let i = 5; i <= 10; i++) {
  massive += i;

}
alert (massive);


function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i]; //результат i вносится в массив резалт и равен этому же значению в старом массиве
    }

    console.log(result);
    return result;
}

1.Попробовать решить задание на построение фигур

// 

// //Повторил решение без подсказок

// let res = ''

// for(let i = 0; i < 7; i++) {
//   for(let j = 0; j < i; j++) {
//     res += '*';
//   }
//   res += '\n';
// }

// console.log(res)

//Мое решение сложного задания (попытка)

let res = ''
let lines = 5

for(let i = 0; i < 7; i++) {
  for(let j = 0; j < i; j++) {
    for(let k = lines; k > 0; k--) { //тело цикла повторяется пока условия не будут выполнены то есть он добавляет звездочку 5 раз
      res += '0';
    }
    res += '*';
    lines--
  }
  res += '\n';
}

console.log(res)


// мне нужно чтобы был цикл с декрементом и обратный с инкрементом

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)

Пробежаться по решению на листочке


function sayHello(name) {
  alert ('Привет, ' + name + '!')
}
sayHello('Антон')


function returnNeighboringNumbers(arr) {
return [arr - 1, arr , arr + 1] //Можно возвращать сразу массив и несколько значений

}
alert(returnNeighboringNumbers(53))









//МЕТОДЫ
let x = 'test'
let y = 'tEsT'
let slice = 'Hello Trim Pimkin'

console.log (x.toUpperCase()) 
console.log (y.toLowerCase())
console.log (x.indexOf('s')) //Поиск по строке
console.log (slice.slice(6, 15)) //Вырезание кусочков
console.log (slice.slice(6)) //А так вырезаем просто до конца
console.log (slice.substr(6,5)) //Второе значение говорит сколько символом нужно вырезать


let test = '12.2px '
let num = 12.2 

console.log(Math.round(num)) //Оркугление до целого
console.log(parseInt(num)) //Можем строку преобразовать в число


//МОЕ РЕШЕНИЕ ПРОДВИНУТОЙ ЗАДАЧИ ПО ФУНКЦИЯМ

let a = +prompt('Введите длину ребра куба','')
let result = 1 //сделали 1 так как без нее при умножении получается умножение 5 * true, что в итоге == NaN

function cube () {
  let x = a * a
  return 6 * x 
}

function volume () {
  for(let i = 1; i <= 3; i++) {
     result *= a
  } 
  return result
  // return a * a * a //НО можно и так в одну строчку если формула всегда одинкова
}


if(isNaN(cube() || volume()) || a < 1 || !Number.isInteger(a))  { //если функция №1 или №2 ЯЛВЯЕТСЯ NaN, то ошибка или если значение меньше 1 то тоже ошибка или если НЕ ЯВЛЯЕТСЯ ЦЕЛЫМ сичлом то тоже ошибка
  alert('При вычислении произошла')
} else {
  alert(`Объем куба: ${volume ()}, площадь всей поверхности:  ${cube ()}`)
}

console.log(typeof a)

//ФИШКА В ТОМ ЧТО ЕСЛИ МЫ В ПРОМТ СТАВИТ + ТО ВСЕГДА ПРИХОДЯТ ТОЛЬКО ЧИСЛА И ВНИЗУ БУДУТ ТОЖЕ ТОЛЬКО ЧИСЛА
//А ЕСЛИ МЫ СТАВИМ БЕЗ + ТО ВСЕ ЗНАЧЕНИЯ НИЖЕ БУДУТ СТРОКОЙ
//NaN тоже число



//МЕТОД trim()
// Убирает пробелмы например:

let str = prompt('Как дела?','').trim()

alert(str)








// ОБЪЕКТЫ **************************************






const options = {
  name: 'test',
  width: 1024,
  colors: {
      border: 'black',
      bg: 'red'
  }
};

// console.log(options['width'])

// delete options.width //Метод для удаления ключ-значения

// console.log(options)



// Ипользуем перебор объектов*****************************

// for (let key in options) {
//   console.log(`Свойство ${key} и его значение ${options[key]}` )
// }




// Перебор для объектов с вложенными объектами ************************************


// for (let key in options) {   //Начинаем перебор ключей которым присвоили переменную key в главном объекте
//   if (typeof (options[key]) === 'object') { //Если при переборе мы замечаем тип данных в ключе главного объекта как "объект"...
//     for (let i in options[key]) { //...то в таком случае мы начинаем для такого ключа перебор уже его ключей для которых задаем переменную i внутри ключей главного объекта
//       console.log(`Внутреннее свойство ${i} и его значение ${options[key][i]}` ); //И выводим ключи i со значением которое получаем из "главный объект" -> ключ главного объекта -> ключ ключа главного объекта
//     }
//   } else {
//     console.log(`Свойство ${key} и его значение ${options[key]}`); // А в случае если тип данных не является объектом, тогда выводим сразу 
//   }
// }
// // Выводится все по порядку включая вложенные объекты так как перебирается по порядку



// СОЗДАЕМ СЧЕТЧИК ДЛЯ ПОДСЧЕТА ЭЛЕМЕНТОВ КЛЮЧ-ЗНАЧЕНИЕ В ОБЪЕКТЕ

let counter = 0

for (let key in options) {   
  if (typeof (options[key]) === 'object') { 
    for (let i in options[key]) {  
      console.log(`Внутреннее свойство ${i} и его значение ${options[key][i]}` );
      counter++; //При выполнении этого условия начисляется +1 к счетчику
    }
  } else {
    console.log(`Свойство ${key} и его значение ${options[key]}`); 
    counter++; //Здесь это нужно так как считается и вложенный и самый верхний уровень объекта 
  }
}

console.log (counter);




// Более грамотный счетчик элементов в объекте


const options = {
  name: 'test',
  width: 1024,
  colors: {
      border: 'black',
      bg: 'red'
  }
};

console.log(Object.keys(options).length)  //С помощью Object.keys мы получили все ключи объекта и поместили их в массив, и с помощью lenght получили количетсво ключей в массиве



//Мы можем создавать собственные методы


const options = {
  name: 'test',
  width: 1024,
  colors: {
      border: 'black',
      bg: 'red'
  },
  makeTest: function() {
    console.log('Работает!');
  }
};

options.makeTest();


//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА 

const {border, bg} = options.colors; //Создаем отдельные "коробочки" которые забираем из объекта внутри объекта

console.log(border);






//Тренинг на закрепление 



const obg = {
  cash: {
    info: 'Anna N.',
    in: 21250,
    out: 15000
  },
  benefits: 6250,
  backmoney: {
    lastyear: 3000,
    currentyear: 2000
  }

}

console.log(obg.cash)


for(let key in obg) {
  if(typeof (obg[key]) === 'object') {
    for( let i in obg[key]) {
      console.log(`Свойство ${[i]} и его значение ${obg[key][i]}` );
    }
  } else { console.log(`Свойство ${key} и его значение ${obg[key]}` );
}

}

console.log(Object.keys(obg.cash).length)




МАССИВЫ И ПСЕВДОМАССИВЫ ********************************


// const arr = [2, 3, 4, 5, 6]

// arr.pop()  //Этот метод удаляет последний элемент массива
// arr.push(11) //Добавляет последний элемент к массиву

// for(let i = 0; i < arr.length; i++) {  //Перебор массива
//   console.log(arr[i])
// }


// for(let value of arr) {  //Более удобный метод перебора массива
//   console.log(value)
// }

// arr.forEach(function(index, num, arr) { //Самый продвинутый способ перебора массивов
//   console.log(`Это индекс номер: ${index}, со значением ${num}, внутри массива ${arr}`);
// });



//Метод split формирует массив на основании полученных строк 


// let str = prompt('','');
// let ar = str.split(', '); //Нкжно задать как строки должны друг от друга отделяться чтобы собрать их в массив  
// ar.sort(); //Сортирует массив по порядку (как строки)
// console.log(ar.join('; ')); //А так можно готовый массив преобразовать обратно в строку

const arr = [22, 3, 14, 5, 6] //ИЗначально как строчный метод отсортирует этот массив как 14.22 и тд так как ориентируется на первую цифру
arr.sort(compareNum)
console.log(arr)

function compareNum (a,b) { //Метод сортировки для числовых значений (просто так работает и нужно запомнить)
  return a - b
}



// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ *******************************

// ПО ЗНАЧЕНИЮ (ДЛЯ ПРИМИТИВОВ)

let y = 5
let c

c = y //Говорим о том, что c идентична y

c = c + c //Получаем значения от y, которые сразу подставляются в выражение, то есть по факту это с = 5 + 5 == 10

console.log(c) //Здесь будем 10 
console.log(y) //Здесь будет 5



// ПО ССЫЛКЕ (ДЛЯ ОБЪЕКТОВ)

let yep = {
  options: 'first',
  menu: 'two'
}

let cvi;

cvi = yep; 

cvi.options = 10; 

console.log(cvi); //Здесь будет 10
console.log(yep); //Но и здесь будет 10, так как переменные связаны ссылкой, так как является объектом


// КЛОНИРОВАНИЕ ОБЪЕКТА ЧЕРЕЗ ФУНКЦИЮ


function copy(mainObj) {
  let copyObj = {} //Создаем тело нашего нового объекта куда будем клонировать старый

  let key //Переменная для ключей объекта
  for(key in mainObj) { //Начинаем перебе=ирать каждый элемент старого объекта
    copyObj[key] = mainObj[key] //Обращаемся к ключам нового объекта и говорим что при переборе кажды из этих ключ-значений == этим же элементам из старого объекта
  }
  return copyObj //Возвращаем результат       // ???????????? КАК ИМЕННО ЗДЕСЬ РАБОТАЕТ RETURN

}


let obj = { //Старый объект из которого делаем копирование
  first: 1,
  two: 2,
  third: 3,
  four: {
    f: 10,
    t: 11
  }
}

let newObject = copy(obj) //Говорим что переменная идентична новому перебранному объкту

newObject.two = 22 //Меняем значение ключа нового собранного объекта

console.log(newObject) //Значение как и должно меняется в новом объекта
console.log(obj) //Но в старом остается старое





//СЛИЯНИЕ ДВУХ ОБЪЕКТОВ(ДОБАВЛЕНИЕ ОДНОГО В ДРУГОЙ) 


let obj = { 
  first: 1,
  two: 2,
  third: 3,
  four: {
    f: 10,
    t: 11
  }
}

let add = {
  car: 21,
  cicle: 32
}

// console.log(Object.assign(obj, add)) //Метод добавления assign

console.log(Object.assign({}, add)) //А ТАК МЫ СОЗДАЕМ КЛОН ОБЪЕКТА


let clone = Object.assign({}, add)
clone.car = 50

console.log(add) //Здесь как и было остается 21
console.log(clone) //Здесь 50




//КЛОНИРОВАНИЕ МАССИВОВ **************************************


let arr = [1, 2, 3]
let newArr = arr.slice() //Вырезаем весь массив и говорим что новая переменная будет идентична вырезанному массиву
newArr[1] = 'Джонни'

console.log(newArr)
console.log(arr)



//Оператор spread - Разворачвает(открывает) элементы и показывает внутренности


const ferrari = ['enzo', 'daytona', 'f12'],
      bmw = ['m5e60', 'm3e30', 'f10'],
      cars = [...ferrari, ...bmw, 'sedan', 'suv']; //Вскрываем первые два массива и передаем их в cars

console.log(cars)


//Пример использование опреатора при работе с сервером 

function log(a, b, c) {
  console.log(a),
  console.log(b),
  console.log(c)
}

let num = ['video','bg','png'] //Массив который если передать в функцию будет являться не 3-мя элементами, а только одним

log(...num) //Массив сразу разворачивается на 3 элемента



//ЕЩЕ БОЛЕЕ ПРОСТОЙ СПОСОБ СОЗДАНИЯ КОПИИ ОБЪЕКТА ИЛИ МАССИВА

let arr = [1, 2, 3]
let newArr = [...arr] //Так мы получаем не ссылку,а конкретные значения которые мы развернули 

newArr[2] = 5;

console.log(arr)
console.log(newArr)



//СПОСОБ РАЗВОРАЧИВАНИЯ МАССИВОВ
let add = {
  car: 21,
  cicle: 32
}

let q = {...add}

console.log(add)



//Задача на практику 

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

// По условиям, нужно сделать именно ВОЗВРАТ функции


// МОЕ РЕШЕНИЕ *

// function showExperience(personalPlanPeter) { //Помещаем аргумент
//   let ans = personalPlanPeter.skills.exp; //Присваиваем переменной ключ-значение объекта
//   console.log(ans); //Вызываем перменную в консоле
//   return ans; //Возвращаем значение
// }

// showExperience(personalPlanPeter)




//Подход с деструктуризацией объекта и аргументами функции

function showExperience(plan) { //Используем переменную функции
  const {exp} = plan.skills //Создаем отдельную переменную для вложенного объекта
  console.log(exp);
  return exp; 
}

showExperience(personalPlanPeter) //Подставляем свою функцию вместо переменной функции



// МОЕ РЕШЕНИЕ *

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%',
      },
      exp: '1 month'
  }
};

function showProgrammingLangs(plan) { 
  const {programmingLangs} = plan.skills; //Делаем деструктуризацию для вложенного объекта
  for(let key in programmingLangs) { //Делаем пребор для конкретно этого вложенного объекта
    console.log(`Язык ${key}, изучен на ${programmingLangs[key]} \n`) //Распределяем его ключ и значение в предложении
  }
}

showProgrammingLangs(personalPlanPeter)


//Решение с явным возвратом пустой строки

function showProgrammingLangs(plan) {
  let str = ''; //Создаем хранилище для
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`//К строке добавляем наше выражение и возвращаем строку
  }

  return str;
}



// МОЕ РЕШЕНИЕ *

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%',
//       },
//       exp: '1 month'
//   },
//   showAgeAndLangs: function(plan) {
//     let str = '';
//     const {languages} = plan.skills;
//     const {age} = plan;
//     str += `Мне ${age} и я владею языками: ${languages}`;
//     console.log(str);
//     return str;
//   }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// Решение которое должно быть *

showAgeAndLangs: function(plan) {
  const {age} = plan;
  const {languages} = plan.skills;
  let str = `Мне ${age} и я владею языками: `;

  languages.forEach(function(lang) {  //Исползуем для внутреннего массива метод перебора и говорим что хотим перебрать только индексы и создаем для них только переменную lang
      str += `${lang.toUpperCase()} `;  //К прошлой строке прибавляем индексы по порядку которые трансформируются в уппер
  });

  return str; //Возвращаем полную строку
}



// МОЕ РЕШЕНИЕ *

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';   //Формируем строку 
    let g = [...family];  //Расбираем массив и присваиваем его значения переменной
    arr = str + g;  //Объединяем строку и значения массва

      if(arr != '') {   // Если строчный массив не равен пустой строке, тогда ...
        console.log(`Семья состоит из: ${arr}`);
      } else {  // А если пустая строка, то ...
        console.log('Семья пуста');
      }
    
    return arr;
}

showFamily(family);



// СОВЕРШЕНСТВУЕМ ЗАДАЧУ *

let family = prompt('Напиши','');   //Получаем данные для массива через форму
let ar = family.split(', ');  //На основе полученных данных формируется массив

function showFamily(arr) {
    let str = '';
    let g = [...ar];
    arr = str + g;

      if(arr != '') {
        console.log(`Семья состоит из: ${arr}`);
      } else {
        console.log('Семья пуста');
      }
    
    return arr;
}

showFamily(family);



//САМЫЙ ПРОСТОЙ МОЙ МЕТОД РЕШЕНИЯ КОТОРЫЙ ПЕРВЫМ ПРИШЕЛ НА УМ

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  let ttt = [...arr]
  let str = ''
  sum = ttt + str;
  console.log (sum.toLowerCase())
}

//Тут получилось в строчку

standardizeStrings(favoriteCities)


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(function(index) {

    console.log (index.toLowerCase())
  });
}


standardizeStrings(favoriteCities)

//А тут по порядку


// arr.forEach(function(index, num, arr) { //Самый продвинутый способ перебора массивов
//   console.log(`Это индекс номер: ${index}, со значением ${num}, внутри массива ${arr}`);
// });





*/


Потренироваться делать такой forEach 

И разобраться в этом методе
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }
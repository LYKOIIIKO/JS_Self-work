//Самостоятельная работа №1 по JS массивы, функции, объекты

console.log('---------------Задание 1----------------');
//1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.

function getCity(city) {
	if (!city) {
		city = prompt('Введите название города...');
		arrCity.push(city);
	} else {
		arrCity = city.split(',');
	}
}

let arrCity = [];
// getCity('Минск,Брест,Гродно,Витебск,Могилев,Гомель');
// getCity();
// getCity();
console.log(arrCity.sort());

console.log('---------------Задание 2----------------');
//2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.

// let arr2 = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

// for(let i = 0; arr2[0][i] != undefined || arr2[1][i] != undefined; i++) {
// 	console.log(`${arr2[0][i]} из ${arr2[1][i]}`);
// }

// let distanceArr = [0, 351, 276, 197];

// let distanceBetweenStr = prompt('Вы можете узнать расстояние между людьми! Введите два имени через запятую (прим.:Иван,Максим).'),
// 	distanceBetweenArr = distanceBetweenStr.split(','),
// 	distanceBetweenName1 = arr2[0].indexOf(distanceBetweenArr[0]),
// 	distanceBetweenName2 = arr2[0].indexOf(distanceBetweenArr[1]),
// 	distanceBetweenPeople = distanceArr[distanceBetweenName1] + distanceArr[distanceBetweenName2];

// console.log(`Расстояние между ${arr2[0][distanceBetweenName1]} и ${arr2[0][distanceBetweenName2]} равняется ${distanceBetweenPeople}км (если ехать через Минск)`);

console.log('---------------Задание 3----------------');
//3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).

function daysBetweenDates(date1, date2) {
	let dateStart = new Date(date1),
		dateEnd = new Date(date2),
		dateBetweenMS = dateStart - dateEnd, //разница в миллисекундах
		dateBetweenDays = dateBetweenMS / (1000 * 3600 * 24),//разница в днях
		dateBetweenDaysReturn = Math.abs(Math.round(dateBetweenDays));

	if(dateBetweenDaysReturn < 3) {
		return console.log(`Разница между датами ${date1} и ${date2} составляет ${dateBetweenDaysReturn} дня(ей). Дата уже близко.`);
	} else if(dateBetweenDaysReturn >= 3 && dateBetweenDaysReturn < 7){
		return console.log(`Разница между датами ${date1} и ${date2} составляет ${dateBetweenDaysReturn} дня(ей). Еще есть время.`);
	} else if(dateBetweenDaysReturn >= 7){
		return console.log(`Разница между датами ${date1} и ${date2} составляет ${dateBetweenDaysReturn} дня(ей). Далековато еще.`);
	}
	
}

daysBetweenDates('2024.12.01', '2024.11.29');

console.log('---------------Задание 4----------------');
//4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).

function celsiusToFahrenheit(celsius) {
	let fahrenheit = (9 / 5) * celsius + 32;

	if(celsius > 5 && celsius <= 10) {
		return console.log(`Температура за бортом ${celsius}\u2103 / ${fahrenheit}\u2109. Сегодня прохладнее, чем обычно.`);
	} else if (celsius > 0 && celsius <= 5) {
		return console.log(`Температура за бортом ${celsius}\u2103 / ${fahrenheit}\u2109. Одевайтесь теплее.`);
	} else if (celsius > -5 && celsius <= 0) {
		return console.log(`Температура за бортом ${celsius}\u2103 / ${fahrenheit}\u2109. Сегодня очень холодно.`);
	} else if (celsius <= -5) {
		return console.log(`Температура за бортом ${celsius}\u2103 / ${fahrenheit}\u2109. Оставайтесь дома.`);
	}
	
}
celsiusToFahrenheit(10);
celsiusToFahrenheit(4);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-6);

console.log('---------------Задание 5----------------');
//5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.

function randomElement(arr5) {
	let arrRandom = Math.floor(Math.random() * arr5.length); 
	
	return arr5[arrRandom];
}

let arr5 = ['Петя', 15, "Абракадабра", 1998, "Полтергейст", "Назад в будущее", "Хроники Риддика", "Вася Пупкин", 22333, ["вложенный массив",2,3,4]];

console.log(randomElement(arr5));

console.log('---------------Задание 6----------------');
//6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.

console.log('---------------Задание 7----------------');
//7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.

console.log('---------------Задание 8----------------');
//8. Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.

console.log('---------------Задание 9----------------');
//9. [18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#". 

//Пример текста: 

//"В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."

//Нецензурные слова: "нахрен", "черт", "бляха".

//Предусмотрите возможность расширения проверяемых слов в тексте.

console.log('---------------Задание 10----------------');
//10. Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций: включение, выключение, вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), покормить, спать. При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!

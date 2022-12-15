//Объекты
var obj = {
    name: 'Ася',
    lastName: 'Сухаревская',
    old: 17
};
console.log(obj.lastName);
console.log(obj['name']);//2й способ записи

//перезапись объекта
obj.name = 'Саша';
console.log(obj.name);



// Массивы (пререлик з нуля)
var array = ['Сергей', 'Ваня', 'Андрей'];
console.log(array[2]);


// перезапись элемента массива
array[2] = 'Рома';
console.log(array[2]);

// обратка
var array = ['Сергей', 'Ваня', 'Андрей'];
console.log(array.length)

// добавление
array.push('Костя')
console.log(array[3]);

// перебор элементов в массиве
for (var i = 0; i < array.length; i++) {
    console.log(i);
}

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// массив из объектов ( с let const)

var array = [
    {
        name: 'Лиза',
        lastName: 'Петрова'
    },
    {
        name: 'Даша',
        lastName: 'Иванова'
    },
    {
        name: 'Андрей',
        lastName: 'Мелюков'
    }

];
for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    console.log(name);
}
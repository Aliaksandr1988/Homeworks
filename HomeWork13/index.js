let lastname = prompt('Введите вашу Фамилию')

let firstname = prompt('Введите ваше Имя')

let middlename = prompt('Введите ваше Отчество')

let years = prompt('Сколько вам полных лет')

let sex = confirm('Ваш пол - мужской?')

if(sex){
    sex = 'мужской'
}else{
    sex = 'женский'
}

if (years<60){
    pension = 'нет'
} else{
    pension = 'да'
}


let finish = confirm(
    `   
        Проверьте введенную информацию: \n
        Ваше ФИО: ${lastname}  ${firstname}  ${middlename}
        Ваш возраст в годах:  ${Number(years)}
        Ваш возраст в днях:  ${Number(years)*365}
        Через 5 лет вам будет:  ${Number(years)+5}
        Ваш пол: ${sex}
        Вы на пенсии:  ${pension} 
    `)
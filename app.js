const nums = [1,21,34,234,235,221,124,23,5,10,23,30]


for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }


}


const cinema = {
    fastfurios:{
        genre:"боевик",
        datePremier:"18 октября 2001",
        time:"1hours : 32min",
        mainChapters:{
            Torretto:"Вин Дизель",
            Hops:"Дуэйн Джонсон",
            Brain:"Пол Уокер",

        },
        price:210,
        measurement:"3d",
    },
    AquaMan:{
        genre:"боевик",
        datePremier:"21 декабря 2023",
        time:"2hours : 10min",
        mainChapters:{
            Aquaman:"Джейсон Момоа",
            Batman:"Бен Аффлек",
            Mera:"Эмбер Хёрд",
        },
        price:210,
        measurement:"3d",
    }


}
console.log(cinema);


const num = prompt("change num 1 to 15")

switch (Number(num)) {
    case 1:
        alert("I")
        break;
    case 2:
        alert("II")
        break;
    case 3:
        alert("II")
        break;
    case 4:
        alert("IV")
        break;
    case 5:
        alert("V")
        break;
    case 6:
        alert("VI")
        break;
    case 7:
        alert("VI")
        break;
    case 8:
        alert("VI")
        break;
    case 9:
        alert("IX")
        break;
    case 10:
        alert("X")
        break;
    case 11:
        alert("XI")
        break;
    case 12:
        alert("XII")
        break;
    case 13:
        alert("XIII")
        break;
    case 14:
        alert("XIV")
        break;
    case 15:
        alert("XV")
        break;
    default:
        alert("choose corect number")
}

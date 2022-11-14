
// %2
// function buttonClick() {
// 	var input = document.getElementById('input2');
// 	input.value = '!!!';
// }

// %3
// function buttonClick() {
// 	var input = document.getElementById('input3');
// 	alert(input.value);
// }

// %4
// function buttonClick() {
// 	var input = document.getElementById('input4').value;
// 	var number = Number(input);
// 	var square = number*number;
// 	alert(square);
// }

// %5
// function buttonClick() {
// 	var input1 = document.getElementById('input5');
// 	var input2 = document.getElementById('input5__2');
// 	var input1Value = input1.value;
// 	var input2Value = input2.value;
// 	input1.value = input2Value;
// 	input2.value = input1Value;
// }

// %6
// function buttonClick(elem) {
// 	elem.value = 'Новый текст кнопки';
// }

// %7
// function buttonClick() {
// 	document.getElementById('input').style.color = 'red';
// }

// %8 
// //Заблокирует элемент
// function button1Click() {
// 	var input = document.getElementById('input');
// 	input.disabled = true;
// }

// //Отблокирует элемент
// function button2Click() {
// 	var input = document.getElementById('input');
// 	input.disabled = false;
// }


// События через атрибуты

// 1

document.querySelector('.btn__1').onclick = function() {
    alert('Привет!')
}

// 3
document.querySelector('.btn__3').ondblclick = function() {
    alert('Привет!')
}

// 5
document.querySelector('.btn__5').onclick = function() {
    var input4 = document.querySelector('.input5')
    var input4value = input4.value
    alert(input4value)
}

// 6
document.querySelector('.btn__6').onclick = function() {
    document.querySelector('.input6').value = 'Ой, я поменял свой текст!'
}

// 7
document.querySelector('.btn__7').onclick = function() {
    document.querySelector('.img__7__1').style.display = 'none'
    document.querySelector('.img__7__2').style.display = 'block'
}

// 8
document.querySelector('.input8').onfocus = function() {
    alert(this.value)
}

// 9
document.querySelector('.input9').onclick = function() {
    this.value = 'Ой, я поменял текст!'
}

// 10
document.querySelector('.input10').onfocus = function() {
    this.value = 'Ой, я поменял текст!'
}

document.querySelector('.input10').onblur = function() {
    this.value = 'Ой, а теперь еще раз поменял!'
}

// 11
document.querySelector('.input11').onclick = function() {
    this.value = 'Ку-ку'
}

// 12 
document.querySelector('.input12').onclick = function() {
    this.value = 'О, а теперь на меня больше не лльзя нажать!'
    this.disabled = true;
}

// 13
document.querySelector('.monkey__block').onmouseover = function() {
    document.querySelector('.img__7__1__13').style.display = 'none'
    document.querySelector('.img__7__2__13').style.display = 'block'
}

document.querySelector('.monkey__block').onmouseout = function() {
    document.querySelector('.img__7__1__13').style.display = 'block'
    document.querySelector('.img__7__2__13').style.display = 'none'
}

// 14
document.querySelector('.btn__14').onclick = function() {
    document.querySelector('.input14').style.color = 'red'
    document.querySelector('.input14').style.width = '400px'
}

// 15 
document.querySelector('.btn__15__1').onclick = function() {
    document.querySelector('.input15').style.display = 'none'
}

document.querySelector('.btn__15__2').onclick = function() {
    document.querySelector('.input15').style.display = 'initial'
}

// 16
document.querySelector('.btn__16').onclick = function() {
    document.querySelector('.input16').value = 'Ой я поменял свой текст в css!'
    document.querySelector('.input16').style.padding = '20px 20px 20px 0px'
    document.querySelector('.input16').style.color = 'red'
    document.querySelector('.input16').style.borderRadius = '10px'
}

// 17
document.querySelector('.input17').onclick = function() {
    document.querySelector('.input17').value = 'О теперь на меня больше не нажпть!'
    document.querySelector('.input17').disabled = true;
    document.querySelector('.btn__17').style.display = 'initial'
};

document.querySelector('.btn__17').onclick = function() {
    document.querySelector('.input17').disabled = false;
    document.querySelector('.input17').value = 'О на меня можно снвоа нажать!'
    document.querySelector('.btn__17').style.display = 'none'
}

// 18
let iValue = 0; 
document.querySelector('.input18').onclick = function() {
    iValue += 1
    this.value = iValue
}

// 19
document.querySelector('.btn__19').onclick = function() {
    document.querySelector('.i19').style.display = 'flex'
    document.querySelector('.i19').style.flexDirection = 'row-reverse'
    document.querySelector('.i19').style.justifyContent = 'space-between'
    document.querySelector('.input19').value = 'Теперь я плаваю справа!'
}

// 20 
document.querySelector('.btn__20').onclick = function() {
    document.querySelector('.input20').value = 'Мои css классы: eee www ddd'
}

// 21
document.querySelector('.btn__21').onclick = function() {
    let input1 = document.querySelector('.input21__1').value
    let input2 = document.querySelector('.input21__2').value
    document.querySelector('.input21__1').value = input2
    document.querySelector('.input21__2').value = input1
    input1, input2 = input2 ,input1
}

// 22 
document.querySelector('.btn__22').onclick = function() {
    let inputvalue =  document.querySelector('.input22__1').value
    document.querySelector('.input22__2').value = inputvalue*inputvalue
}

// 23 
document.querySelector('.btn__23').onclick = function() {
    let inputvalue =  document.querySelector('.input23__1').value
    inputvalue = inputvalue**2
    console.log(inputvalue)
    if (isNaN(inputvalue)) {
        alert('Введино не число!')
    }
    else {
        document.querySelector('.input23__2').value = inputvalue
    }
}

// 24
document.querySelector('.input24').onclick = function() {
    this.style.cursor = "not-allowed"
    this.disabled = true
}

const inputmain25 = document.querySelector('.input25__main')

// 25 
document.querySelector('.input25__1__1').onclick = function() {
    inputmain25.value = inputmain25.value+'+'
}  
document.querySelector('.input25__1__2').onclick = function() {
    inputmain25.value = inputmain25.value+'-'
}   
document.querySelector('.input25__1__3').onclick = function() {
    inputmain25.value = inputmain25.value+'/'
}   
document.querySelector('.input25__1__4').onclick = function() {
    inputmain25.value = inputmain25.value+'*'
}  

var Arr25 = [
    '.input25__1',
    '.input25__2',
    '.input25__3',
    '.input25__4',
    '.input25__5',
    '.input25__6',
    '.input25__7',
    '.input25__8',
    '.input25__0',
    '.input25__9',
]
let num;
for (num in Arr25) {
    document.querySelector(Arr25[num]).onclick = function() {
        let sfj = document.querySelector('.input25__main').value
        let er = this.value
        document.querySelector('.input25__main').value = sfj+er
    }
}


// page 2 


// 1
document.querySelector('.btn__2__1').onclick = function() {
    document.querySelector('.text__2__1').innerHTML = '!!!'
}

// 2

document.querySelector('.btn__2__2').onclick = function() {
    var elem = document.querySelector('.text__2__2')
    elem.outerHTML = '<b>' + elem.innerHTML + '</b>' 
}

// 3
document.querySelector('.btn__2__3').onclick = function() {
    var elems = document.querySelector('.i2__3').getElementsByTagName('p');
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
    }
}

// 4

document.querySelector('.btn__2__4').onclick = function() {
    var elems = document.querySelector('.i2__4').getElementsByClassName('zzz');
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
    }
}

// Свойства innerHTML, outerHTML

// 1
document.querySelector('.btn__2__5').onclick = function() {
    const elem = document.querySelector('.text__2__5')
    elem.innerHTML = 'Ку-ку! А я <b> жирный</b>!'
}

// 2
document.querySelector('.btn__2__6').onclick = function() {
    const elem = document.querySelector('.text__2__6')
    elem.innerHTML = '<b> Абзац превратился в h3! </b>'
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>'
}

// 3 
document.querySelector('.btn__2__7').onclick = function() {
    const elem = document.querySelector('.text__2__7')
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>'
}

// 4
document.querySelector('.btn__2__8').onclick = function() {
    const elem = document.querySelector('.input__2__8__main')
    elem.innerHTML = Number(document.querySelector('.input__2__8__1').value) + Number(document.querySelector('.input__2__8__2').value)
}

// 5
document.querySelector('.btn__2__9').onclick = function() {
    const elem = document.querySelector('.i2__9')
    const elems = elem.getElementsByTagName('p')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = 'Ку-ку!';
    }
}

// 6 
document.querySelector('.btn__2__10').onclick = function() {
    const elem = document.querySelector('.i2__10')
    const elems = elem.getElementsByClassName('www')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
    }
}

// 7 
document.querySelector('.btn__2__11').onclick = function() {
    const elem = document.querySelector('.i2__11')
    const elems = elem.querySelectorAll('.www')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
    }
}

// 9
document.querySelector('.btn__2__12').onclick = function() {
    alert(document.querySelector('.my-class__1').getAttribute('class'))
}

// 10
document.querySelector('.btn__2__13__1').onclick = function() {
    alert(document.getElementById('text__2__13').getAttribute('class'))
}

document.querySelector('.btn__2__13__2').onclick = function() {
    alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
    document.getElementById('text__2__13').setAttribute('class', 'new-class')
    console.log(document.getElementById('text__2__13').getAttribute('class'))
}

// 11
document.querySelector('.input__2__15').onkeyup = function() {
    document.querySelector('.text__2__15').innerHTML = this.value
}

// 12 
document.querySelector('.btn__2__16').onclick = function() {
    var elem = document.querySelector('.i2__16')
    var elems = elem.getElementsByTagName('a')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML =  elems[i].innerHTML + ' (' + elems[i].getAttribute('href') + ')'
}};

// 13 
document.querySelector('.input__2__17').onclick = function() {
    document.querySelector('.text__2__17').style.color = 'red'
    document.querySelector('.text__2__17').innerHTML = 'Привет, мир!'
    this.value = 'О, на меня нельзя больше нажать!'
    this.disabled = true
}

// 14
document.querySelector('.btn__2__18').onclick = function() {
    var elem = document.querySelector('.i2__18')
    var elems = elem.getElementsByTagName('p')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i
}};

// 15
document.querySelector('.btn__2__19').onclick = function() {
    var elem = document.querySelector('.i2__19')
    var elems = elem.getElementsByTagName('p')
    for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML =  i + '. ' + elems[i].innerHTML
}};


// page 3

// 1
document.querySelector('.btn__3__1').onclick = function() {
    var date = new Date();
    alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
}

// 2
document.querySelector('.btn__3__2').onclick = function() {
    var months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    
    var date = new Date();
    var month = date.getMonth();
    alert(months[month]);
}

// 3
document.querySelector('.btn__3__3').onclick = function() {
    var days = [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
    ];
    
    var date = new Date();
    var day = date.getDay();
    alert(days[day]);
}

// Задачи для решения

// 1
function GetDay(t = new Date()) {
    let day =  addLeadingZero(t.getDate())
    return day
}
document.querySelector('.text__3__4').innerHTML = GetDay()

// 2
function getMonth(t = new Date()) {
    let month =  addLeadingZero(t.getMonth())
    return month
}
document.querySelector('.text__3__5').innerHTML = getMonth()

// 3
function getY(t = new Date()) {
    let month =  addLeadingZero(t.getFullYear())
    return month
}
document.querySelector('.text__3__6').innerHTML = getY()

// 4
function TimeData(t = new Date()) {
    let Y = addLeadingZero(t.getFullYear())
    let mon = addLeadingZero(t.getMonth())
    let date = addLeadingZero(t.getDate())

    let hour = addLeadingZero(t.getHours())
    let min = addLeadingZero(t.getMinutes())
    let sec = addLeadingZero(t.getSeconds())

    return `${hour}:${min}:${sec} ${date}.${mon}.${Y}`
}

document.querySelector('.text__3__7').innerHTML = '<h2><b>' + TimeData() + '</b></h2>'

// 5
let fgl = new Date()
let gff = fgl.getDay()

document.querySelector('.text__3__8').innerHTML = gff

// 6
var DayOfWeek = [
    'вс','вт', 'ср', 'чт', 'пт', 'сб', 'вс',
]
document.querySelector('.text__3__9').innerHTML = DayOfWeek[gff]

// 7
var date = new Date(2015, 0, 7); //месяц 0, так как их нумерация с нуля

function showDay(day = date.getDay()) {
	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[day];
}
document.querySelector('.text__3__10').innerHTML = showDay()

// 11
let khgfo = new Date()
document.querySelector('.text__3__11').innerHTML = (24 - khgfo.getHours()) * 60**2

// 12
document.querySelector('.input__3__12').onblur = function() {
    let gf = this.value
    gf = gf.split('-')
    const faas = new Date()
    function GetData(t = Date.parse(faas.getFullYear()+'-'+gf.slice(1))) {
        var result = t - faas
        result = Math.round(result / (1000 * 60**2 * 24))
        if (result < 0) {
            result = 365 + result
        }
        document.querySelector('.text__3__12').innerHTML = result + ' - осталось до его дня рождения.'
    }
    GetData()
}

// Page 4 

// 1
document.querySelector('.btn__4__1').onclick = function() {
    setInterval(counts, 1000)
    let i = Number(document.querySelector('.text__4__1').innerHTML);
    function counts() {
        i += 1;
        document.querySelector('.text__4__1').innerHTML = i;
    }
};

// 2
document.querySelector('.btn__4__2__1').onclick = function() {
    this.setAttribute('disabled', 'true')
    document.querySelector('.btn__4__2__2').removeAttribute('disabled')
    let si1 = window.setInterval(counts, 500)
    let i = Number(document.querySelector('.text__4__2').innerHTML);
    function counts() {
        i += 1;
        document.querySelector('.text__4__2').innerHTML = i;
        document.querySelector('.btn__4__2__2').onclick = function() {
            this.setAttribute('disabled', 'true')
            document.querySelector('.btn__4__2__1').removeAttribute('disabled')
            window.clearInterval(si1)
        };
    };
};

// 3 
function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}

function NowTime(t = new Date()) {
    let hours = addLeadingZero(t.getHours())
    let min = addLeadingZero(t.getMinutes())
    let sec = addLeadingZero(t.getSeconds())
    var l = [hours, min, sec]
    return l
};

setInterval(interval4 = function() {
    document.querySelector('.text__4__3').innerHTML = `${NowTime()[0]}:${NowTime()[1]}:${NowTime()[2]}`
}, 500)

// 4
document.querySelector('.input__4__4').onclick = function() {
    this.disabled = 'true'
    let i = Number(document.querySelector('.text__4__4__1').innerHTML)
    setInterval(counts, 300)
    function counts() {
        if (i == 0) {
            document.querySelector('.text__4__4__2').style.display = 'initial'
            return;
        }
        i -= 1;
        document.querySelector('.text__4__4__1').innerHTML = i;
}};

// 5
setInterval(Slider, 1000)
let i = 1;
function Slider() {
    if (i > 2) {
        i = 0
    }
    i += 1
    document.querySelector('.img__4__5').setAttribute('src', './assets/img/' + i + '.png')
};

// 6
document.querySelector('.input__4__6').onclick = function() {
    setInterval(fmkg, 450)
    this.disabled = 'true'
    function fmkg() {
        var d = document.querySelector(".img__4__6");
        var d_nested = d.firstChild;
        d.removeChild(d.firstChild);
        d.appendChild(d_nested)
    }
};

// 7
document.querySelector('.input__4__7__1').onclick = function() {
    let si1 = window.setInterval(fmkg, 450)
    this.disabled = 'true'
    document.querySelector('.input__4__7__2').removeAttribute('disabled')
    function fmkg() {
        var d = document.querySelector(".img__4__7");
        var d_nested = d.firstChild;
        d.removeChild(d.firstChild);
        d.appendChild(d_nested)
        document.querySelector('.input__4__7__2').onclick = function() {
            this.disabled = 'true'
            document.querySelector('.input__4__7__1').removeAttribute('disabled')
            window.clearInterval(si1)
        };
    }
};

// 8
setInterval(kgfo, 500)
function kgfo() {
    var fdjg = document.querySelector('.table__items').getElementsByTagName('td')
    for (var f = 0; f < fdjg.length; f++) {
        fdjg[f].innerHTML =  NowTime()[f]
    };
};
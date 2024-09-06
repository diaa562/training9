// function change(){
// alert('diaa');


// }
// document.getElementById('demo').innerHTML = '<mark>welcome</mark>'
// var x = document.body.firstElementChild.style.color  = 'blue'
// var dark = document.getElementById('dark') 
// var light = document.getElementById('light') 
//  function darkfun(){
// document.body.style.backgroundColor = 'black'
// document.body.style.color = 'white'

//  }
//  function lightfun(){
// document.body.style.backgroundColor = 'white'
// document.body.style.color = 'black'

// }
// var darky = document.querySelector('#dark')
// var lighty = document.querySelector('#light')

// darky.addEventListener('click' , function(){
// document.body.style.backgroundColor = 'black'
// document.body.style.color = 'white'
// document.body.dir = 'rtl';
// document.getElementById('demo').innerHTML = 'مرحبا بكم'


// })
// lighty.addEventListener('click' , function(){
// document.body.style.backgroundColor = 'white'
// document.body.style.color = 'black'
// document.body.dir = 'ltr';
// document.getElementById('demo').innerHTML = 'hello'


// })
// ___________________________________
// document.getElementsByTagName('div')[0].style.color = 'red';
// var darky = document.getElementsByTagName('button')[0]
// var lighty = document.getElementsByTagName('button')[1]


// darky.addEventListener('click',function(){
// document.body.style.backgroundColor = 'black'
// document.body.style.color = 'white'
// document.body.dir = 'rtl'
// document.querySelector('.demo').innerHTML = 'مرحبا بكم'

// })
// lighty.addEventListener('click',function(){
// document.body.style.backgroundColor = 'white'
// document.body.style.color = 'black'
// document.body.dir = 'ltr'
// document.querySelector('.demo').innerHTML = 'hello'

// })

// btn1.addEventListener('click',function(){
//     localStorage.setItem('color' , 'black')
// })
// lighty.addEventListener('click',function(){
//     localStorage.setItem('color' , 'white')
// })

// var color = localStorage.getItem('color')
// document.body.style.backgroundColor = color
// document.write(color)
// darky.addEventListener('click' , function(){
// document.body.style.backgroundColor = 'black'
// document.body.style.color = 'white'
// document.body.dir = 'rtl'
// document.querySelector('.demo').innerHTML = 'مرحبا بكم'

// })
// lighty.addEventListener('click' , function(){
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//     document.body.dir = 'ltr'
//     document.querySelector('.demo').innerHTML = 'hello'

// })
// var h1 = document.createElement('h1')
// var mark = document.createElement('mark')
// var text = document.createTextNode('hello world!')
// var body = document.body;
// mark.appendChild(text)
// h1.appendChild(mark)
// body.appendChild(h1)
// document.write(body)
var btn1 = document.getElementsByTagName('button')[0];
var btn2 = document.getElementsByTagName('button')[1];
var btn3 = document.getElementsByTagName('button')[2];
var btn4 = document.getElementsByTagName('button')[3];
var btn5 = document.getElementsByTagName('button')[4];
// btn1.addEventListener('click',function(){
// localStorage.setItem('color' , 'red')
// })
// btn2.addEventListener('click',function(){
// localStorage.setItem('color' , 'green')
// })
// btn3.addEventListener('click',function(){
// localStorage.setItem('color' , 'blue')
// })
// var color = localStorage.getItem('color')
// document.body.style.backgroundColor = color;
// document.write(color)
btn1.addEventListener('click' , function(){
document.body.style.backgroundColor = 'red'

})
btn2.addEventListener('click' , function(){
document.body.style.backgroundColor = 'green'

})
btn3.addEventListener('click' , function(){
document.body.style.backgroundColor = 'blue'

})
btn4.addEventListener('click' , function(){
document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

})
btn5.addEventListener('click' , function(){
document.body.style.backgroundColor = 'white'
document.body.style.color = 'black'

})
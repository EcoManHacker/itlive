let increse = document.querySelector('.increse')
let decrese = document.querySelector('.decrese')
let count = document.querySelector('#counter')

let fImg = document.querySelector('.fImg')
let sImg = document.querySelector('.sImg')
let tImg = document.querySelector('.tImg')
let frImg = document.querySelector('.frImg')

let Imgs = document.querySelectorAll('.rasmlar img')

let qiymat = 0;

decrese.addEventListener('click', function(){
    qiymat -= 1;
    count.innerHTML =  qiymat

    if(qiymat < 0 ){
        count.innerHTML = 0;
    }
})

increse.addEventListener('click', function(){
    qiymat += 1;
    count.innerHTML =  qiymat;
})

fImg.addEventListener('click', function(){
    Imgs[0].classList.add('active')
    Imgs[1].classList.add('hidden')
    Imgs[2].classList.add('hidden')
    Imgs[3].classList.add('hidden')
    Imgs[1].classList.remove('active')
    Imgs[2].classList.remove('active')
    Imgs[3].classList.remove('active')
})

sImg.addEventListener('click', function(){
    Imgs[1].classList.add('active')
    Imgs[0].classList.add('hidden')
    Imgs[2].classList.add('hidden')
    Imgs[3].classList.add('hidden')
    Imgs[0].classList.remove('active')
    Imgs[2].classList.remove('active')
    Imgs[3].classList.remove('active')
})

tImg.addEventListener('click', function(){
    Imgs[4].classList.add('active')
    Imgs[1].classList.add('hidden')
    Imgs[1].classList.remove('active')
})

frImg.addEventListener('click', function(){
    Imgs[4].classList.add('active')
    Imgs[1].classList.add('hidden')
    Imgs[1].classList.remove('active')
})






console.log(Imgs);




























fImg.addEventListenar('click', function(){
    Imgs[0].classList.add('active')
    Imgs[1].classList.remove('active')
   // Imgs[2].classList.remove('active')
  //  Imgs[3].classList.remove('active')
    Imgs[1].classList.add('hidden')
    // Imgs[2].classList.add('hidden')
    // Imgs[3].classList.add('hidden')
})
sImg.addEventListenar('click', function(){
    Imgs[1].classList.add('active')
    //Imgs[2].classList.remove('active')
   // Imgs[3].classList.remove('active')
  //  Imgs[4].classList.remove('active')
  //  Imgs[2].classList.add('hidden')
   // Imgs[3].classList.add('hidden')
    Imgs[0].classList.add('hidden')
    Imgs[0].classList.remove('hidden')
})

// tImg.addEventListenar('click', function(){
//     Imgs[2].classList.add('active')
//     Imgs[0].classList.remove('active')
//     Imgs[1].classList.remove('active')
//     Imgs[3].classList.remove('active')
//     Imgs[0].classList.add('hidden')
//     Imgs[1].classList.add('hidden')
//     Imgs[3].classList.add('hidden')
// })

// frImg.addEventListenar('click', function(){
//     Imgs[3].classList.add('active')
//     Imgs[0].classList.remove('active')
//     Imgs[1].classList.remove('active')
//     Imgs[2].classList.remove('active')
//     Imgs[0].classList.add('hidden')
//     Imgs[1].classList.add('hidden')
//     Imgs[2].classList.add('hidden')
// })\


console.log(Imgs);
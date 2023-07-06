const slider=document.querySelector('.slider');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const indicatorparents =document.querySelector('.controls ul');
var index=0;



document.querySelectorAll('.controls li').forEach(function(indicator,ind)
{
    indicator.addEventListener('click',function(){
        index=ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform= 'translate('+(ind)*-25+'%)';
    });
});

prev.addEventListener('click',function()
{ 
    index=(index > 0 )? index -1 : 0 ;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorparents.children[index].classList.add('selected');
    slider.style.transform = ' translate('+(index)*-25+'%)';
});


next.addEventListener('click',function()
{ 
    index=(index < 3 ) ? index + 1 : 3 ;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorparents.children[index].classList.add('selected');
    slider.style.transform = ' translate('+(index)*-25+'%)';
});





























// const slides = document.querySelectorAll(".slide")
// var counter=0;
// slides.forEach(
//     (slide,index) =>{
//         slide.style.left = `${index * 100}%`
//     }
// )

// const white=() =>{

// }
// const black=() =>{

// }



// const goOne=()=>{
//     counter=0
//     slideimg()

// }
// const goTwo=()=>{
//     counter=1
//     slideimg()
    
// }
// const goThree=()=>{
//     counter=2
//     slideimg()
// }
// const goFour=()=>{
//     counter=3
//     slideimg()
// }

// const goPrev=()=>{
//     counter--
//     slideimg()
// }
// const goNext=()=>{
//     counter++
//     slideimg()
// }

// const slideimg =() => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform =`translateX(-${counter * 100}%)`
//         }
//     )
// }
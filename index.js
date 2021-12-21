window.addEventListener('DOMContentLoaded',function(){

    
const navToggle = document.querySelector('.nav-toggle');

const navBox = document.querySelector('.nav-box');

navToggle.addEventListener('click', function(){
    navBox.classList.toggle('nav-center');
})



const btnEl  = document.querySelector('.btn');
const showEdu = document.querySelector('.show-edu');
const closeSch = document.querySelector('.close-school');

    btnEl.addEventListener('click',function(){
        showEdu.classList.add('display-edu');
    });
    
    closeSch.addEventListener('click',function(){
        showEdu.classList.remove('display-edu');
    });

const btnElem  = document.querySelector('.btn1');
const showColg = document.querySelector('.show-colg');
const closeColg = document.querySelector('.close-colg');

    btnElem.addEventListener('click',function(){
        showColg.classList.add('display-colg');
    });
    
    closeColg.addEventListener('click',function(){
        showColg.classList.remove('display-colg');
    });


    const openJob = document.querySelector('.open-job');
    const jobsEl  = document.querySelector('.jobs');
    const closeJob = document.querySelector('.close-job');

openJob.addEventListener('click',function(){

    jobsEl.classList.add('show-jobs');
});

closeJob.addEventListener('click', function(){

    jobsEl.classList.remove('show-jobs');
});

displaySkills();
loadImages();

});

const titleEl = document.querySelector('.title');

const displayItem = 'Curriculum Vitae';

let index=0;

    function displayTitle(){
            
            titleEl.innerText = displayItem.slice(0,index);

            index++;

           
            if(index > displayItem.length){
                index = 0;
            }
            
        }

    setInterval(displayTitle,500);

//     function takeMenu(){

//         const show = document.querySelectorAll('.shows');

// show.forEach(function(links){
//     links.addEventListener('click',function(e){
//         e.preventDefault();
//         const elementEl = e.currentTarget.getAttribute('href').slice(1);
//         console.log(elementEl);
//         const selection = document.getElementById(elementEl);
//         let valueEl = selection.getBoundingClientRect();
//         console.log(valueEl);

//         window.scrollTo({
//        left=0,
//        top= valueEl,
//         });

//     });
// });
//     }

const myskills = [
    {category:'one',value:'Proficient'},{category:'two',value:'Intermediate-Advanced'},{category:'three',value:'Beginner-Intermediate'}];

    function displaySkills(){

        
        const buttonSkill = document.querySelectorAll('.btn-skill');
        
        // const displaySko   = document.querySelector('.id2');
        // const displaySkt   = document.querySelector('.id3');

        buttonSkill.forEach((btn)=>{

            btn.addEventListener('click',function(e){
             
                const choice = e.currentTarget.dataset.id;

                const highlight = myskills.filter((item)=>{
                    if( choice === item.category){
                        return item;
                    }
                });
               
                selectionChoice(highlight);
                // for( let i in myskills)
                // displaySk[i].innerText = myskills[i];
            });

        });

    }

    function selectionChoice(item){
        const displaySk   = document.querySelector('.publish-skill');
        let myValue = item.map((display)=>{
         return `${display.value}`;
        });
        
        console.log(myValue);
        displaySk.innerText = myValue;
    }

    const images = ['image0','image1','image2','image3','image4','image5'];

    function loadImages(){
    const myintrest = document.querySelector('.intrest');
    const leftEl  = document.querySelector('.left');
    const rightEl = document.querySelector('.right');

    let count = 0;
    
    myintrest.style.backgroundImage = `url('image${count}.jpg')`;

        rightEl.addEventListener('click',function(){

            count +=1;
            
                if(count >= images.length-1){
                
                    count = 0;
                }
                
                myintrest.style.backgroundImage = `url('image${count}.jpg')`;

        });

        leftEl.addEventListener('click',function(){
            
            count -=1;

        
            if(count <= 0){
            
                count = 5;
            }
            myintrest.style.backgroundImage = `url('./interest/${images[count]}.jpg')`;

        })
    }
    

    

    

    
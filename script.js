const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';      
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else
    {
        n= imgs.length -1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length -1)
    {
        n++;
    }
    else
    {
        n= 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');

for(const item of scrollContainer)
{
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}



const dropdown = document.querySelector('.nav-search-catagory');


        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click',()=>{
            dropdown.classList.toggle('select-clicked');
            menu.classList.toggle('menu-open');
           

        });

        options.forEach(option =>{
                option.addEventListener('click',()=>{

                        options.forEach(option =>{
                            option.classList.remove('list-hover');
                    });


                    dropdown.classList.remove('select-clicked');
                    menu.classList.remove('menu-open');
                    selected.innerText = option.innerText;
                    option.classList.add('list-hover')

                 });   
        });


    



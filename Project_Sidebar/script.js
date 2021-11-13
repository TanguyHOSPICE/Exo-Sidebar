const togglebutton = document.getElementById('toggle-btn');
const sidebar= document.getElementById('side-bar');

togglebutton.addEventListener('click', show);

//ADD class Active on toggle btn
function show() {
    sidebar.classList.toggle('active');
}

//REMOVE sidebar if click on Main content
const content= document.querySelector('.content');
content.addEventListener('click',()=>{
    sidebar.classList.remove('active');
})
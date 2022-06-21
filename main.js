let navbar = document.querySelector('.navbar');



const sidebar  = document.getElementById("sidebar")
const toggle = document.getElementById('toggle')

document.onclick = function(e) {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle' ){
        toggle.classList.remove('active')
        sidebar.classList.remove('active')  
    }
       
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}


// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
// }

//     document.querySelector("a").onclick = () => {
        
//             navbar.classList.remove('active');
//     }



    // document.querySelector('.navbar a').onclick = () => {
    //     navbar.classList.remove('active');
    // }



        

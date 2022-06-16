import {loginNavbar} from '../components/loginNavbar.js'
let Navbar=document.getElementById('all-navbar')
Navbar.innerHTML=loginNavbar();


document.getElementById('btn-1').addEventListener('click',login)

function login(){
    let input=document.getElementById('input').value ;
    // console.log(input)
    if(input.length==10){
        console.log('login successfully!')
        alert('login successful!')
        window.location.href='index.html'
    }else{
        console.log('enter correct number')
        alert('enter correct number')
        location.reload()
    }
    
}
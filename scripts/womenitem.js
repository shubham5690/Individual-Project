import {loginNavbar} from '../components/loginNavbar.js'
let Navbar=document.getElementById('all-navbar')
// -------------footer-------------------------------

import { footer } from '../components/footer.js'

let Footer=document.getElementById('all-footer')
Footer.innerHTML=footer()


Navbar.innerHTML=loginNavbar();
    let womensData=JSON.parse(localStorage.getItem('womensdata'));
    let append=() =>{
        
        womensData.forEach(ele => {
            let container=document.getElementById('content');
        container.innerHTML=null;
            let div=document.createElement('div')

            let img=document.createElement('img')
            img.src=ele.img;
            let name=document.createElement('p')
            name.innerText=ele.brandName;
            let price=document.createElement('p')
            price.innerText=ele.price;
            let product=document.createElement('p')
            product.innerText=ele.items
            let tb=document.createElement('p')
            tb.innerText=ele.tribeMember

        container.append(img,name,price,product,tb)
        
            
        });
        
    }
    append()
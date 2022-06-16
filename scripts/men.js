console.log('men')

import {navbar} from '../components/navbar.js'
let Navbar=document.getElementById('all-navbar')
Navbar.innerHTML=navbar()
// -------------footer-------------------------------

import { footer } from '../components/footer.js'

let Footer=document.getElementById('all-footer')
Footer.innerHTML=footer()


fetch('./scripts/men.json').then(function(res){
    return res.json();
       
    }).then(function(data){
        
        console.log(data)
        append(data)

        
    })
    .catch(function(err){
        console.log(err);
    })

function append(data){
    let container= document.getElementById('men-content')
    data.forEach(ele => {
        let div=document.createElement('div')

        let img=document.createElement('img')
        img.src=ele.img;
        let name=document.createElement('p')
        name.innerText=ele.nameBrand;
        let price=document.createElement('p')
        price.innerText=ele.price;
        let product=document.createElement('p')
        product.innerText=ele.product
        let tb=document.createElement('p')
        tb.innerText=ele.tribeMember
        div.append(img,name,price,product,tb)
        container.append(div)
    });

}
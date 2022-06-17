import {navbar} from '../components/navbar.js'
let Navbar=document.getElementById('all-navbar')
Navbar.innerHTML=navbar()
// -------------footer-------------------------------

import { footer } from '../components/footer.js'

let Footer=document.getElementById('all-footer')
Footer.innerHTML=footer()



fetch('./scripts/women.json').then(function(res){
    return res.json();
       
    }).then(function(data){
        
        console.log(data)
        append(data)

        
    })
    .catch(function(err){
        console.log(err);
    })

function append(data){
    let container= document.getElementById('women-content')
    data.forEach(ele => {
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
        //--------------------------------------------------------
        div.addEventListener('click', function(){
            items(ele)
            // window.location.href="items.html"
        })
//---------------------------------------------------------
        div.append(img,name,price,product,tb)
        container.append(div)
    });

}
let womensData=JSON.parse(localStorage.getItem('womensdata')) || []
function items(ele){
    womensData.push(ele)
    // console.log(womensData)
    localStorage.setItem('womensdata',JSON.stringify(womensData))
    window.location.href="womenSelectData.html"

}
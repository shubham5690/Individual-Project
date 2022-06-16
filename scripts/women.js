import {navbar} from '../components/navbar.js'
let Navbar=document.getElementById('all-navbar')
Navbar.innerHTML=navbar()



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
        div.append(img,name,price,product,tb)
        container.append(div)
    });

}
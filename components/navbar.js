function navbar(){
    return `
    <div id="top-navbar">
            <div id="a">
                <p>Offers</p>
                <p>Fanbook</p>
                <p><i class="fa-solid fa-mobile-screen"></i>&nbsp; Download App</p>
                <p>TriBe Membership</p>
            </div>
            <div id="b">
                <p>Contact Us</p>
                <p>Track Order</p>
            </div>
        </div>
        
    
        <div id="navbar">
            <div id="left">
                <img src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg" alt="">
                <p><a href="men.html">MEN</a></p>
                <p><a href="women.html">WOMEN</a></p>
                <p>MOBILE COVERS<p>
            </div>
            <div id="right">
                <input type="text" id="search-bar" placeholder= " Search by product,category or collection">
                
                <hr>
                <p><a href="login.html">Login</a></p>
                <p><i class="fa-regular fa-heart"></i></p>
                <p><i class="fa-thin fa-bag-shopping"></i></p>
                
            </div>
            </div>
        <div id="hr"><hr></div>
        <div id="down-navbar">
            <div>
                <p><a href="men.html">MEN</a></p>
                <p><a href="women.html">WOMEN</a></p>
                <h6><a href="index.html">ACCESSORIES</a></h6>
            </div>               
        </div>

    
    `
}
export {navbar};
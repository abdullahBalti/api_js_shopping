// get api data with http request https://fakestoreapi.com/products
// on scroll fixed header
window.addEventListener('scroll', ()=>{
    let fixedClass = document.querySelector('header');
    fixedClass.classList.toggle("header-fixed", window.scrollY >= 150);
});


function GetApiData() {
    const request = new XMLHttpRequest();    
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            //==== filter category women clothing ===//
            const womenClothing = data.filter(function(cart){
                if(cart.category === 'women clothing'){
                    return true;
                };
            });
            let ctWm = '';
            womenClothing.forEach(cart =>{
                ctWm +=`
                <div class="cart">
                    <div class="cart-header">
                    <img src="${cart.image}" alt="">
                    </div>
                    <div class="cart-body">
                        <div class="pric-ct">
                            <h4>${cart.price} $</h4>
                            <h5>${cart.category}</h5>
                        </div>                                    
                        <h3 align="center">${cart.title.slice(0, 40)}</h3>
                        <p>${cart.description.slice(0, 100)}</p>
                    </div>
                    <div class="cart-footer">                    
                        <button class="add-cart">Add to Cart</button>
                    </div>
                </div>                
                `;
                document.querySelector('.category-wm').innerHTML = ctWm;
            });                        
            //=== filter category electronics ===//
            const electronics = data.filter(function(cart){
                if(cart.category === 'electronics'){
                    return true;
                };
            });
            let elec = '';
            electronics.forEach(cart =>{
                elec +=`
                <div class="cart">
                    <div class="cart-header">
                    <img src="${cart.image}" alt="">
                    </div>
                    <div class="cart-body">
                        <div class="pric-ct">
                            <h4>${cart.price} $</h4>
                            <h5>${cart.category}</h5>
                        </div>                                    
                        <h3 align="center">${cart.title.slice(0, 40)}</h3>
                        <p>${cart.description.slice(0, 100)}</p>
                    </div>
                    <div class="cart-footer">                    
                        <button class="add-cart">Add to Cart</button>
                    </div>
                </div>                
                `;
                document.querySelector('.category-electronics').innerHTML = elec;
            });                
            //== end of electronics category ==//
            //=== filter category men clothing ===//
            const menclothing = data.filter(function(cart){
                if(cart.category === 'men clothing'){
                    // console.log(cart.title);
                    return true;
                };
            });
            let mencloth = '';
            menclothing.forEach(cart =>{                
                mencloth +=`
                <div class="cart">
                    <div class="cart-header">
                    <img src="${cart.image}" alt="">
                    </div>
                    <div class="cart-body">
                        <div class="pric-ct">
                            <h4>${cart.price} $</h4>
                            <h5>${cart.category}</h5>
                        </div>                                    
                        <h3 align="center">${cart.title.slice(0, 40)}</h3>
                        <p>${cart.description.slice(0, 100)}</p>
                    </div>
                    <div class="cart-footer">                    
                        <button class="add-cart">Add to Cart</button>
                    </div>
                </div>                
                `;
                document.querySelector('.shopping-cart').innerHTML = mencloth;
            });                
            //== end of men clothing category ==//            
        } else {
            console.log('could not featch data');
        }
    });
    request.open('GET', 'https://fakestoreapi.com/products')
    request.send()
}
GetApiData();
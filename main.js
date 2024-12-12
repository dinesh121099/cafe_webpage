let cartItems=[];


function addtocart(productId, productName, productImage, rate) 
{
	const existingItem = cartItems.find(item => item.id === productId);
	
	if (existingItem) {
		existingItem.quantity += 1;
	} 
	else {
		const newItem = {
			id: productId,
			name: productName,
			image: productImage,
			quantity: 1,
			rate: rate,
			price: function() {return this.quantity * this.rate;}
		};
		cartItems.push(newItem);
	}
	renderCartItems();
}

function renderCartItems()
{
	const cartItemsContainer = document.getElementById('cart-items');
	cartItemsContainer.innerHTML = '';

	let totalPrice = 0;
	let cartHTML = '';
	for (let i = 0; i < cartItems.length; i++) 
	{
		const item = cartItems[i];
		const itemPrice = item.price();
		totalPrice += itemPrice;
		cartHTML += `<br>
						<div class="cart-item">
						<div class="cart-image">
						<img class="cart-image2" src="${item.image}" alt="${item.name}" width="80%">
						<p class="cart-item-name">${item.name}</p>
						</div>
						<div class="cart-desc">
						<p>Quantity: ${item.quantity}</p>
						<p>Rate: Rs.${item.rate}</p>
						<p>Price:<strong> Rs.${itemPrice}</strong></p>
						</div>
						</div><br>` ;
	}
	
	cartItemsContainer.innerHTML = cartHTML;

	document.getElementById('total-price').innerText = `Total Price: Rs.${totalPrice}`;
}





function toCart() 
{
	let cartCountElement = document.getElementById('cart-count');
	let currentCount = parseInt(cartCountElement.innerText);
	cartCountElement.innerText = currentCount + 1;
}

const cartButtons = document.querySelectorAll('.cartcount');

for (let i = 0; i < cartButtons.length; i++) 
{
    cartButtons[i].addEventListener('click', toCart);
}
(() => {
	const miniCart = document.querySelector('miniCart');
	async function getMiniCart() {
		try {
			const response = await fetch('?section_id=template-cart');
			if (response.status < 400) {
				const section = await response.json();
				miniCart.innerHTML = section;
			} else {
				alert('Error from server');
			}
		} catch (err) {
			alert(err.message);
		}
	}

	const btn = document.querySelector('#miniCartBtn');
	btn.addEventListener('click', getMiniCart);
})();

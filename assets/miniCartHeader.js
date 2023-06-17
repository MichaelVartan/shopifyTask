(() => {
	async function getMiniCart() {
		const miniCart = document.querySelector('miniCart');

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

	function onWindowLoad() {
		const btn = document.querySelector('#miniCartBtn');
		btn.addEventListener('click', getMiniCart);
	}
	window.onload = onWindowLoad;
})();

(() => {
	const cartButton = document.querySelector('#cartBtn');
	const closeCartButton = document.querySelector('#cartCloseBtn');

	function onOpenButtonClick() {
		document.body.style.overflow = 'hidden';
	}

	function onCloseButtonClick() {
		document.body.style.overflow = 'initial';
	}

	cartButton.onclick = onOpenButtonClick;
	closeCartButton.onclick = onCloseButtonClick;
})();

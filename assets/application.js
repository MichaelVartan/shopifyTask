(() => {
	function onOpenButtonClick() {
		document.body.style.overflow = 'hidden';
	}

	function onCloseButtonClick() {
		document.body.style.overflow = 'initial';
	}

	const cartButton = document.querySelector('#cartBtn');
	const closeCartButton = document.querySelector('#cartCloseBtn');

	cartButton.addEventListener('click', onOpenButtonClick);
	closeCartButton.addEventListener('click', onCloseButtonClick);
})();

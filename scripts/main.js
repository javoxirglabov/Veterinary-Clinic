function showMapPrompt(event) {
	event.preventDefault() // Havolani ochilishiga yo‘l qo‘ymaydi
	document.getElementById('mapPrompt').classList.remove('hidden')
}

function closeMapPrompt() {
	document.getElementById('mapPrompt').classList.add('hidden')
}

function openMap(type) {
	let googleUrl = `https://www.google.com/maps/place/Mariupol,+Donetsk+viloyati,+Ukraina,+87500/@47.1125637,37.530488,20.83z/data=!4m6!3m5!1s0x40e6e6a7bee7582b:0xa5d118300a75b5ce!8m2!3d47.097133!4d37.543367!16zL20vMDRmcHZz?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D`
	let yandexUrl = `https://yandex.uz/maps/10366/mariupol/house/vulytsia_ostrovskoho_28/Z04YcwRhSEQHQFptfX1wc3hhZw==/?display-text=%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0&ll=37.529738%2C47.111608&mode=search&sctx=ZAAAAAgBEAAaKAoSCTGVfsLZw0JAEcsO8Q9bjkdAEhIJuHNhpBe1mz8Rf2ySH%2FErhj8iBgABAgMEBSgKOABA%2FlBIAWoCdXqdAc3MzD2gAQCoAQC9Accwe6zCAQbelOOX1AGCAhsoKGNhdGVnb3J5X2lkOigxODQxMDcyMTYpKSmKAgkxODQxMDcyMTaSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.529738%2C47.111608&sspn=0.025956%2C0.010385&text=%7B%22text%22%3A%22%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107216%22%5D%7D%5D%7D&z=16.06`

	let url = type === 'google' ? googleUrl : yandexUrl
	window.open(url, 'blank')
	// window.location.href = url;
	closeMapPrompt() // Modalni yopish
}

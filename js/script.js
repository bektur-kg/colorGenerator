const alldiv = document.querySelectorAll('.a')
const $generatorBtn = document.querySelector('.generator')
$generatorBtn.addEventListener('click', e =>{
	e.preventDefault()
	function colorGenerator() {
		const hexSymbols = 'abcdef12345689'
		let HEX = '#'
		for (let i = 0; i < 6; i++) {
			const symbol = Math.floor(Math.random() * hexSymbols.length)
			HEX += hexSymbols[symbol]
		}
		return HEX
	}
	alldiv.forEach((item) =>{
		item.style.background = colorGenerator()
		item.innerText = colorGenerator()
	})
})



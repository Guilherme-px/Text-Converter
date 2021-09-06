//Refletir dados da entrada na saida
function reflect(str) {
	return str
}

let input = document.getElementById('textInput')
let output = document.getElementById('textOutput')

input.onkeyup = function () {
	output.value = reflect(input.value)
}

//Contador de caracteres
$(document).on("input", "#textInput", function() {
	let totalLetters = $(this).val().replace(/(\r\n|\n|\r)/g, " ").trim().length
	$(".word-count").text(totalLetters)
})

//Contador de palavras
$(document).on("input", "#textInput", function () {
	let totalword = $(this).val().replace(/(\r\n|\n|\r)/g, " ").trim().split(/\s+/g).length
	$(".txt-count").text(totalword)
})

//Função primeiras letras maiúsculas
function capitalizerFirst() {
	function capitalizer(str) {
		return str
			.toLowerCase()
			.replace(/(?:^|\s)\S/g, function (s) {
				return s.toUpperCase()
			})
	}

	function updateFirstLetter() {
		let text = $('#textInput').val();
		let newstring = capitalizer(text);
		$('#textOutput').val(newstring);
	}

	$('#textInput').keyup(updateFirstLetter);
	updateFirstLetter();
}

//Função todas letras maiúsculas
function allCapitalizer() {
	function capitalizerStr(str) {
		return str.toUpperCase()
	}

	function updateCap() {
		let text = $('#textInput').val();
		let newstring = capitalizerStr(text);
		$('#textOutput').val(newstring);
	}

	$('#textInput').keyup(updateCap);
	updateCap();
}

//Função todas as letras minúsculas
function lowerCase() {
	function lowerCaseStr(str) {
		return str.toLowerCase()
	}

	function updateLower() {
		let text = $('#textInput').val()
		let newstring = lowerCaseStr(text)
		$('#textOutput').val(newstring)
	}

	$('#textInput').keyup(updateLower)
	updateLower()
}

function hashtagsCreator() {
	function hashtagsReplace(str, char = "#") {
		return str
			.split(" ")
			.map(word => `${char}${word}`)
			.join(" ");
	}

	function updatehashtags() {
		let text = $('#textInput').val()
		let newstring = hashtagsReplace(text)
		$('#textOutput').val(newstring)
	}

	$('#textInput').keyup(updatehashtags)
	updatehashtags()
}

//Função para reverter caracteres
function reverseText() {
	function reverse(s) {
		let word = '';
		for (let i = s.length - 1; i >= 0; i--)
			word += s[i];
		return word;
	}

	function updateReverse() {
		let text = $('#textInput').val();
		let newstring = reverse(text);
		$('#textOutput').val(newstring);
	}

	$('#textInput').keyup(updateReverse);
	updateReverse();
}
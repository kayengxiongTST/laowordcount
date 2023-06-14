const alphabets = ['ກ', 'ຂ', 'ຄ', 'ງ', 'ຈ', 'ສ', 'ຊ', 'ຍ', 'ດ', 'ຕ', 'ຖ', 'ທ', 'ນ', 'ບ', 'ປ', 'ຜ', 'ຝ', 'ພ', 'ຟ', 'ມ', 'ຢ', 'ຣ', 'ລ', 'ວ', 'ຫ', 'ອ', 'ຮ', 'ຫງ', 'ຫຍ', 'ໜ', 'ຫນ', 'ຫມ', 'ໝ', 'ຫຼ', 'ຫລ', 'ຫວ', 'ຄວ', 'ກວ', 'ຂວ']

const endAlphabet = ['ກ', 'ງ', 'ຍ', 'ດ', 'ນ', 'ບ', 'ມ', 'ວ']

const endAlphaWithTopVowel = ['ງ', 'ຍ', 'ນ', 'ມ', 'ວ']

const topVowel = ['x່', 'x້', 'x໋', 'x໊']
const vowelMustHaveAlphabet = ['xະ', 'xາ', 'xິ', 'xີ', 'xຶ', 'xຸ', 'xູ', 'xຳ', 'xັ', 'xົ']
const singleVowel = ['xtະ', 'xtາ', 'xtິ', 'xີt', 'xtຶ', 'xຸt', 'xູt', 'xtໍ', 'ເxt', 'ແxt', 'ໂxt', 'ໃxt', 'ໄxt', 'xໍtາ', 'xຳt', 'xຶt', 'xືt']

const singleVowelWithEndingAlphabet = ['xtາd', 'xັtd', 'xົtd', 'xິtd', 'xີtd', 'ເxີtd', 'xຶtd', 'xືtd', 'xຸtd', 'xູtd', 'ເxtd', 'ໂxtd', 'xd', 'xtຽd', 'xtວd', 'xtອd', 'ແxtd', 'ແxtະ', 'xtະ', 'ໄxt', 'ໃxt', 'ເxິt', 'ເxີt', 'xີt', 'xິt', 'xtາ']

const doubleVowelEndingAlphabet = ['ເxິtd', 'ເxີtd', 'ເxັtd', 'xົtd', 'xັtd', 'ແxັtd', 'ແxtd', 'ເxtd', 'xັtອd', 'xtອd', 'ເxັtd', 'xັtວd', 'xtວd', 'xtາd', 'xtຽd', 'xິtd', 'xີtd', 'xັtd', 'ໂxd', 'ເxາະ', 'ເxົtາ', 'xຸtd', 'xູtd']
const tripleVowelEndingAlphabet = ['ເxຶtອd', 'ເxືtອd', 'ແxtd', 'ເxtd']

const tripleVowel = ['ເxົtາ', 'ເxtາະ', 'ເxັtຍ', 'ເxຶtອ', 'ເxືtອ', 'xົtວະ', 'ເxtະ', 'ແxtະ', 'ໂxtະ', 'ເxິt', 'ເxີt', 'xົtວ', 'ເxtຍ', 'xໍtາ', 'ເxີtd', 'ເxິtd']

const wordsWithSingleVowel: any = []
const wordsWithSingleVowelWithEndingAlphabet: any = []
const wordsWithDoubleVowelWithEndingAlphabet: any = []
const wordsWithTripleVowelWithEndingAlphabet: any = []
const wordsWithTripleVowel: any = []

alphabets.forEach(alpha => {
	singleVowel.forEach(vowel => {
		let word = null
		word = vowel.replaceAll('x', alpha).replaceAll('t', '')
		wordsWithSingleVowel.push(word)
	})
})

alphabets.forEach(alpha => {
	singleVowelWithEndingAlphabet.forEach(vowel => {
		endAlphabet.forEach(endAlpha => {
			let word = null
			word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', '')
			wordsWithSingleVowelWithEndingAlphabet.push(word)
		})
		endAlphaWithTopVowel.forEach(endAlpha => {
			topVowel.forEach(top => {
				const topValue = top.replace('x', '')
				let word = null
				word = vowel.replaceAll('t', topValue).replaceAll('d', endAlpha).replaceAll('x', alpha)
				wordsWithSingleVowelWithEndingAlphabet.push(word)
			})
		})
	})
})

alphabets.forEach(alpha => {
	doubleVowelEndingAlphabet.forEach(vowel => {
		endAlphabet.forEach(endAlpha => {
			let word = null
			word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', '')
			wordsWithDoubleVowelWithEndingAlphabet.push(word)
		})
		endAlphaWithTopVowel.forEach(endAlpha => {
			topVowel.forEach(top => {
				const topValue = top.replace('x', '')
				let word = null
				word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', topValue)
				wordsWithDoubleVowelWithEndingAlphabet.push(word)
			})
		})
	})
})

alphabets.forEach(alpha => {
	tripleVowelEndingAlphabet.forEach(vowel => {
		endAlphabet.forEach(endAlpha => {
			let word = null
			word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', '')
			wordsWithTripleVowelWithEndingAlphabet.push(word)
		})
		endAlphaWithTopVowel.forEach(endAlpha => {
			topVowel.forEach(top => {
				const topValue = top.replace('x', '')
				let word = null
				word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', topValue)
				wordsWithTripleVowelWithEndingAlphabet.push(word)
			})
		})
	})
})

alphabets.forEach(alpha => {
	tripleVowel.forEach(vowel => {
		let word = null
		word = vowel.replaceAll('x', alpha).replaceAll('t', '')
		wordsWithTripleVowel.push(word)

		endAlphaWithTopVowel.forEach(endAlpha => {
			topVowel.forEach(top => {
				const topValue = top.replace('x', '')
				let word = null
				word = vowel.replaceAll('x', alpha).replaceAll('d', endAlpha).replaceAll('t', topValue)
				wordsWithTripleVowel.push(word)
			})
		})
	})
})

function isTopVowel(e: any) {
	const isTrue = topVowel.some(el => {
		if (el.replaceAll('x', '') === e) return true
		return false
	})
	return isTrue
}
function isVowelMustHaveAlphabet(e: any) {
	const isTrue = vowelMustHaveAlphabet.some(el => {
		if (el.replaceAll('x', '') === e) return true
		return false
	})
	return isTrue
}

function priority1(letter: any, next2Letter: any) {
	return wordsWithTripleVowelWithEndingAlphabet.includes(letter)
}
function priority2(letter: any, next2Letter: any) {
	return wordsWithTripleVowel.includes(letter)
}
function priority3(letter: any, next2Letter: any) {
	if (next2Letter) {
		let hasTop = false
		const split = next2Letter.split('')
		if (isTopVowel(split[0]) || isVowelMustHaveAlphabet(split[0])) hasTop = true
		if (hasTop) return false
	}
	return wordsWithDoubleVowelWithEndingAlphabet.includes(letter)
}
function priority4(letter: any, next2Letter: any) {
	if (next2Letter) {
		let hasTop = false
		const split = next2Letter.split('')
		if (isTopVowel(split[0]) || isVowelMustHaveAlphabet(split[0])) hasTop = true
		if (hasTop) return false
	}
	return wordsWithSingleVowelWithEndingAlphabet.includes(letter)
}
function priority5(letter: any, next2Letter: any) {
	return wordsWithSingleVowel.includes(letter)
}

function counting(word: any, testing = false) {
	let list = []
	while (word.length > 0) {
		for (let i = 0; i < word.length; i++) {
			const check1 = priority1(word.substring(0, 6), word.substring(6, 8))
			const check2 = priority2(word.substring(0, 5), word.substring(5, 7))
			const check3 = priority3(word.substring(0, 4), word.substring(4, 6))
			const check4 = priority4(word.substring(0, 3), word.substring(3, 5))
			const check5 = priority5(word.substring(0, 2), word.substring(2, 4))
			if (testing) {
				console.log({
					1: word.substring(0, 6),
					2: word.substring(0, 5),
					3: word.substring(0, 4),
					4: word.substring(0, 3),
					5: word.substring(0, 2)
				})
				console.log({ check1, check2, check3, check4, check5 })
			}
			if (check1) {
				list.push(word.substring(0, 6))
				word = word.slice(6)
				break
			} else if (check2) {
				list.push(word.substring(0, 5))
				word = word.slice(5)
				break
			} else if (check3) {
				list.push(word.substring(0, 4))
				word = word.slice(4)
				break
			} else if (check4) {
				list.push(word.substring(0, 3))
				word = word.slice(3)
				break
			} else if (check5) {
				list.push(word.substring(0, 2))
				word = word.slice(2)
				break
			} else {
				word = word.slice(1)
				break
			}
		}
	}
	return list
}

export default defineEventHandler(async event => {
	const query = await readBody(event)
	const word = query.text
	const count = counting(word)

	return count
})

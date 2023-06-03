
export default function createMapping(obj, func) {
	let arr = []
	let i = 0
	for (const [key, value] of Object.entries(obj)) {
		arr.push(func(key, value, i))
		i++
	}
	return arr
}
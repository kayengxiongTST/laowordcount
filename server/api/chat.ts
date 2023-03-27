const messages: any = []
export default defineEventHandler(event => {
	const query = getQuery(event)
	if (query?.text) {
		messages.push(query.text.toString())
	}
	return {
		data: messages
	}
})

import { defineIOHandler } from 'nuxt3-socket.io'

export default defineIOHandler(io => {
	io.on('connection', socket => {
		console.log('Connected ', socket.id)
	})
})

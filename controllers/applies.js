const appliesRouter = require('express').Router()
const Apply = require('../models/apply')
const jwt = require('jsonwebtoken')
const User = require('../models/user')



appliesRouter.get('/', async (request, response) => {
	
	const decodedToken = jwt.verify(request.token, process.env.SECRET)
	if (!decodedToken.id) {
		return response.status(401).json({
			error: 'token missing or invalid'
		})
	}
	
	const applies = await Apply.find({})
	response.json(applies.map(apply => apply.toJSON()))
})


appliesRouter.get('/testi', (request, response) => {
	response.send('<h1>Hello Testi!</h1>')
})


appliesRouter.post('/', async (request, response) => {
	const body = request.body

	const apply = new Apply({
		name: body.name,
		email: body.email,
		residence: body.residence,
		notes: body.notes,
		hyyMember: body.hyyMember
	})

	const savedApply = await apply.save()

	console.log('SavedApply: ', savedApply)
	response.json(savedApply)
})


module.exports = appliesRouter
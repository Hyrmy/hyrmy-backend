const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const applySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3
	},
	email: {
		type: String,
		required: true
	},
	residence: {
		type: String,
		required: true
	},
	notes: String,
	hyyMember: {
		type: Boolean,
		required: true
	}

})

applySchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})



module.exports = mongoose.model('Apply', applySchema)

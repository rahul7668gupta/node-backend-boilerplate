import mongoose from 'mongoose'

const sampleHomeSchema = mongoose.Schema({
    name: String,
    address: String,
    pincode: Number,
    comments: [Object],
    likes: {
        type: Number,
        default: 0
    }
})

const sampleHome = mongoose.model('sampleHome', sampleHomeSchema)

export default sampleHome
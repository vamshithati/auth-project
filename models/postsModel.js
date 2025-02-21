const mongoose=require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        typre: String,
        required:[true, 'title is required!'],
        trim: true,
    },
    description: {
        typre: String,
        required:[true, 'title is required!'],
        trim: true,
    },
    useId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps:true})

module.exports=mongoose.model('Post', postSchema)
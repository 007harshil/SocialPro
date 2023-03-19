const { model, Schema } = require('mongoose')

const advertiserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    emailVerified: { 
        type:Boolean,
        default:false 
    },
    profilePic: { 
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        require:true,
        enum:['male','female'],
    },
    zipCode:{
        type:Number,
        require:true
    },
    panNumber:{
        type:Number,
        require:true
    },
    panImgFront:{
        type:String,
        require:true
    },
    panImgBack:{
        type:String,
        require:true
    },
    status: {
        type:String,
        enum:['pending','complete'],
        default: 'pending'
    },
     latitude:{
         type:String
     },
     longitude: {
         type:String
     },
},{
    timestamps:true     
})

module.exports = model('advertiser', advertiserSchema);

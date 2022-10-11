const {model,Schema} = require('mongoose')

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
    password:{
        type: String, 
        required: true
    },
    confirmPassword: { 
        type: String, 
        required: true 
    },
    gender: { 
        type: String,
        enum : ['male','female']  
    },
    dob: { 
        type: Date, 
        required: true 
    },
    emailVerified: { 
        type:Boolean,
        default:false 
    },
    profilePic: { 
        type: String,  
    },
    panNumber:{
        type:Number,
        require:true
    },
    residentalAdress:{
        type:String,
        require:true
    },
    city:{},
    zipCode:{
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
    // latitude:{
    //     type:String
    // },
    // longitude: {
    //     type:String
    // },
},{
    timestamps:true
})

module.exports = model('advertiser',advertiserSchema);
const { Router } = require("express")
const adminRoute = Router()
const { verifyAdminToken } = require('../../middleware/verifyToken')

const authRoute = require('./auth')
const influManageRoute = require('./influencerManage')
const adverManageRoute = require('./advertiserManage')
const blockUserRoute = require('./blockUser')

adminRoute.get('/',(req,res)=>{
    res.status(200).json({message:"Admin Route is working!!"})
})

adminRoute.use("/auth",authRoute);
// <<<<<<< HEAD
// adminRoute.use('/influManage',verifyAdminToken,influManageRoute)
adminRoute.use('/influManage',influManageRoute)
// adminRoute.use('/adverManage',verifyAdminToken,adverManageRoute)
adminRoute.use('/adverManage',adverManageRoute)
// =======
// adminRoute.use('/influManage',verifyAdminToken,influManageRoute)
// adminRoute.use('/adverManage',verifyAdminToken,adverManageRoute)
adminRoute.use('/blockUser',blockUserRoute)

// >>>>>>> 26498576dd3643e7d49add88283466bbadf471a6
module.exports = adminRoute;
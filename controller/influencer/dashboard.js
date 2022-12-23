const dashboardService = require("../../service/influencer/dashboard")
const {response} = require('../../middleware/response')
// <<<<<<< HEAD
// get all contracts to influencer dashboard
exports.getAllData = async(req,res)=>{

exports.getAll = async (req, res) => {
    try {
      if (!req.query.page || !req.query.limit) {
        return response("pagination is require for pagination..!!", {}, 404, res);
      } else {
        let resp = await dashboardService.getAll(
          req.query.page,
          req.query.limit,
          req.query.str
        );
        if (resp) {
            console.log(resp);
            return response('data fetched',resp.data,200,res)
        } else {
          return response("something went wrong!!",{}, 500, res);
        }
      }
    } catch (err) {
      return response(err.message,err?.error,err.status,res);
    }
  };

exports.search = async(req,res)=>{
  try {
    let resp = await dashboardService.search( req.query.str )
    if (resp) {
      return response("Success..",resp.data,200,res);      
    } else {
      return response("Something Went wrong...",{},404,res);
    }
  } catch (err) {
    return response(err.message,err?.error,err.status,res)
  }
}
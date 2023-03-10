const imageService = require("../service/image");
let { response } = require("../middleware/response");

exports.upload = async (req, res) => {
    try {
        console.log("req.file ...........................",req.file);
        let resp = await imageService.upload(req.file);
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res);
        else
            return response("something went wrong..!!", {}, 500, res);
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res);
    }
};

exports.delete = async (req, res) => {
    try {
        let resp = await imageService.delete(req.body.file);
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res);
        else
            return response("something went wrong..!!", {}, 500, res);
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res);
    }
};


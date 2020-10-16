const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('respond with a resource');
}

exports.show = async (req, res, next) => {

    const users = await model.User.findAll() 

    res.status(200).json({
        data: users
    })

}
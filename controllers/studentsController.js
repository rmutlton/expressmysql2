const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('students45454514561156');
}

exports.show = async (req, res, next) => {

    const data = await model.students.findAll() 

    res.status(200).json({
        data: data
    })

}

exports.insert = async (req, res, next) => {

    const { s_name, s_lastname, s_tel } = req.body;

    const check = await model.students.create({
        s_name: s_name,
        s_lastname: s_lastname,
        s_tel: s_tel
    })

    res.status(201).json({
        message: check
    });

}

exports.destroy = async (req, res, next) => {
    const { id } = req.params;
    const check = await model.students.destroy({
        where: {
            id: id
        }
    })
    res.status(200).json({
        message: check
    });
}

exports.update = async (req, res, next) => {
    const { id, s_name, s_lastname, s_tel } = req.body;
    const check = await model.students.update({
        s_name: s_name,
        s_lastname: s_lastname,
        s_tel: s_tel
    },{
        where: {
            id: id
        }
    })
    res.status(200).json({
        message: check
    });
}
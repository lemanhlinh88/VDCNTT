const food = require('../models/food');
const { mutipleMongooseToObject } = require('../../util/moongoose')

class SiteController {
    //[GET] /
    index(req, res, next) {
        food.find({})
            .then((foods) => {
                res.render('home', { 
                    foods: mutipleMongooseToObject(foods) 
                });
            })
            .catch(next);
    }

    //[get] /cha-ca
    getchaca(req, res) {
        res.render('chaca');
    }

    //[get] /ca-phe
    getcaphe(req, res) {
        res.render('caphe');
    }

    //[get] /pho
    getpho(req, res) {
        res.render('pho');
    }

    //[get] /kem-trang-tien
    getkemtrangtien(req, res) {
        res.render('kemtrangtien');
    }
}

module.exports = new SiteController();

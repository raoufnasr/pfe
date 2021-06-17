var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

exports.getAllProduct = (req, res) => {
    pool.query("SELECT * FROM products", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                product: rows,
                success: true,
            });
        }

    });
};

exports.newProduct = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        nom: input.nom,
        description: input.description,
        image: input.image,
        actif: input.actif,
        category_id: input.category_id,
        cp: input.cp,
        adresse: input.adresse,
        pays: input.pays,

    };
    pool.query("INSERT INTO products set ?", data, function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM products", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'produit crée avec succes!',
                    adresses: rows
                });
            });

        }
    });

};
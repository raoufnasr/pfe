'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pays: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {});
    user.associate = function(models) {
        // associations can be defined here
    };
    return user;
};
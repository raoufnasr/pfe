'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [{
                nom: 'superAdmin',
                description: 'superAdmin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'client',
                description: 'client',

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [{
                nom: 'superAdmin',
                description: 'superAdmin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'client',
                description: 'client',

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};
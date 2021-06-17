'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favoris', [{
                user_id: 1,
                product_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 1,
                product_id: 1,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favoris', [{
                user_id: 1,
                product_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 1,
                product_id: 1,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};
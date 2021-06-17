'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                nom: 'fruit',
                description: 'fruit fruit fruit fruit',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'légumes',
                description: 'légumes légumes légumes légumes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                nom: 'fruit',
                description: 'fruit fruit fruit fruit',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'légumes',
                description: 'légumes légumes légumes légumes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};
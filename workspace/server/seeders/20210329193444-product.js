'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
                nom: 'miel ',
                description: 'miel miel ',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'xxxxxx',
                description: 'yyyyyy',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
                nom: 'miel ',
                description: 'miel miel ',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nom: 'xxxxxx',
                description: 'yyyyyy',
                adresse: 'xxxxxx',
                cp: '4011',
                pays: 'tunisie',
                category_id: 1,
                actif: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};
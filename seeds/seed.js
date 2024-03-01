const sequelize = require('../config/connection');
// Need to update what model names we actually use inside curly brackets
// const {} = require('../models');

// Also need to update this/these variables to match seed data for the models
// const userData = require('');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Need to update the model name once we have that established
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Will we have a model for more things than just the user?

    process.exit(0);
};

seedDatabase();
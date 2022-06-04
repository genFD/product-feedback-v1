const Feedback = require('../models/feedback.model');
const productRequests = require('./productRequests');

const { connectDatabase } = require('./config/database');

connectDatabase();

const importData = async () => {
  try {
    await Feedback.deleteMany();
    await Feedback.insertMany(productRequests);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Feedback.deleteMany();
    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

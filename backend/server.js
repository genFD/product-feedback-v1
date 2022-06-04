const dotenv = require('dotenv');
const app = require('./app');
const { connectDatabase } = require('./config/database');
const colors = require('colors');

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
  error: ['bgRed', 'black', 'underline', 'bold'],
});

dotenv.config();

const PORT = process.env.PORT || 6000;
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(
      PORT,
      console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success)
    );
  } catch (error) {
    console.log(`Cannot start server : ${error}`.error);
  }
};
startServer();

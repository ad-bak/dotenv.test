const dotenv = require("dotenv");
dotenv.config();

console.log(
  `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}`
);

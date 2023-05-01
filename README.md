# Brief example of authorization and authentication with express in Node JS🌐.

#### About the project
This project presents a very simple example of how to handle login authentications via `session` in Node JS with Express. It makes use of a small database in `Json` format that is loaded in memory to use the default user data. This project focuses on business logic and data manipulation (**does not include a frontend**). 
***Note***: While it is true that `session` is **stateful** in this example everything will be used in memory, the sessionIDs are stored in an array.

As additional data:
1. Module system used:  **` ECMAScript Modules `** ‼️
2. The VS Code extension ` Thunder Client ` is used for http requests.
3. A small database in Json format in the file `bbdd.js`, this is loaded **in memory** to manipulate it by the operations.

#### Libraries
- `Nodemon` : To avoid having to restart the server every time the server is changed 
-  `Express` : This project uses the Node.js express library to handle HTTP requests and responses.
- `Dotenv` : For manipulation of environment variables (*see the .env.example file to know which environment variables are needed*)
- `Nanoid` : To generate the sessionIDs ([More information click here](https://www.npmjs.com/package/nanoid))
- `cookie-parser` : To be able to read cookies from the request ([More information click here](https://www.npmjs.com/package/cookie-parser))

#### How to use
1. Download or clone the project with git.
2. Create the `.env` file following the attached `.env.example file`.
3. Install the necessary libraries using the `npm install` command.
4. Run the project with the `npm run dev` command.
---

  <p align="center">
    <strong>
    Thanks for using this project! If you have any problems or suggestions, feel free to create an issue on GitHub.
    </strong>
    <br>
    <br>
    <img src="https://33.media.tumblr.com/26096d682c56c950bcf9b790db418bef/tumblr_no979wnMPZ1s4e3v8o1_500.gif" width="150" alt="GIF">
  <p>



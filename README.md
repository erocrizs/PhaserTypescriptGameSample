# Phaser-Typescript Game Sample

This sample uses [Node JS][1] to run a game written using typescript and made with [Phaser][2], a javascript game framework.

## Setup

The setup only needs to be done once.

 1. Make sure you have Node JS installed in your system. Enter `node -v` in your command line to ensure you have node.
 2. Make sure you have npm installed. npm is a package manager for javascript. Typically, npm is installed together with Node JS. Enter `npm -v` in your command line to ensure you have npm.
 3. Type the `npm install -g typescript tslint` and `npm install -g typings` to install typescript in your device. Enter `tsc -v` in your command line to ensure you have typescript in your system.
 4. Download the project from this repository.
 5. Open a command line in the directory of the repository and then enter `npm install` to install all necessary javascript libraries needed to run the game. The installation is just local, i.e. the files are installed only within the project directory. Everything went fine if no error appeared during the installation. 

## Running

To run the game, finish the setup and enter `npm start` in the command line inside the project directory to run the server. This command launches the typescript compiler in watch mode, meaning it automatically compiles your typescript files into javascript whenever it detects any changes in the typescript files in the project directory. The command also launches nodemon as the server, and that means you do not need to restart the server every time you make changes to any file in the project. Just refresh the browser.

To see the actual game, go to http://localhost:3000/ once the server is up.

## Files and the File Structure

The project directory should more-or-less follow this files structure:
```
+ project
	|
	+ README.md
	|
	+ .gitignore
	|
	+ package.json
	|
	+ tsconfig.json
	|
	+ node_modules
	|
	+ .git
	|
	+ game
	|
	+ web
		|
		+ server.js
		|
		+ public
			|
			+ index.html
			|
			+ assets
			|
			+ css
			|
			+ js
```

This thing you are reading right now is the `README.md`. The git-related stuff are the `.git` folder and `.gitignore` file. The `node_modules` folder is where all the locally-installed libraries are placed. This appears once you do the `npm install` command. You probably won't need to touch anything in these files.

The `package.json` is the file that tells npm what exactly are the libraries to install when you do `npm install`. The `tsconfig.json` tells the typescript compiler what it needs to know to compile `.ts` files to `.js` files. You will probably also never touch these files as well.

The `web` folder contains the `server.js` which is the configuration of the web server. You will most likely not touch it unless you want to do some fancy stuff in the server side like connect the sites to a mysql server or something. All the files in the `public` folder is accessible to the users through their browsers. It contains the web page, `index.html`, which you probably wouldn't need to touch as well.  It also contains the `assets` folder for the assets (i.e. music files, sprites, etc.), `css` folder for the css files, and the `js` folder where the javascript files are saved after the typescript files in the `game` folder get compiled. You will not be touching these `.js` files since you are supposed to code using typescript (isn't that why you're here in the first place?).

Finally, the `game` folder is where you save the `.ts` files to implement the game. Typescript is basically javascript with optional strong typing as well as better syntax for OOP. That's an oversimplification and does not do justice to the language, so just check out what it can do for you.

[1]: https://nodejs.org/en/
[2]: http://phaser.io/

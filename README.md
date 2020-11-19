# Instructions to Run the app

This is a web app built using React.js

The text editor has two device motions:
1. Shake the phone lightly for undo
2. Shake the phone strongly to redo


To run:

1. unzip the file.

2. open terminal, cd into the project folder (Make sure the folder contains the .env file)

3. run the command:

### npm install 

4. run command
    
### npm start 
    
    This will start running on https://localhost:3000 (you can check on the browser but the device motion will not work since there is no accelerometer on the laptop)

To run on phone: 

1. keep the project running on the laptop

2. find out the local ip from network preferences. 

3. open a browser from the phone and type the ipv4 address followed by colon and the port number at which it is running on the laptop. eg: https://192.168.1.19:3000 (it is very important to run on https for the functionality to work)

System Requirements:

1. Node and NPM
    If you do not have node and npm installed on your system you would need to install node 14+ version.  On  macOS you can install it using "brew install node"
2. Browser : Crome/Safari

Citations:

https://sensor-js.xyz/demo.html https://stackoverflow.com/questions/56514116/how-do-i-get-deviceorientationevent-and-devicemotionevent-to-work-on-safari https://stackoverflow.com/questions/44574399/create-react-app-how-to-use-https-instead-of-http


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

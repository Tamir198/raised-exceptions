# raised-exceptions

## About the project: 


Every time the user will click a button on the front end, a new error will be generated.<br>
The data extracted from the error will contain: 

```js
errorName - "Can't find variable: setState", 
errorStack - "This is the error stack" ,
errorMessage - "This ie error errorMessage",
creationTime - "29-3-2020",
detailedCreationTime - "Sun Jan 29 2023 16:23:06 GMT+0200 (Israel Standard Time)"
```

Saving the errors:
The errors will be saved inside `logs` folder on the server. 
Inside this folder, the file names will indicate the error creation time.
That way, we can save this day's errors inside the relevant file which will make it easier for the developer who wants to check the logs.

![image](https://user-images.githubusercontent.com/34707669/215435764-5fa35a84-5906-492e-b3f6-2250321d04cd.png)


The server will create a new file if not exist, and append new errors to an existing file.


All the current errors are saved locally, and are deleted once they are sent to the server (to prevent duplications).

-----


## Running the project: 

open the `backend folder`.<br>
Run `npm install` and `npm run start` to start the server or `npm run test`.

The backend was built using `express.js` together with jest library for testing, using MVC + application factory.

One the server will run: 

![image](https://user-images.githubusercontent.com/34707669/215433641-5c3c304f-0999-4d4e-af7c-af13ebcbc93a.png)


Go to the `fronend` folder and run `npm install` and  `npm start`.





# HavenBnB
The number of homeless people in city shelters has exceeded 60,000 this past November (2016), which is a record high. <br />

At any moment you can become homeless. Your house catches fire one day. A natural disaster hits, you suffer an injury and can no longer afford to pay your rent.<br />

The shelter system is difficult to navigate. Just because you are registered under the system does not mean you are guaranteed a place. It takes about 5 days for you to be placed at an actual shelter. <br />

HavenBnb focuses on those already verified through the system but haven’t been placed yet. <br />

We help homeless people find short-term places to stay by connecting them with volunteers who can offer their space for the night or two.
This improves the homeless shelter by making sure that everyone registered in the system is guaranteed a roof over their head. <br />

We also implemented Aunt Bertha’s API to show guests nearby pantries, soup kitchens, and free meals as they might be new to the area.

# To Run

Clone the repo <br/>
  `git clone https://github.com/Dinnall/havenBnB.git` <br/>

Install relevant packages <br/>
  `npm install` <br/>

Add a config folder and a config.json file and copy this into it: <br/>
  `{` <br/>
  `"development": {` <br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "havenBnB",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `},` <br/>
  `"test": {` <br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "database_test",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `},` <br/>
  `"production": { `<br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "database_production",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `}` <br/>
  `}` <br/>
Make sure you make a database called 'havenBnB' in Postgres, edit the 'username' field to the username registered on your computer. <br/>

Run Postgres on your computer and connect through Postico. <br/>

In your terminal run the command: <br/>
  `npm start` <br/>

Open a browser tab to and navigate to  'localhost:3000' <br/>


To run the seed files: <br/>
  In the terminal type: <br/>
    `node seeders/user-seed.js` <br/>
    `node seeders/listing-seed.js` <br/>

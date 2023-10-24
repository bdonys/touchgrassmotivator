# Touch Grass Motivator 

## Description
We created this project using two API resources in order to motivate League of Legend players.  There is a common phrase to "touch grass" that is used in the gaming world in order to motivate the player base to take a break and go outside.  For our project, we wanted to use this phrase as a hyperbole.  This application shows the rank status of any individual player based on their region's server and produces a motivational GIF with it.  These GIFs range from dissapointment, if you have no rank; to joyous congratulations for higher ranks.  This project was also used as a source of collaboration between other students within the same bootcamp cohort and is an application for us to show all that we have learned so far in front end development.  We were able to utilize two APIs from completely different sources and use them together to make our project.  It inspired us to keep striving forward with new and innovative ideas.  Ultimately, it showed us that the sky is really the limit within programming and if you can think of it, then can create it. 

## User Story

AS A Legue of Legends player 
I WANT to be motivated based on my rank 
SO THAT I can stop seeing the same rank output

## Acceptance Criteria

GIVEN I want to be motivated to climb 
WHEN a summoner name is inputted from a specific server region 
THEN a rank and tier of the summoner is outputted with a motivational gif

## Technologies

As a group we used an HTML file and JavaScript file to display the information onto a webpage and then make it interactive.  We also used Materilize CSS framework in order to style the HTML page.  Nestled in the assets folder is the background we used for the website.

## Usage

In order to use this application, the user must have a RIOT client API KEY.  This key is free to sign up for if you already have a RIOT player account.  However, any RIOT API KEY expires after 24 hours and must be renewed simply by clicking and obtaining a new one from their services.  Once this is obtained, the user must go to the java.script file and plug in this new API key into the API KEY section at the top of the code.  Following this, the application can be opened in any browser.  Once opened, simply choose a region's server location and type out the name of the player you wish to look up.  The player's summoner ID is linked to their server, so choosing the correct server is vital to create an accurate output.  Then after typing the summoner's name you wish to look up, hit the SUBMIT button and an output of the player's rank and a motivational GIF will pop up.  You can also inspect the page and open the DevTools.  After this, go to the console command line and the summoner's rank will also be produced here.

## License

This project used Materialize CSS framework for our CSS styling.  It also used JavaScript and HTML elements. 

## Credits 

APIs used: Giphy API and RIOT API.
Developers: Brandon Sur, Ricky Phung, Alejandro Le Mendez, and Jared Eye.

## Additional Resources

Link to the deployed page:
https://bdonys.github.io/touchgrassmotivator/

The following image is what you would see for the region selector.  Click the region that aligns with your summoner's name in order to have an accurate summoner rank status.
![image](https://github.com/bdonys/touchgrassmotivator/assets/140272444/bb3563c9-fada-43b9-b273-b200409c87cc)

Following this, there is the ;Summoner Name' section.  This is where you can type the player's name that they go by within the League of Legends servers.  Afterwards press the 'Submit' button or press enter. 
![image](https://github.com/bdonys/touchgrassmotivator/assets/140272444/3dced22a-a6ee-4a6b-8e89-335c97426681)

The following image is an example of the output that you may recieve after a successfully having the correct server region and player name inputted.  
![image](https://github.com/bdonys/touchgrassmotivator/assets/140272444/8d21cf78-07b8-4573-81f1-b2863ff9ca82)

Lastly, if the summoner is not ranked, then the following image output is something that youc an expect to recieve. 
![image](https://github.com/bdonys/touchgrassmotivator/assets/140272444/49130952-c81b-4966-8ee1-36ad85930655)


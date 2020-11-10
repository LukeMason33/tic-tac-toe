# tic-tac-toe-game
## Contributors
[Luke Mason] (https://github.com/LukeMason33)

## Overview
If you enjoy the timeless game of tic-tac-toe then look no further! Here is a web app that will bring your tic-tac-toe fantasy to life! Start by opening the webpage. Once open, you will see on the left side of the screen is one player that using the "🔶" token.
!(file:///Users/lukemason/Desktop/Screen%20Shot%202020-11-10%20at%204.32.43%20PM.png)
On the rightmost side of the screen you will see another player that's using the "🔷" token. Below those tokens are the win counters for that specific counter, so if you're new, both of those should be set at 0.
To start playing the game, click that very in-yo-face button that says "PLAY GAME". Once that button is clicked the game board shall appear!
!(file:///Users/lukemason/Desktop/Screen%20Shot%202020-11-10%20at%204.32.05%20PM.png)
Above that game board is an indicator that will you, the user, which players turn it is. Every time a player clicks on one of the boxes, that players token will be placed in that box, making it easy for you to see which player has played where, and to also ensure that you won't click that box again! (There will be an alert if you do this so don't you worry). If one of the players gets 3 of their tokens consecutively, then that turn indicator will let you know that that player won!
!(file:///Users/lukemason/Desktop/Screen%20Shot%202020-11-10%20at%204.33.14%20PM.png)
That win will then be counted and displayed for that given player, and you will be given a freshly cleaned game board to keep on playing! If at any point you need to step away from the screen, but don't want your wins to go away...don't you worry! Your wins are saved on your local screen and will always display whenever you open the page back up. So what are you waiting for, let's get tic-ing and tac-ing and toe-ing!

## Technologies Used
- HTML
- JavaScript
- CSS
- JSON (local storage)

## Architecture
- index.HTML
  - This is where the html lives for the webpage
- styles.CSS
  - This is where all that fancy styling and colors you see are coming from
- src
  - game.js
    - This is where we create our game. There's also some methods inside of here that update our data model for our game
  - player.js
    - Here is where we create our players. Just like the game.js, there's methods in here to ensure that our data model is being updated within our local storage
  - main.js
    - Here is where all the DOM related magic happens! We've got quite a few functions inside of here, but every code within here serves a very important task to get this page up and running.

## Challenges
- My main challenge in this was how to compare the players selections to the winning selections in order to return that one of players has won. There were multiple methods that I tried but I couldn't seem to find one that wanted to work in the way that I wanted it too. I did eventually achieve this, but I feel that there's a lot cleaner way to do it.
- Another challenge is that I can't get the game board to have a fixed height/width when tokens are being placed within it. I tried giving it specific widths/heights within styles.css but it still wants to move around. The game is still easily playable, but that's something I would really like to fix.

## Wins
- The biggest win from this whole project for me was that I was able to successfully incorporate local storage with minimal head banging. HUGE WIN!
- Another win that I faced is to just get this game to work! I've never done a project like this, there's a lot of interaction between classes and objects so I was a little nervous about it. And even though it was tough at parts, I was able to slow myself down and read through every line of code to understand what was happening in a function if I wasn;t getting the results I was expecting.

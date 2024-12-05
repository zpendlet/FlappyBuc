Flappy Buc is the ETSU version of Flappy Buc. Flappy Buc is inspired by our mascot, Bucky. This project was created in the CSCI 4250-001 Software Engineer course during the Fall 2024 semester. The project was conducted using SCRUM methodology. This was each of the teammates first time performing this as well as coding in JavaScript.

The teammates credited to this project and their respetive roles are:
    Zoe Pendleton          - developer
    Christian Bolick       - developer
    Kevin Davis            - developer
    Grace Kyoko Smith      - product owner
    Ismael (Timmy) Melchor - SCRUM master


This is the link to the backlog used during our sprints:   https://ismaelsmelchor.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog

What had been completed during our sprints
  -  Sprint 1 Goal: Create a landing page for the game.
     - Create HTML landing page
     - Display a background of green mountains and a blue sky
     - Display the game title 'Flappy Buc'
  - Sprint 2 Goal: Create a preview image for the game.
     - Display the playable character, Bucky's head.
     - Display an instance of the obstacles, a pair of pipes that cling to the top and bottom of the screens.
  - Sprint 3 Goal: to add character navigation functionality / learn how to have constantly moving objects / event handling from the user
     - Upon the first interaction/ event by the user, in this moment in time this is a click of the mouse, Bucky starts falling at a constant rate in place.
     - Upon each interaction/ event thereafter, Bucky will jump in place.
  - Sprint 4 Goal: Learn how to have objects spawn and despawn on queue.
     - Upon start of game, the set of pipes innitially on screen will slide horizontally to the left (side scrolling).
     - When the pipes reach the halfway point of the screen, a new set of pipes will spawn on the rightmost side of the screen and the cycle repeats.
     - When a set of pipes reaches the leftmost side of the screen, it will despawn.
 - Sprint 5 Plan: event detection between two objects / crash detection (I say plan because we did not get to implement sprint 5 and after)
     - when bucky comes into contact with a pipe or the 'floor', that is a crash
     - define crash detection logic
     - if a crash is detected, the game goes into a game over state
     - add background music (optional)
   
Product Backlog (unfinished stories thus far)
- add a pause button
    - will display 'PAUSED' across the screen
    - will cease all game movement
    - no player interaction will register
- score keeping
    - the player's score will be displayed on the screen at all times, starting at 0
    - each time the playable character successfully, the player's score increments by 1
- game over actions
    - when the game over state is activated as a result of a crash, the player's score will be displayed and the player will be asked for 3 initials for the                 leaderboard

# PacMan – ADA Project
## Section 1, Challenge Outline. 

### 1a. Problem Summary 
This project revolves around the development of a variant of the iconic Pac-Man game, adhering closely to its traditional gameplay mechanics while emphasising the application of coding best practices throughout development. The primary objective is to create a fully functional program featuring a user interface that facilitates game initiation, gameplay, and restart options. Modifications have been introduced to the classic game design; for instance, the lateral passageways that allowed characters to move from one side of the game board to the opposite side have been sealed off. Additionally, while the original game featured four ghosts, each with their unique movement strategies, this version simplifies their behaviour to random movements, diverging from the original's complexity.

### 1b. UML Diagram and Project Structure. 
#### UML Diagram: 

### 1c. Innitial Plan and Design Approach.

This project adopts the Model/View/Controller (MVC) architectural pattern to structure the Pacman game. The MVC pattern aids in separating concerns, allowing for more manageable code, easier maintenance, and the flexibility to extend the game with new features. Below, we detail the roles each component plays within our game architecture and how they interact to deliver a seamless and engaging gaming experience.

#### Model
The Model component acts as the heart of our game's logic and state. It is responsible for maintaining the game's dynamic data structure and the rules that govern changes to this structure. Within the Model, key classes include:

GameBoard: Represents the game grid where Pacman and ghosts move. It is responsible for tracking the positions of all game objects, including walls, dots, power pills, and characters.
Index: Serves as an entry point for game initialization, setting up the game board and populating it with dots, walls, and characters based on predefined level layouts.
These objects are instantiated and structured through their respective constructors during the game's initialization phase. The Model ensures that the game state is always current, reflecting the results of player interactions and game logic.

#### View
The View component is tasked with rendering the game state to the player. It listens for changes in the Model and updates the visual representation of the game accordingly. In our implementation, the main game loop acts as part of the View, determining which objects to draw and refresh on the screen. This includes drawing the game board, Pacman, ghosts, and updating scores and game status messages.

The separation of the View from the game logic allows for a clear distinction between how the game works and how it is presented, facilitating potential future enhancements such as supporting different rendering technologies or user interfaces.

#### Controller
The Controller component mediates input from the player, translating it into actions that modify the Model. It houses classes responsible for character movements, collision detection, and game state transitions. These include:

Pacman: Handles input for Pacman's movement, ensuring it follows the game rules for navigation and interactions (e.g., eating dots or power pills).
Ghost: Manages the AI for ghost movements, dictating their behavior based on the game state (e.g., chasing Pacman or fleeing when vulnerable).
Controllers modify attributes within the Model to reflect the current game state, ensuring the Model and View remain synchronized. This separation of concerns allows for the independent development and testing of game logic and player interactions.


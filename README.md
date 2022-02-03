# rock-paper-scissors
The goal of this project is to use Javascript (primarily) to develop a simple game of Rock, Paper, Scissors. This will be my first Javascript project, so I look forward to the learning experience that it will provide.

## implementing UI
After learning more about Javascript and how it can be used to interact with and manipulate the DOM, refactoring this project and including a UI is the next step. Users will be able select, on the web page, which option they'd like (rock, paper, or scissors). The computer's option will be automated, and a round winner will be determined based on the user selection and computer selection. A running score of user vs computer will be displayed on the screen at all times. Once a score of **5** is reached by either oponent, that oponent will be deemed the overall winner and the game will end.

## adding animations
Once the UI was fleshed out, animations were then added to this project. The primary animation is as follows:

```shell
1. When a user selects a choice (rock, paper, or scissors), the HUMAN card flips to reveal the selected choice
2. The COMPUTER card flips to reveal the cpu\'s randomized choice
3. Once the round result is decided, the result is logged in the results container
4. Both HUMAN and COMPUTER cards flip back to their starting sides
```
# kata-no-primitives-gol

## About this Kata

Difficulty - medium

Similar Katas - KataMinesweeper , KataReversi

## Problem Description

This Kata is about calculating the next generation of Conway’s game of life, given any starting position. See http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life for background.

You start with a dimensional grid of cells, where each cell is either alive or dead. When calculating the next generation of the grid, follow these rules:

   1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can evolve the cells, and will output a similar grid showing the next generation.

## Instructions

  - We use Jasmine in this Kata. Is already included in the project
    - Remember to add the classes and specs in the SpecRunner.html
  - Create a branch of master and start programming. Call this branch with a unique name, more teams will be creating branches.
  - Have fun, the important here is not to finish or to do the best implementation, but team work and learn
  - This is a safe environment for experimenting crazy ideas and chat with other about it.
  - No opinion is bad, we are here for learning :D

## Restrictions

  1. Not primitives allowed. No Strings, Bools, Numbers, undefined.
  2. TDD MUST be used
  3. Every 5 minutes, git reset --hard
  4. You can't commit with red tests
  5. You can't commit if there is code without tests
  
## Hints

  1. Arrays, Objects and Classes are allowed
  2. There is no limit on how many dimensions the universe have

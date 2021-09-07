# Solve js
|<img width="1101" alt="solvejs-image" src="https://user-images.githubusercontent.com/45185388/131930669-dd2829c1-a4e4-4154-b8e2-e5e7c03321e8.png">|
|--|

> To work on solve js tasks, just run the application on your local computer like you would run any html project e.g. with VScode live server (extension). Work is still going on to make the solve js project suitable for production.

Solve js is a client-only single page application made by [@Ifycode](https://github.com/Ifycode) containing vanilla javascript tasks. The tasks are based on features generally found in web applications. Readme is divided into the following sections:
- [Task instructions](#task-instructions)
- [Setup instructions](#setup-instructions)
- [Check that setup is successful](#check-that-setup-is-successful)
- [Branching instructions](#branching-instructions)
- [Commiting and pushing your changes](#commiting-and-pushing-your-changes)
- [How to submit](#how-to-submit)
- [Pulling in new changes](#pulling-in-new-changes)
- [How to run and use app](#how-to-run-and-use-app)
- [Tasks to work on](#tasks-to-work-on)

## Task instructions
* These are vanilla tasks (no use of libraries or frameworks please)
* You will find tasks (arranged in their respective folders) inside the `solve` folder
* DO NOT make changes to any file that is not in the `solve` folder
* See all sections below for further instructions

## Setup instructions
* Create a repo named **solve-js** in your own github account (do not initialize with a readme or any other file, just make sure the repo is empty)
* Clone this (original) repo onto your computer: 
````
git clone git@github.com:gads-projects/solve-js.git
````
* Cd into the project you just cloned:
````
cd solve-js
````
* Change remote origin to your own solve-js repo's url: 
````
git remote set-url origin your-own-solve-js-repo-url
````
* Add original repo as upstream (so that you can always pull in any new task I add): 
````
git remote add upstream git@github.com:gads-projects/solve-js.git
````
* You can always check if origin and upstream are set correctly with:
````
git remote -v
````

## Check that setup is successful
To check that the change of remote origin to your own repo is successful, try to push the cloned project to the solve-js repo you created in your own github account. Do this: 
````
git push origin main
````

Go back to the solve-js repo you created in your own github account. You should be able to see the content on your local computer now also exist in there too.

## Branching instructions
DO NOT make any changes to the `main branch` (to avoid problems). The only thing you are allowed to do in the main branch is to pull in changes from the upstream (i.e. original) repo. You can also push the content of the main branch on your local computer to the main branch in your remote origin (like we did in the **check that setup is successful** section). 

**Note**: Your solution to the tasks should be done in the `solve-tasks` branch. Create a branch named `solve-tasks` from your main branch:
````
git checkout -b solve-tasks
````

Always confirm the branch you are in with:
````
git branch
````

To switch from one branch to another use:
````
git checkout branch-name-here
````

## Commiting and pushing your changes
Once you are satisfied with your solution, you can do the following:
* Stage your changes:
````
git add .
````
* Commit your ahanges:
````
git commit -m "Write your commit message here"
````
* Next, push your solution from your local computer to the remote (origin):
````
git push origin solve-tasks
````

## How to submit
Follow the steps in **commiting and pushing your changes** section, and submit the link to your **solve-js** repo.

## Pulling in new changes

There'll be more tasks added along the way and in some cases minor fixes for the application. Make sure you add original repo as the upstream as instructed in the **setup instructions** section. You can always pull in changes from the upstream and merge into your created branch with these:
* Switch to the main branch:
````
git checkout main
````

* Pull in a new tasks or changes to your local computer with:
````
git pull upstream main
````

* You can choose to update your main branch on github with:
````
git push origin main
````

* Make sure to switch back to the solve-tasks branch:
````
git checkout solve-tasks
````

* Then merge changes into the solve-tasks branch:
````
git merge main
````

# How to run and use app

[![solvejs-video-thumbnail](https://user-images.githubusercontent.com/45185388/132043799-6083c36b-9804-44d8-affb-aeebbe7278f9.png)](https://www.youtube.com/watch?v=7dcwFJtyzoM)

# Tasks to work on

## Task 1: Toggle task

Find files to work with in the `toggle` folder which is inside the `solve` folder. Make the button toggle the div on and off like a switch, as shown in the .gif image below.

|![solvejs-toggle](https://user-images.githubusercontent.com/45185388/131866859-adb49d23-710b-4d89-a602-e146273fd785.gif)|
|--|

## Task 2: Filter task
Find files to work with in the `filter` folder which is inside the `solve` folder. Filter content based on colors as shown in the .gif image below. <!-- Display all content when the "All Colors" button is clicked on, and only display a specific color -->

|![solvejs-filter](https://user-images.githubusercontent.com/45185388/132273158-c074ff67-ba31-41fe-a982-acf1f71ae5a3.gif)|
|--|



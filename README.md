<h1><img align="center" src="./README-materials/title.png" width="100%"> </h1>

"Never more forget your important dates!"

Explore [Live demo](https://alice-rez.github.io/Not-to-forget/) or look at previews in [Gallery](#gallery)

## Description

Simple React to-do app. Work in progress - adding new features and making code better as I learn more about React.

Now working persistently - data are stored in localStorage of the browser, so also after refresh/closing of the browser, the data stay stored. Just no possibility to access them from different browser/device.

**Current functionalities (alpha version):**

- adding new to-do item (title, deadline and level of importance are mandatory, details are obligatory)

<img align="right" src="./README-materials/image.png" width="70%">

- list all of the to-do item (by default just open tasks, user can choose to see finished or all)

- importance of the task is also depicted by color of used pin (purple for the most important, green for the least)

- possibility to check/uncheck task (to mark it as finished one), edit task (you can save changes or cancel the editing and go back to original state) or delete it (with display of alert if you want to delete it)

- sorting listed items according to their importance, deadline or alphabetically by title with possible reset to default order (the order they were added in)

- searching for the to-do with specific name

- basic autocomplete function showing all names of existing items that corresponds to the typed search keyword (working just using mouse now)

- check/delete/edit is available in list of item but also when searched item is displayed in search (just when change title in search mode, task will be no longer displayed for that search)

## Setup

1. Clone repository
2. ```
   cd <your-repository-name>
   npm install
   ```
3. ```
   npm start
   ```
4. Enjoy

## Implementation

**Used technologies**: React, Create React App, React Router, functional components, class components, React Hooks, react Context, customized sorting function in sort, JSX, CSS, CSS variables, Bootstrap, SVG

For the project configuration was used Create React App package.

Bootstrap was used for basic styling but heavily customized.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Gallery

**Fig.1** : Not default sorting chosen, one of tasks is checked (finished)

<img align="center" src="./README-materials/image2.png" width="100%">

</br>
</br>
</br>

**Fig.2** : Editing and deleting dialogues

<img align="center" src="./README-materials/image3.png" width="100%">

</br>
</br>
</br>

# Datasort

Datasort takes in a CSV and sorts the data. In this case, I have used a CSV containing data from Game Of Thrones.

## Requirements

- Create a view that displays entries from the dataset as blocks, squares, or rows with the
  name visible
- If there are any empty results with any of the user interactions, please display an
  appropriate error message (preferably a Sean Bean reference)
- When the user clicks on an entry, enable the user to view additional available information
  about the entry in a separate view on the same page:
  - Title = title
  - Gender = isMale
  - Culture = culture
  - DOB = dateOfBirth
- Each of the below user-abilities can be reset by a hard refresh of the browser by the user
  - Enable the user the ability to show all entries in no particular order
  - Enable the user the ability to show the entries by its corresponding isAlive value
  - Enable the user the ability to show the entries by their popularity in descending
    order

## Extra Credit

- Use Ag-grid to display the entries
- Share your project in a git/svn repository
- Enable the user to reset the view back to the initially loaded view to avoid a hard refresh
- Enable random order of entries when initially loaded
- Incorporate deferred loading to scroll more to replace the ability to show all
- Enable the user to show the entries by their popularity in ascending order as well
- Enable the user to display an area that has a pie chart of the proportional genders of the
  entries

### Potential Future Implementations

- Due to the time constraint, I used an upload CSV feature rather than a CSV parser. I would like to implement that the data is automatically loaded from the CSV.
- To enable the refresh of the table and the random order features, I would implement the [Refresh and Redraw functionality](https://www.ag-grid.com/javascript-grid-refresh/) of Ag-grid
- To enable the deferred loading features, I would implement the [Infinite Scrolling](https://www.ag-grid.com/javascript-grid-infinite-scrolling/) feature of Ag-grid. However, by implementing the Infinite Scrolling feature, it is not possible to sort or filter the data as it is not all present.
- To enable the pie chart feature, I would use a JS library, like D3. An example of Ag-grid using external graphing can be found [here](https://www.ag-grid.com/javascript-grid-graphing/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

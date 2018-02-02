## Create a gallery app with REACT - - Treehouse tech degree project 9

## Overview

In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, write the CSS and set up routing.

- [ ] (Recommended) Use the flickr.photos.search endpoint/method
- [ ] Display at least 3 links that return a list of photos matching some criteria. For example: Dogs, Cats and Coffee (see demo video).
- [ ] Include a "Search" link that includes a search field to let users search for photos.
- [ ] Use React Router to set up routes for each navigation link in the directory app.
- [ ] You can use the Fetch API or a tool like Axios to fetch data from the Flickr API.
- [ ] You should do all data fetching from a container component that passes the data down to presentational components responsible for displaying images

## Requirements
Have a basic understanding of React, React Router and APIs. See the Resources links on this page to find out more.
- [ ] Use a React component lifecycle method to fetch data immediately when the app loads. For example, if the root '/' path is 'Hiking', the app should display hiking images when it loads in the browser.
- [ ] Use a React component lifecycle method to fetch data when the routes change. For example, if a user clicks the 'Cats' navigation link, the app will fetch and display cat images from Flickr.

## Requirements
- [X]
## Create the following files
- [X]

## Project Instructions
- [ ] Set up your project with create-react-app.

- [ ] Build your app components according to the provided mockup. Most components should be stateless functional components that focus on the UI rather than behavior. You’ll need:
    - [ ] A container component that takes in a keyword and api key as props, and fetches the photos and other required information from the API
    - [ ] A navigation menu component
    - [ ] A component for each category you wish to display. For example, a Sunset component, a Flowers component, and a Clouds component.

- [ ] Update the CSS to style the app in a way that resembles the mockup.

- [ ] Install React Router and set up your and components.

- [ ] Get a Flickr API key
    - [ ] Create yahoo account/use tumblr account to sign in. Apply for non-commercial API key https://www.flickr.com/services/apps/create/apply/ You’ll need to set up a config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. This config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place. The config.js file should look something like this:

    const apiKey = 'YOUR API KEY';
    export default apiKey;

    You’ll import your API into your application and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.

- [ ] Fetch the data from Flickr API. Make sure data fetching and state is managed by a higher-level “container” component. We recommend using https://www.flickr.com/services/api/explore/flickr.photos.search. Enter a tag to search for, such as “sunsets.” You may also want to limit the number of results using the per_page argument. Choose JSON as the output, then “Do not sign call.” Click “Call Method.” At the bottom of the page, you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

- [ ] Display the data. Make sure each image gets a unique "key" prop. There should be no console warnings regarding unique "key" props. The title of each image list should be displayed dynamically via "props".

- [ ] Add search field feature. The field should be visible only in the 'Search' route.

- [ ] Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

## Extra Credit
- [ ] Add a loading indicator that displays each time the app fetches new data.

- [ ] Include a 404-like error route that displays when a URL path does not match a route.

- [ ] If no matches are found by the search, include a message to tell the user there are no matches.
    ...NOTE:

    To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
    If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
    Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.


## Future additions
+
+
+

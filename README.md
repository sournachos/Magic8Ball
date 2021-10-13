# TR Mid-Senior Front-End Developer Assessment (React)

Thank you for your interest in company, and welcome to our developer assessment! For this project, you will be creating an interactive web application that replicates the behavior of the ubiquitous Magic 8-Ball. The application will allow a user to enter a question into a text box, click the submit button, and receive a prediction in response.

#### Ground Rules:

- Your app should be written in **React**.

- While you are free to use any available third-party packages in your app, elegance matters! Importing unnecessary bloat will count against you, so use your best judgment.

- Please adhere to the included mockup and brand guidelines as closely as possible. Use your discretion where the mockup / brand guidelines do not specify, but at the end of the day the app should look as polished as possible to the end user.

- Assume this is a collaborative project, and other team members will be reading your code and adding features in the future, so comments are a must.

- The recommended time to complete the assessment is 3 hours, up to a maximum of 5 hours. **Please note: we know people are busy, especially during the COVID-19 pandemic.** We do not intend for this assessment to make unreasonable demands on your time. If you don't have time to finish one or more tasks, or you need an extension, please reach out to your recruitment contact. We will work with you to find a solution.

- Have fun!

#### UI Requirements:

The user interface of your Magic 8-Ball application should be laid out as specified in the following mockup:

![Assessment mockup](https://twisted-rope-misc.s3.amazonaws.com/assessments/mockup_2021.png)

Your app may include additional elements if necessary, but it must strictly conform to the following brand guidelines:

Guideline | Value
------------ | -------------
**Font** | Josefin Sans
**Font size (h1)** | 60 px
**Font size (p)** | 20 px
**Text color** | #222 or #fff as needed
**Buttons** | Must have a hover transition of some kind
**Color Scheme** | #585858 (gray), #f25f25 (orange), #25b8f2 (blue)
<br>

In addition, the following features must be included:

- Title in the browser tab should be "Magic 8-Ball"

- An appropriate favicon

- Must be responsive to a minimum viewport width of 320 px.

Again, anything not specified above will be left to your discretion, but use common sense. For example, this is a Magic 8-Ball app. Choosing an image of a puppy, while cute, does not follow the spirit of the assessment 

#### Functionality Requirements:

Your app will allow a user to enter a question into the text box, click submit, and receive a response. The last ten responses should be saved and available for the user to review.

The response will come from a third-party API in JSON format. You'll need to send requests to the API, parse the responses, and display them to the user. Requests should be made to [this Magic 8-Ball API](https://8ball.delegator.com/). Documentation is available on their site for you to use should you need it.

Your app must also do the following:

- **It must handle errors gracefully.** Specifically, if the API is unreachable or doesn't return a response, the app should not break. If the user submits blank input, the app should not send a request. It should notify the user as appropriate.

- **It must verify that the user input is a question.** Making sure that the user input ends in a question mark will be sufficient. It should notify the user if the input is invalid.

- **It must display a loader or an animation during requests that ends when a response is received.** This could be a spinner or a custom animation, as long as it shows and hides correctly for optimal user experience.

- **It must display the response to a user's question after every request.** The query result area can initially be blank, but it should always have a response in it after the first response is received.

- **It must have a history feature.** After the user clicks the "Show History" button, a pop-up should appear that contains the last 10 results (or the current number of results, if there are less than 10). The latest result should be first in the list. History _does not_ need to persist between page reloads.

#### Bonus Features:

If you have extra time you may also add other features for extra consideration. Not including them will not count against you in any way. Three example suggestions we have are:

- improve the functionality of the history feature: add a "clear history" button to the pop-up, or include a way for users to see the question associated with a response in the history, etc.

- unique animations or Easter eggs

- some basic unit tests for your application

Please note that if you choose to include unit tests, any testing libraries you choose to use _will not_ count against you in terms of third-party packages.

If you're feeling creative, you may also implement your own bonus features. If you do, they should be in the spirit of making the app easier or more fun for the user.

#### Submission

Once your assessment is complete, you may:

**a.** host it on your personal GitHub, **or**

**b.** zip your project (if you have a `node_modules/` directory, please remove it before doing so) and host it anywhere we can easily grab it (Google Docs, Dropbox etc). 

 Then, send a response to your recruitment contact saying you've completed the assessment, and include the link to your GitHub/zip file and any relevant instructions for building/viewing your project.

Thank you for considering company, we're looking forward to seeing your project!

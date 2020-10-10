# Book Directory System
This is a Node.js & Express.js API used in managing a book directory system with the help Cloudinary for storing image (book cover) and MongoDB's Mongoose for storing data to the database also HATEOAS was implemented to make this API more understandable and descriptive.

*This API is used in storing and managing books data such as book title, author, short description of what the book is all about, also the time it was uploaded at into a mongoDB's mongoose server including uploading of book cover (image file, supported format .jpg/.jpeg/.png/.gif) to my cloudinary library.*

## Note that this is the frontend which is easy to use as the APIs have been properly used, the below documentation states how to use the APIs.

**<u>How The API Works</u>**

NB: You may need Postman application to completely make use of this API.

- Users are able to see all uploaded books stored in the database using the API link below.
    - Visit https://book-directory-system-api.herokuapp.com/api/books (this is the default link for retrieving all the books that has been uploaded to the server using a **GET** http verb)

- Users are able to upload their favourite books into the database through the API link below.
    - Visit https://book-directory-system-api.herokuapp.com/api/books (this is the default link for uploading new books that into the server using a **POST** http verb), below are the required inputs in the request's body to store your favourite book.
        - title, description, cover_image, author
        - These required inputs should look like the json example below
        - {
            "title": "New book",
            "description": "This is a new book, just for test purpose.",
            "cover_image": "Explained Below",
            "author": "Stanley"
        }

        The "cover_image" value "Explained Below" needs to be replaced by location path of your favourite image's cover, e.g. **C:/username/Desktop/image.jpg** or a link to any image file uploaded online already, e.g **https://website.com/kdk.jpg**
        
        NB: Your favourite image's cover must be either in a .jpg/.png/.jpeg/.gif format as that is what is currently allowed to be uploaded by me.

- Users are able to preview a particular book once they have gotten the book's unique ID after uploading it or after seeing it from the display of all books that have been stored. Below is how you can achieve this.
    - Visit https://book-directory-system-api.herokuapp.com/api/books/:id (in this link you need to replace **:id** with the unique ID you had gotten earlier.) using a **GET** http verb.
    - Now it would look like this: **https://book-directory-system-api.herokuapp.com/api/books/5f6533aee0b6d20d7470d385**

- Users are able to delete a particular book if they don't like them, remember this API is free so its books can be deleted, this is just an API for test purposes. Below is how you can achieve this.
    - Visit https://book-directory-system-api.herokuapp.com/api/books/:id (in this link you need to replace **:id** with the unique ID you had gotten earlier.) using a **DELETE** http verb, then the book is gone.

- Users are able to control how many books they would want to see in a particular page load. Below is how to do it.
    - Visit https://book-directory-system-api.herokuapp.com/api/books?page=1&limt=5
    - Here the **page**'s value = **1** which means that the user would want to see only the first page (just numerically), also the **limit**'s value = **5** which means that the user would want to see the just 5 books in page one.
    
    NB: These books are not sorted, they display starting from the old - new ones that have been uploaded.

- Now, a user might want to sort these books to his/her taste though this API only allows the users to sort these books using the book's title or author's name. Below is how to do this.
    - Let say a user wants to sort according to the author's name in descending order.
    - He/she has to visit https://book-directory-system-api.herokuapp.com/api/books?page=1&limit=5&sortBy=author&sortMode=desc (This displays a total of 5 books in the first page sorting them according to author's name in alphabetical order and in a descending manner).

- Below are more examples of sorting these books.
    - Visit https://book-directory-system-api.herokuapp.com/api/books?page=1&limit=7&sortBy=author&sortMode=asc (This displays a total of 7 books in the first page sorting them according to author's name in alphabetical order and in an ascending manner).

- Now lets sort our books using it's title.
    - Visit https://book-directory-system-api.herokuapp.com/api/books?page=2&limit=3&sortBy=title&sortMode=asc (This displays a total of 3 books in the second page sorting them according to the book's title in alphabetical order and in an ascending manner).
    
    - Visit https://book-directory-system-api.herokuapp.com/api/books?page=1&limit=4&sortBy=title&sortMode=desc (This displays a total of 4 books in the first page sorting them according to the book's title in alphabetical order and in an descending manner).

# Thank You


<br/><br/><br/><br/><br/><br/>
# More Details About The Tools Used (Insight)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

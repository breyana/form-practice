# form-practice

Build a basic web app using Express which can send data to the server via an HTML `<form>` element. You will be required to create two simple pages on the app. The mockups are provided below

#### Form Get Page

The `action` property of the form should be set to `/submit-form`

![form-get](https://curriculum.learnersguild.org/modules/Posting-Data-To-The-Server-With-A-Form/data/form-get.png)

#### Form Post Page

The `action` property of the form should be set to `/submit-form`

![form-post](https://curriculum.learnersguild.org/modules/Posting-Data-To-The-Server-With-A-Form/data/form-post.png)


#### Server Routes

The server should have the following routes:
1. A route to render the `/form-get` page
    - url: `/form-get`
    - http method: `GET`
    - response: renders the `<form>` with method set to `GET`, and `action` set to `/submit-form`.
1. A route to render the `/form-post` page
    - url: `/form-post`
    - http method: `GET`
    - response: renders the `<form>` with method set to `POST`,  and `action` set to `/submit-form`
1. A route which handles the form submissions
    - url: `/submit-form`
    - http method: `ANY`
    - response: returns a JSON response of the request's body params and the request's query params
    - example response: `{"body-params": {"artist": "bonobo", "country": "uk"}, "query-params": {}}`

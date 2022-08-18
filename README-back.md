# API-Solo-Project
This Repo was created during my time as a student at Code Chrysalis.
Thank you for let me have a chance to create full-scratch back-end app!
It was so struggleful but exciting moment for me.
## about this app
This app is named "__Stacked__", that can manage your stacked games, books, etc.
 (We call them "積ん読" or "積みゲー" in Japanese)
## requirements
Please install these applications beforehand.

[postgresql](https://www.postgresql.org/)

[node.js](https://nodejs.org/)

### Database: postgresql
Create a database on postgresql, and set a _.env_ file to the root directory.
```
DB_USER=yourname
DB_NAME=api_solo_project
```
## how to install this app
1. clone this repository
    ```zsh
    $ git clone git@github.com:tamaroh/API-Solo-Project.git
    ```
1. Go into the repository
    ```zsh
    $ cd api-solo-project
    ```
1. Install dependencies
    ```zsh
    $ npm i
    ```
4. Run migrations and set up the database
    ```zsh
    $ npm run migrate
    ```
5. Run the app
    ```bash
    $ npm run start
    ```
### end points
You can use these end points with some HTTP client such as [Thunder Client](https://github.com/rangav/thunder-client-support).
| method | end point | description |
|------- | --------- | ----------- |
|GET|/category|get all the categories data|
|GET|/category/{id}|get a category data by id|
|GET|/item|get all the items data|
|GET|/item/{id}|get an item data by id|
|POST|/item|add an item|
|FETCH|/item/{id}|edit an item by id|
|DELETE|/item/{id}|delete an item by id|

## features planned (in progress)
- [ ] edit category data
- [ ] front end (react)
- [ ] refactor using TypeScript


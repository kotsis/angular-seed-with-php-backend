# Angular seed with php backend
This project is an Angular 5 based seed project with Bootstrap theme and a php API on the backend. The AngularJS seed project has been an inspiration.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3 for Angular 5.

1. Bootstrap enabled with a top menu.
2. Login popup in secondary route.
3. PHP placeholder API for user management e.g. login, logout
4. Protected route for logged in users only.

## Requirements
You need locally **php**, **composer**, **node**, **npm** and **@angular/cli**

## Usage for development
Clone the project locally: `git clone git@github.com:kotsis/angular-seed-with-php-backend.git`

`cd angular-seed-with-php-backend/api`
`composer install`
`cd ..`
`npm install`
`npm start`

Now you can view the application in [localhost:4200](http://localhost:4200) and the API runs in [localhost:8000/api/](http://localhost:8000/api/)


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Angular for production

Run `ng build` to build the Angular project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Run `composer install` in `api/` directory and serve this directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



# Vortex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server mock

For mocking http request, npm package json-server is used. In order to run it while app is open, you should start running it in separate terminal via this command:

<code>npx json-server db/genres.json</code>

This should start mock server with .json format response of genres list. To learn more about this package, you can read <a href="https://www.npmjs.com/package/json-server">json-server</a>

## Styling

CSS framework used for styling templates in this app is <a href="https://semantic-ui.com/">Semantic UI</a>. For additional styling in paralel, custom css styles are created, stored inside of src/styles folder and
implemented inside templates in format of helper classes (e.g flex)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

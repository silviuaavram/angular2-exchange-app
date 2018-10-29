# ExchangeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

Separated the app into components. The form component will receive user input and will call the changeRate() method received from the main component.

The method changeRate() will use the bank service to make a fetch call to the bank. In the then() chained after the fetch promise,
the provided callback function is called with the results. This callback will use the bank results to create the 5% buy and sell rates,
and will also mark each rate as highlighted if it's in the dropdown.

The calculated rates are passed to the rates component, which will display them in a table. Depending on the local sort boolean, it will display them
ascending or descending. There is also a click handler chained to the arrows of the Currency table header, that changes the boolean and also re-performs
the sort.

CSS styling are mainly to make the app as resembling to the redlines provided as possible, but since there were no specific design requests, these are
pretty basic. I added a bit of responsiveness to the layout, and added both the form and the rates to the same column on screen size less than 600px wide.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

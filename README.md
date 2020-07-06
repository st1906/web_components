# Web Components

Repository of final thesis project on topic of Web components.

## Project structure

The project contains three repos:
- component-library-stenciljs - a collection of web components
- react-app-example - demo React app for web components integration
- vue-app-example - demoa Vue app fro web components integration

The React and Vue app consume the components library locally using `yalc`.


## Starting the application

    
    git clone the repository

    cd web_components

    // React app
    cd react-app-example
    yarn install
    yarn start

    // Vue app
    cd vue-app-example
    npm install
    npm run serve

    // Componenents library
    cd components-library-stenciljs
    npm install
    npm run start

### Notes:
Vue app requires API key set in .env as

    VUE_APP_SPOONACULAR_API_KEY=


## Projekt za završni rad na temu Web komponenti

Projekt se sastoji od tri repozotorija:
- component-library-stenciljs - kolekcija web komponenti
- react-app-example - demo React aplikacija za integraciju web komponenti 
- vue-app-example - demo Vue aplikacija za integraciju web komponenti

React i Vue aplikacije koriste lokalno dostupan paket naše kolekcije koristeći `yalc` alat.


## Pokretanje aplikacije
    git clone the repository

    cd web_components

    // React app
    cd react-app-example
    yarn install
    yarn start

    // Vue app
    cd vue-app-example
    npm install
    npm run serve

    // Componenents library
    cd components-library-stenciljs
    npm install
    npm run start

### Napomena:

Vue aplikacija zahtijeva API ključ postavljen u .env fajlu

    VUE_APP_SPOONACULAR_API_KEY=
# comments-react

A simple comments list app built with React and Webpack

## Requirement

- Node `^6.x.x`
- yarn `>= ^1.x.x` or npm `>= ^3.x.x` 

## Getting started

First, clone the project:

```bash
$ git clone git@github.com:infantito/skeleton-webpack-react.git <project-name>
$ cd <project-name>
```

Then, install the dependencies. It is recommended to use Yarn, (because it is blazing fast). You can still use npm as well.

```bash
$ yarn install # or npm install
```

## Script usage

You can execute the scripts below by `yarn run <script>` or `npm run <script>`.

| Command | Description                                                   |
|---------|---------------------------------------------------------------|
| start   | Starts webpack development server; served at `localhost:8080` |
| build   | Bundles the source in `~/build` directory                     |

## Directory structure

```
- config               # webpack configuration files
- public               # directory for index.html and favicon
- src                  # application source code 
----- components       # directory for presentational components
----- containers       # directory for container components
----- images           # directory for images
----- styles           # directory for appliaction styles (in pcss format)
--------- base         # global styles
--------- components   # styles for each components
--------- utils        # styles for variables
--------- vendor       # styles for vendors
```

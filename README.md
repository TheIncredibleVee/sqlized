
<h1 align="center">
  <img src="./assets/logo.png" alt="downshift logo" title="downshift logo" width="300">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Easy to use, flexible, and user-friendly SQL running app with voice command support</p>
<hr />
[Demo]
[Build Status][build]
[Code Coverage][coverage]
[downloads][npmcharts] [version][package]
[MIT License][license]

## The problem (Outline)

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

## This solution

The app offer a react UI-UX experience coupled with a bunch of cool and exiting features to that comes in handy and make the entire process of writing and implementing SQL queries seamless, easy, interactive and handy. Some of the MSP's are mentioned below.

- [Multiple Text Editor][useselect-readme] for a wide range of users, starting from absolute beginnner to advanced.
- [Table Options][combobox-readme] for sorting, editing and pagination of rows to better understand the data.
- [Multiple Themes][multiple-selection-readme] for rich and worthy user experience


### SQLized

This is a app that takes in SQL queries fro the user and executes the commands and return display's the output in a well formatted tables.

> NOTE: The original use case of this app is to execute SQL queries, however this is also 
> powerful and flexible enough to work on tables alone, edit Records and much more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Feature](#features) 
    - [Multiple Editors](#multiple-editors)
    - [View History](#view-history)
    - [Table Options](#table-options)
    - [Voice Recognition](#voice-recognition)
    - [ToolBox Options(Cut, Copy, Clear, Upload, Download)](#toolbox-options)
    - [Theming](#theming)
- [Tech Stack](#tech-stack)
- [Packages and Libraries](#packages-and-libraries)
- [Speed](#speed)
- [Optimizations](#optimizations)
- [Future Scope](#future-scope)
- [FAQ](#faq)
- [Inspiration](#inspiration)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is made via [yarn][yarn] which is bundled with [Vite][vite]. To install the app simply run the following command:

```
yarn 
```

## Usage

Try out the app which is available to try using the link mentioned below:(Deployed using [Vercel][vercel] )
> [Try it out in the browser][code-sandbox-try-it-out]

There is also an [example without getRootProps][code-sandbox-no-get-root-props].

> Warning: For best User Experience, visit the website on `Desktop`.

## Demo

Below is a Gif demonstracting the app and it's various features that are available for the users to try out.

<img src="./Screenshots/rec.gif">


## Features

Below I've provided all of the features for the app and also mentioned their limitations

### Multiple Editor

So, the choice of using muliple text editor is based on the fact that there is a lot of diversity in the data Science field, there are people ranging from beginners to advanced level. So, in order the curate this wide variety of user base, there are mainly 4 different text editor for the user to enter their queries.

#### [Code Mirror Editor][code-mirror-editor]

Aimed for the more intermediate and advanced users who are comfortable writing code, have worked on IntellSense based Text editors and want to use use shortcuts to perform actins more quickly and efficiently.

Below is a screenshot of the editor.

<img src="./Screenshots/static/code-mirror.png" />

#### [Auto Complete Editor][react-auto-complete]

This is a simple text based input field for those users that don't want a full fledged code editor but still wants the feature of auto complete in the input field.

Below is a screenshot of the editor.

<img src="./Screenshots/static/auto-complete.png"/>

#### Guided Editor

This is a custom made editor just for the most basic user and beginners who have hard time remembering the syntax and have to keep looking at tha manual time after time. Using this user won't have to switch between the the docs and the site. They can just focus on the understand the concpets and implementing the SQL queries without woring about refering the docs again and again. 

Below is a screenshot of the editor.

<img src="./Screenshots/static/guided-editor.png"/>

#### [VS Code (Monaco) Editor][monaco-editor ]

One of the most popular and most used text-editor out there. For a lot of folks into this industry they have been using VS Code for a long time and are used to working on it. Most users would prefer this based on their prior experience with VS Code.

Below is a screenshot of the editor.

<img src="./Screenshots/static/monaco-editor.png"/>

### View History

This feaure is added to view the user's history of queries that he/she have executed. Currently it is stored in localStorage and would reset on hard reload or manual deletion. There are plans to adding this to a Database that is tied up to each user in their dashboard.
Anyone can download the history in .sql file.

Below is a screenshot of the editor.

<img src="./Screenshots/static/view-history.png"/>

### Table Options 

In order to better understand the data stored in form of tables, there are a few optinos provided to the user in terms of Tables. These are

- [Pagination]
- [Edit Tables Cells]
- [Sorting Records based on a Column]

### Voice Recognition

This is still in testing and limited to a few queries for now. This is based on the same idea about ease to use as was for the [Guided Editor][guided-editor]. One can just use this app while dowing other things on the side, say having lunch, etc.

### ToolBox Options(Cut, Copy, Clear, Upload, Download, Paste, Execute)

This is by far one of the most basic and useful feature that is missing in most of the basic apps out there. Options that have been implemented includes:

- [Copy]
- [Paste]
- [Clear]
- [Upload]
- [Download]
- [Execute]

### Theming

Themes help to enhance the overall UI-UX of an app and make it more attractive and hence bringing more user base to try out the app.

- [Light]
    - [Light]
    - [Bee]
- [Dark]
    - [Dawn]
    - [Midnight]
    - [Cool]
    - [pale]

## Tech Stack

This app is primarily based on [React][create-react-app] while build with [Vite][vite] instead of the default [Webpack][webpack] out there, as Vite is better in terms of speed and performance. Also, instead of using typical npm, have used yarn while making the app. Not toh mention that for managing state have used Context API as the project size was small. Later on adding complexity might call a need for Redux.

> Node version used - `14.0.0`

## Packages and libraries Used

Below is a list of all the Packages and libraries used for making the app.

### [Alan AI + Alan studio][alan-ai] - `1.8.34`

Used for the purpose of proving the voice input functionality to the user.

### [Code Mirror][code-mirror] - `4.9.3`

Used to provide a rich text editor for intermediate and advanced level users. Auto complete and color formatting provided for SQL.

### [Headless UI][headless-ui] - `1.6.4`

Used for the purpose of providing beautiful UI component and functionality.

### [Monaco Editor][monaco-editor] - `4.45`

Used for taking input from the users familiar with VS Code. Color Formatting Provided for SQL

### [Hero Icons][hero-icons] - `1.0.6`

Used for the purpose of providing beautiful UI components and Icons.

### [React Maker][react-autocorrret-input] - `1.0.2`

Used for provideding input field that has custom auto complete dropdown. 

### [TailWind CSS][tailwind] - `3.1.3`

Used for designing and making the UI more appealing.

### [VechaiUI][vechai-ui] - `0.2.2`

Used for most part of the app to provided customized theming and lot of UI components.

### [AG Grid Commpunity][ag-grid-community] - `27.3.0`

Used for displaying the tables, sorting them, editing and adding pagination.

### [Papa Parse][papa-parse] - `5.3.2`

Used for parsing the excel and csv files uploaded by the users and extract information need.

### [React Icons][react-Icons] - `4.4.0`

Used for the purpose of providing beautiful UI components and Icons.

## [Speed]

Page Load time is coming somewhat around decent as compared to other such similar react app apps with similar functionality. Used a couple of speed testing websites to check the matrix whose Screenshots have been provided below.

Give the fact that the app has [Alan AI Voice Recognition][alan-ai] and [AG Grid Commpunity][ag-grid-community] that have their own complexities, the speed of the website comes out to be really good.

<img src="./Screenshots/static/speed1/png">

<img src="./Screenshots/static/speed2.png">

## [Optimizations Done]

Used useMemo and useCallback hooks for memorization puropse in a lot of places. Moreover, choose Vite over webpack also grave a much needed boost to the final speed of the app. Using gobal variables only when necessary. Will be doing more optimizations like re-reselect, lazy Loading plus using cache memory proficiently.


## Future Scope

In addition to improving the alreay implemented features, am also looking forwards towards adding the backend, creating a dashboard for the user and adding plans based on which they can make limited calls per day, adding visualization for the tables, plus adding login and signup routes as well. Not to forget to mention to make the app more responsive that it currently is.


## [Contributors](#contributors)

[TheIncredibleVee]


## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://www.github.com/theincrediblevee"><img src="https://avatars.githubusercontent.com/u/39600438?v=4" width="100px;" alt=""/><br /><sub><b>TheIncredibleVee</b></sub></a><br /><a href="https://github.com/sqlized/commits?author=theincrediblevee" title="Code">💻</a> <a href="" title="Documentation">📖</a> <a href="" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="" title="Tests">⚠️</a> <a href="" title="Reviewed Pull Requests">👀</a> <a href="#blog-kentcdodds" title="Blogposts">📝</a> <a href="" title="Bug reports">🐛</a> <a href="#example-kentcdodds" title="Examples">💡</a> <a href="" title="Ideas, Planning, & Feedback">🤔</a> <a href="s" title="Talks">📢</a></td>
</tr>
</table>

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[react-badge]:
  https://img.shields.io/badge/%E2%9A%9B%EF%B8%8F-(p)react-00d8ff.svg?style=flat-square
[react]: https://facebook.github.io/react/
[gzip-badge]:
  http://img.badgesize.io/https://unpkg.com/downshift/dist/downshift.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]:
  http://img.badgesize.io/https://unpkg.com/downshift/dist/downshift.umd.min.js?label=size&style=flat-square
[unpkg-dist]: https://unpkg.com/downshift/dist/
[module-formats-badge]:
  https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square
[spectrum-badge]: https://withspectrum.github.io/badge/badge.svg
[spectrum]: https://spectrum.chat/downshift
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[ryan]: https://github.com/ryanflorence
[compound-components-lecture]:
  https://courses.reacttraining.com/courses/advanced-react/lectures/3060560
[react-autocomplete]: https://www.npmjs.com/package/react-autocomplete
[jquery-complete]: https://jqueryui.com/autocomplete/
[examples]:
  https://codesandbox.io/search?refinementList%5Btags%5D%5B0%5D=downshift%3Aexample&page=1
[yt-playlist]:
  https://www.youtube.com/playlist?list=PLV5CVI1eNcJh5CTgArGVwANebCrAh2OUE
[jared]: https://github.com/jaredly
[controlled-components-lecture]:
  https://courses.reacttraining.com/courses/advanced-react/lectures/3172720
[react-training]: https://reacttraining.com/
[advanced-react]: https://courses.reacttraining.com/courses/enrolled/200086
[use-a-render-prop]:
  https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
[semver]: http://semver.org/
[hooks-readme]: https://github.com/downshift-js/downshift/blob/master/src/hooks
[useselect-readme]:
  https://github.com/downshift-js/downshift/blob/master/src/hooks/useSelect
[combobox-readme]:
  https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox
[multiple-selection-readme]:
  https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection
[bundle-phobia-link]: https://bundlephobia.com/result?p=downshift@3.4.8
[aria]:
  https://www.w3.org/TR/wai-aria-practices/
[combobox-aria]:
  https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
[select-aria]:
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
[docsite]: https://downshift-js.com/
[code-sandbox-try-it-out]:
  https://codesandbox.io/s/github/kentcdodds/downshift-examples?file=/src/downshift/ordered-examples/00-get-root-props-example.js
[code-sandbox-no-get-root-props]:
  https://codesandbox.io/s/github/kentcdodds/downshift-examples?file=/src/downshift/ordered-examples/01-basic-autocomplete.js

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square[coc]: https://github.com/downshift-js/downshift/blob/master/CODE_OF_CONDUCT.md

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/downshift-js/downshift/validate?logo=github&style=flat-square
[build]: https://github.com/downshift-js/downshift/actions?query=workflow%3Avalidate+branch%3Amaster
[coverage-badge]: https://img.shields.io/codecov/c/github/downshift-js/downshift.svg?style=flat-square
[coverage]: https://codecov.io/github/downshift-js/downshift
[version-badge]: https://img.shields.io/npm/v/downshift.svg?style=flat-square
[package]: https://www.npmjs.com/package/downshift
[downloads-badge]: https://img.shields.io/npm/dm/downshift.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/downshift
[license-badge]: https://img.shields.io/npm/l/downshift.svg?style=flat-square
[license]: https://github.com/downshift-js/downshift/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[chat]: https://gitter.im/downshift-js/downshift
[chat-badge]: https://img.shields.io/gitter/room/downshift-js/downshift.svg?style=flat-square

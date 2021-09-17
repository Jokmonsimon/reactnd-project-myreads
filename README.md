# React Nano Degree - MyReads Project

MyReads is a simple cataloging app that allows user to place books in one of the three shelves.

### Currently Reading
### Want to Read
### Read

It also allow user to search for books based on title or author. 
Then, the user can move books to any of the three shelves `Currently Reading, Want To Read or Read`.
User can move books from one shlef to another.

## Project Re-submission

After my first project was rejected because of plargarism, I clone the project starter code and planned on the best way to tackle the project with my own codes while refering to online resources as well as to get assistance where I am not understanding from udacity chat board. 
I re-submitted the project for the second time and third time, positive feedbacks were given with 7 areas and 3 areas to improve on respectively. So, this was my fourth submission which I am submitting with confident I have met all the project requirements. 
In line with the comments from the Reviewer, I started again from scratch to get to known much deeper what each components and props are doing. All resources used are referenced at the bottom. 
I must say thank you to `Abiodun A` who stood by me all these time until now. He helped explain how to go about the search functionality when I was stuck. He further helped me for the second time working on the feedbacks. Thank you very much my brother for your positive response despite your tight schedules when I requested for help from the chat board. I would have done what I did before submitting the first plazarized work. However, the feedbacks have benefited me alot to start from scratch writing my own code. Though I still have alot to learn.
I am very much thankful for all the three reviewer who took their time to review my work professionally with detailed explanation on areas which needed correction and suggestions on areas that needs improvement. Without your positive feedbacks and comments, suggestions, I would have not reached where I am now. I look forward to working on more comments and suggestions you will be making to make this project stand out from the crowd. I was more inspired when I got appreciation from one of the reviewes for using React Hook. This inspired me to dig deep from the link he provided [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks). This resource was very helpful.

## Ways I Tackled the Project
1. As the static template came with starter code, I divided the project into components.
2. I created myreads_components directory. Inside the directory, I created Header.js, Book.js, BookShelves.js and BookShelf.js files.
3. I restructured the static code into reusable components as presented below. 

## How I Planned and Refactored MyReads App for the `Third Re-submission`
![MyReads](https://user-images.githubusercontent.com/65468830/133355376-06288d69-f6b6-48df-8df1-30af8ab2aa53.jpg)

## State Management
1. The first thing I did was to modified App.js file in order to be able to change book from one shelf to another.
2. This made me to update the version of react from 16.6.3 to 16.8.0. This was beacuse the starter project code came with the old version of react which does not support use of useState() method.

## Installation

Clone the repository, change directories, and use NPM to install the dependencies.

```bash
$ git clone https://github.com/Jokmonsimon/reactnd-project-myreads.git
$ cd reactnd-project-myreads
$ npm install
```

## Usage

The project can be run with

- `npm start`

The project can be viewed in the browser at

- [http://localhost:3000](http://localhost:3000)

## References
The following resources were very helpful to me during the project. Without them, this project would not be a success. These contents gave me root understanding of React Hooks. I will continue building from here to reach my dream. It has really been so inspiring to have written my first own react app.
1. [Udacity MyReads #1 - How to Plan and Refactor your React App](https://youtu.be/DNdZ3-MiF1E)
2. [Udacity MyReads #2 - React State Management](https://youtu.be/dM_Qp11yv80)
3. [Udacity MyReads #3 - How to Work with API in React](https://youtu.be/MR5b3AbTW8g)
4. [Udacity MyReads #4 - React Search Functionality](https://www.youtube.com/watch?v=F3RTUOJR_g0)
5. [Udacity MyReads #5 - React Router](https://www.youtube.com/watch?v=nV_IlDbaEGM&t=635s)
6. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
7. [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
8. [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks)
9. [Quick Start](https://reactrouter.com/web/guides/quick-start)
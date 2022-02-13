# Project Overview

## Project Links

- [Github repo](https://github.com/adkowalkowski/react-api-studio-ghiblist)
deployment link once deployed

## Project Description

This project will function as a to-watch list for Studio Ghibli (SG) movies. Users will be able to: view all SG movies, search SG movies, and add SG movies to a to-watch list. Once movies are on the to-watch list, users can then click a button that adds these movies to a watched list. There will also be an about/how to use page along with a page for users to submit feedback. 

## API

The Studio Ghibli API requires no key. The main endpoint I'll be using is <https://https://ghibliapi.herokuapp.com/films>. This contains an array of 22 items with each item being a distinct movie -- each of these 22 items contains info like the movie name, description, movie poster, release date, etc.... This data will be used to render data in the application. 


```
"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
"title": "Castle in the Sky",
"original_title": "天空の城ラピュタ",
"original_title_romanised": "Tenkū no shiro Rapyuta",
"image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
"movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
"description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
"director": "Hayao Miyazaki",
"producer": "Isao Takahata",
"release_date": "1986",
"running_time": "124",
"rt_score": "95",
"people": [
"https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
"https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
"https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
"https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
"https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
"https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc",
"https://ghibliapi.herokuapp.com/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
],
"species": [
"https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
],
"locations": [
"https://ghibliapi.herokuapp.com/locations/"
],
"vehicles": [
"https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
],
"url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

#### MVP EXAMPLE
- Use Studio Ghibli external api to render data on page
- Allow user to add specific movies to a to-watch list
- Allow users to add movies to a watched list
- React Router implemented to navigate between different application "pages"
- Contain 5 components
- Responsive, mobile first design

#### PostMVP EXAMPLE

- Add some sort of backend so users' to-watch lists are saved even if the appliation is refreshed
- Add a review/notes section so users can add their insights on the movie after watching it
- Add a random movie generator button so users can have the application select what movie they should watch

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | This will include React Router routes and functions for adding and removing movies to the to-watch list | 
| AllMovies | This will render all the movies on the home page | 
| WatchList | This will render the header include the nav | 
| About | This will render the header include the nav |
| Feedback | This will return HTML   |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

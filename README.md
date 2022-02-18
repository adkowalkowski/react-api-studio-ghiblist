# Project Overview
![](https://64.media.tumblr.com/a2c7267b99f34f1e9fbe2ca65f801ae1/3e6a8ea646afc9c3-7e/s540x810/b8533fb27d00270ad68233695f22c48f62a96f14.gifv)

## Project Links

- [Github repo](https://github.com/adkowalkowski/react-api-studio-ghiblist)
deployment link once deployed

## Project Description

This project will function as a to-watch list for Studio Ghibli (SG) movies. Users will be able to: view all SG movies and add SG movies to a to-watch list. Once movies are on the to-watch list, users can then click a button that checks these items off the watch list. There will also be an about/how to use page along with a page for users to submit feedback. 

## API

- [The Studio Ghibli (SG) api](https://ghibliapi.herokuapp.com/) requires no key. The main endpoint I'll be using is <https://ghibliapi.herokuapp.com/films>. This contains an array of 22 items with each item being a distinct movie -- each of these 22 items contains info like the movie name, description, movie poster, release date, etc.... This data will be used to render data in the application. 


```
{
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
},

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile wireframe](https://imgur.com/a/LXEemuZ)
- [Tablet & Desktop wireframe](https://imgur.com/a/fa32W4H)
- [React architecture](https://imgur.com/a/Eh4I1Ek)



### MVP/PostMVP - 5min

#### MVP EXAMPLE
- Use Studio Ghibli external api to render data on page
- Allow user to add specific movies to a to-watch list
- Allow users to check items off the to-watch list
- React Router implemented to navigate between different application "pages"
- Contain 5 components
- Responsive, mobile first design

#### PostMVP EXAMPLE

- Allow users to search for a specific movie 
- Add some sort of backend so users' to-watch lists are saved even if the appliation is refreshed
- Add a review/notes section so users can add their insights on the movie after watching it
- Footer
- Javascript animations

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | Set up app with React Router | 
| Main | Contains routes and movie component content | 
| Header | Renders the nav and header | 
| AllMovies | This will render all the movies on the home page | 
| SingleMovie | Render more information about the movie and include an add to watchlist button |
| WatchList | This will contain a .map to render individual movies that users add to the watchlist  | 
| About | This will return HTML on the homepage that explains the purpose of the application and a brief description of how to use the application |
| Feedback | This will return a Google Form where users can submit feedback  |


Time frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| AllMovies component | H | 5hrs|  |  |
| WatchList component | H | 3hrs|  |  |
| About component | H | 1hr|  |  |
| Feedback component | H | 1hr|  | |
| Navbar | H | 2.5hr|  |  |
| Routes | H | 2.5hr|  |  |
| Add to watchlist method | H | 2hr|  | |
| Remove from to-watch method | H | 2hr|  |  |
| Remove from watchlist method | H | 2hr|  |  |
| Mobile design | H | 4hr|  |  |
| Tablet and desktop design | H | 3hr|  |  |
| Total | H | 28 hrs|  |  |

## Additional Libraries
 Bootstrap, jquery

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

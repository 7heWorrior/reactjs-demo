Objectives:
1. Create a front-end application using any front-end framework (Vue, Angular, React), to display a list with a preview of text from “randomtext.me/api”
2. Upon clicking any list item open a modal to display all the values returned from the api
3. Additionally, display a random image (square size) on each modal from “picsum.photos”
4. Implement a pull to refresh / infinite scroll to load more random list items

ReactJS
Approach:
The approach is pretty basic.
Fetching 10 elements for the list. with each fetch data the image was also fetch simultanously.
on clicking the element, condition was used to expand the clicked element to display further info.
Libraries Used: react-infinite-scroll-component
it allows to fetch more data when reached at the end of the list was quite easy to implement it. It also had pull down to refresh functionally which is implemented but due to no proper documentation wasnt able to work it out properly.


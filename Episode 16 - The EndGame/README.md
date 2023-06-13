question - build youtube clone 

1. requirement clarification 
- what features needs to be build ?

2. discuss tech stack (5 mins)
eg tailwind / css / bootstarp, ts / js , redux / context api

(you should have justification for every tech stack you choose)

data - redux toolkit
for styling - tailwind
for forms ? - formic
for routing ? - react-router-dom
bundler ? - parcel
what testing library - jest, react-testing-library

3. Planning (plan things up) - (5 mins)
- structure and ui design
Header 
----    Hamburger Icon
----    Youtube Logo
----    Search Bar
----    User Icon
Sidebar 
----    Home
----    Shorts
----    Subscription
----    Library
Body 
----    button list(filters)
----    videos

when click on video it will open in new video page
this page will have the same header , videos , suggestions and comments section


The more planning the better code

Components - Header , Sidebar , Body (button list , video container (video card)) , watchvideo component

4. Executing Things Up

npx create-react-app 
setup tailwind



Features Used

- live youtube video api
- tailwind css
- redux-toolkit
- react-router-dom
- search functionality (using youtube search api and debouncing)

Debouncing 

- if we are typing slow - the diff between key strokes is very high
- if we are typing fast - the diff between ket strokes is very less
(from user prospective - if user is typing very fast - that means user knows what exactly to search and does not expects auto-suggestions)

- when user is typing fast - we can skip api call for every key press 
- we can define a timegap 
eg - debouncing in 200ms
if the diff between 2 keystrokes is less than 200 , then skip api call , otherwise make api call.
because every api call is heavy operation(if we reduce api call by few number it will be more performance efficient)

- we can do this using setTimeout()
useEffect(()=>{
    setTimeout(()=>getSearchSuggestions(),200)
},[searchQuery])

key - i
- render the componeent 
- useEffect();
- start timer and make api call after 200ms 

if second key press with within 200ms 

key - ip
- render the component
- useEffect();
- start the new timer and make api call after 200ms 

when another key press is done - it destroys the component and rerender it 
when the component rerenders , we have to claen the timer of the first render

we can do this using return()=>{} inside useEffect

return method is called exactly before component destroyes

useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggestions(),200)
    return () => {
        clearTimeout(timer)
    }
},[searchQuery]) 

so if the diff between two key strokes is less than 200ms then the timer expires before its execution call and hence the api call is skippd

if the diff is greater than 200ms , the timer executes and api call is made




Notes - 
Higher Order Component - that takes component and returns a component




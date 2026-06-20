# My React 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification (of files)
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Eror Handling
- Also run on HTTPs
- Tree Shaking - removes unused codes
- Different dev and prod bundles


To get rid of command 
npx parcel index.html
Go to package.json and add these in script section:

"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
}

It will help in running short commands such as:
For Dev environment: npm run start (or) npm start
For Prod environment: npm run build


- JSX is not HTML but HTML like syntax for making code less complex and human readable
- JSX is not pure Javascript but we still see desired output because whenever we write any piece of code in JSX, it is transpiled into regular JS function calls before JS engine reads it. Its is managed by PARCEL which uses a package tool 'Babel' during the build process.
- JSX tag attributes synatx are different from HTML tag attributes. Ex: class= "head" is used in HTML and className= "head" is used in JSX 
- JSX => Babel transpiles it into React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
    <h1 className= "head" tabIndex="5">
      I am jsx Heading!    
    </h1>
);

- Component Composition is a way of using one React component inside another React component
- Inside the React elements/JSX section we can invoke any JS code/function enclosed by curly braces { }
- Ex: 
  const number = 1000;

  const ReactComponent = () => (
   <div id= "container">
     <h2> {number} </h2>  // using {} to inject JS
     <h1 className="heading"> Heading </h1>
   </div>
  );




# Food App

/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *      - Restaurant Card (many cards)
 * Footer
 *  - Links
 *  - Copyright
 *  - Contact Us
 *  - Privacy Policy
 *  - Terms of Service
 * 
 */


 - Props (passing props to a component is equivalent to passing arguments to a function)

 - Using map() to loop all restaurant cards at once in a single line of code instead of writing all resaturant cards separately:


<div className="res-container">
  {resList.map((restaurant) => (
    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
  ))
  }
</div> 


Two types of Export/Imports:

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component } from "path";

# React Hooks

(Normal JS utility function) developed by facebook
2 types: 
- useState() used for creating superpowerful react variables.
- useEffect() used to render final DOM content after default body component rendered

- Whenever a state variable updates, React re-renders the component

- useState() syntax

const [listOfData, setlistOfData] = useState("olddata");

- Callback functions inside useEffect() will be rendered after the body component will be rendered.

- useEffect() syntax

useEffect(() => {console.log("useEffect called);}, []);


- Ex: Button toggle effect(Login/Logout)
  
  import { useState } from "react";
   
  const [btnName , setbtnName] = useState("Login");

  <button 
      className="login-btn" 
      onClick = {() => {
        btnName === "Login"
         ? setbtnName("Logout") 
         : setbtnName("Login");
      }} 
    >

      {btnName}
  </button>

- CORS plugin issue resolved: 
  corsproxy.io

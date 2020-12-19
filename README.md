# DataGenius Challenge Front-end

This project is developed using Reactjs library and a free template called Freshshop in order to create a supermarket checkout management solution.
Template link : https://www.free-css.com/free-css-templates/page246/freshshop

## Getting Started

```sh
git clone https://github.com/achsofiene10/Challenge-DataGenius.git
cd Challenge-DataGenius
npm install
npm start
```

Now open [http://localhost:3000](http://localhost:3000).


## Features

This project make you :
  - Visualize products coming from Backend part
  - Add products to cart
  - Remove products from cart
  - Checkout and print the ticket
 
## Projet structure   

This repository is composed of :
- Public folder : which contains template files, images and index.html file the entry point of our application.
- src folder : contains components of our application and the context directory.
- package.json : contains metadata of the project like npm packages installed and project description.
- package-lock.json : indicate modifications made to package.json.
- .gitignore :  specifies intentionally untracked files that Git should ignore.
- README.md : contains information about project files and composition.

## Additionnal installed packages   

**- Axios**
**- html2canvas**
**- pdfmake** 
**- react-router-dom**


## Project components

- App component : App Component is the main component in React which acts as a container for all other components.Also, it contains the router of the application and context component.
- Header component : The component which display the navigation bar.
- Products component : The component responsible to render all products coming from Backend part, it shows the price, picture, discount and the new price and the offer in a product.
- Cart component : shows products added to the cart and order summary.
- Ticket component : display ticket to print after the checkout.

## Application context 

React's context allows sharing data to any component, by storing it in a central place and allowing access to any component that requests it.
We created two files to handle context management : 
- AppContext.js : React component which contains functions to manipulate the global context.
- globalContext.js : file where we create and intialize our context.


## Interfaces screenshots 

<p align="center">
<img src="https://i.ibb.co/c3KgzdC/Products.png" />
</p>


<p align="center">
<img src="https://i.ibb.co/dcKJXWY/Cart.png" />
</p>


<p align="center">
<img src="https://i.ibb.co/LQPFXhx/Ticket.png" />
</p>






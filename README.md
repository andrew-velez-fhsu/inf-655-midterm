# INF 655 Spring 2024 Midterm | Andrew Velez

## Description

This project allows the user to browse, search and purchase products, using React.

Note that since this isn't connected to a live data source, a static list of products is stored in JSON. Since this list doesn't change, it is not included as state.

## Folder Structure

### Components

Contains the shared react components, including

- AddressForm - used to collect shipping information
- CartTotal - a widget to show the value of the cart
- Header - the shared page header
- PaymentForm - used to collect credit card data
- Product - a card that shows a product
- ProductSubTotal - a card to show product order summary
- Review - a component that provides a final check before ordering

### Context

Contains the context used throughout the application

- CartContext - stores the contents of the user's shopping card

### Data

Contains the static data used by the application. These would usually be implemented as APIs

- ProductCatalog.json - an array with the products that are available

### Pages

Contains the pages that are available in the application

- Cart - Shows the items in the cart, along with the subtotal
- Checkout - Handles the checkout process
- Home - The home page
- Product - Shows a products details
- Search - Browse or search for products

## Rubric

### 1. Setup and Basic Components

- Initialize a new ReactJS application using Create React App.
- Create a Product component to display product information: name, image, price, and an "Add to Cart" button.
- Implement a Products component to list available products, utilizing the Product component for each item.

### 2. Advanced Components and State Management

- Develop a Cart component to show items the user intends to purchase, including product name, image, price, quantity, and a "Remove from Cart" button.
- Use React state to manage the items in the cart, implementing functionality to add and remove products.

### 3.Navigation and Routing

- Integrate react-router-dom for navigation, setting up routes for your Home, Product Detail, Search, and Cart pages.
- Ensure smooth navigation within your application without page reloads.

### 4.Context for State Management

- Implement React Context to manage and share state across components, such as the shopping cart's content, avoiding prop drilling for deeply nested components.

### 5.Checkout and Form Handling

- Create a Checkout component with a form for shipping information and order review, displaying cart items and the total price.
- Handle form submissions, clearing the cart upon a successful submission and redirecting the user to a "Thank You" page.

### 6.Styling and User Interface

- Use CSS to style your components, focusing on creating a visually appealing and intuitive interface.

### 7.Project Documentation and Code Quality

- Document your project in a README file, detailing setup instructions, features, and any additional information needed to run and use your application.
- Ensure your code is well-organized, commented, and adheres to best practices for readability and maintenance.

## Evaluation Criteria

- Components, Props, State, Context, Navigation, Forms, CSS Styling (80 points total)
  - 0 points: Missing or incomplete implementation.
  - 5 points: Partial implementation with errors or issues.
  - 10 points: Full and effective use of concepts, with clean and organized code.
- Pages (Home, Product Detail, Search, Cart) (40 points total, 10 points each)
  - Evaluation based on functionality, implementation, and user experience.
- README File (5 points)
  - 0 points: No README or insufficient documentation.
  - 5 points: Comprehensive README with clear instructions and project overview.
- Code Quality and Organization (5 points)
  - Evaluation based on code cleanliness, organization, and adherence to best practices.

// mobile menu funtionality
const mobileMenu = document.querySelector('.mobile_menu');

const toggleMobileMenu = () =>{
    // console.log("clicked");
    mobileMenu.classList.toggle("hidden")
}




// create new product
const products = [
    {
      title: "Jacket",
      description: "Introducing our new jacket, a true embodiment of style, comfort, and functionality. This meticulously crafted piece is designed to elevate your fashion game while providing exceptional warmth and protection.",
      image: "./Images/product1.jpg",
      price: "$100"
    },
    {
        title: "Jacket",
        description: "Introducing our new jacket, a true embodiment of style, comfort, and functionality. This meticulously crafted piece is designed to elevate your fashion game while providing exceptional warmth and protection.",
        image: "./Images/product2.jpg",
        price: "$200"
      },
      {
        title: "Jacket",
        description: "Introducing our new jacket, a true embodiment of style, comfort, and functionality. This meticulously crafted piece is designed to elevate your fashion game while providing exceptional warmth and protection.",
        image: "./Images/product1.jpg",
        price: "$500"
      },
      {
        title: "Jacket",
        description: "Introducing our new jacket, a true embodiment of style, comfort, and functionality. This meticulously crafted piece is designed to elevate your fashion game while providing exceptional warmth and protection.",
        image: "./Images/product2.jpg",
        price: "$200"
      },
    
  ];
  
  // Get the parent element where you want to append the product elements
  const parentElement = document.querySelector(".AllProducts");
  
  // Generate the HTML elements for each product using map
  const productElements = products.map((product) => {
    // Create the parent div element with classes
    const container = document.createElement("div");
    container.classList.add("shadow-sm", "border-b", "border-sky-400", "rounded-lg", "pb-2");
  
    // Create the inner div element with classes
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("flex", "flex-col", "items-start", "gap-2");
  
    // Create the image element
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = "image";
    image.classList.add("rounded-t-lg");
  
    // Create the description container div element
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("flex", "flex-col", "items-start", "gap-2", "px-2");
  
    // Create the title element
    const title = document.createElement("h1");
    title.classList.add("text-lg", "font-medium");
    title.innerText = product.title;
  
    // Create the description element
    const description = document.createElement("p");
    description.classList.add("text-sm");
    description.innerText = product.description;
  
    // Create the price container div element
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("flex", "items-center", "justify-between", "w-full", "border-t", "border-gray-100", "pt-1");
  
    // Create the price element
    const price = document.createElement("div");
    price.classList.add("text-gray-500", "text-md");
    price.innerText = product.price;
  
    // Create the SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke", "none");
    svg.classList.add("w-6", "h-6", "cursor-pointer", "hover:fill-red-500");
  
    // Create the path element inside the SVG
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z");
  
    // button container
    // const buttonContainer = document.createElement("div");
    // buttonContainer.classList.add('flex', 'items-center', 'justify-center', 'w-full')
    // Create the button element
    const button = document.createElement("button");
    button.classList.add("bg-sky-300", "rounded-lg", "shadow-sm", "py-2", "px-8", "font-medium", "border", "hover:border-sky-300", "hover:text-sky-400", "hover:bg-transparent", "w-full");
    button.innerText = "Add to cart";


    // Append the elements to their respective parent elements
    priceContainer.appendChild(price);
    svg.appendChild(path);
    priceContainer.appendChild(svg);

    // buttonContainer.appendChild(button);
  
    descriptionContainer.appendChild(title);
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(priceContainer);
    descriptionContainer.appendChild(button);
  
    innerDiv.appendChild(image);
    innerDiv.appendChild(descriptionContainer);
  
    container.appendChild(innerDiv);
  
    return container;
  });
  
  // Append the product elements to the parent element
  productElements.forEach((productElement) => {
    parentElement.appendChild(productElement);
  });
  



//   Fav onclick event 
const Fav = document.querySelector('.fav');
const FavDiv = document.querySelector('.fav_div');

Fav.addEventListener('click', () => {
    FavDiv.classList.toggle('hidden');
});




// Contact form functionality

let inputArray = [];

    const addToInputArray = (element) => {
        const value = element.value;
        const name = element.name;
        const inputValue = { name: name, value: value };
        
        const index = inputArray.findIndex(item => item.name === name);
        if (index === -1) {
            inputArray.push(inputValue);
        } else {
            inputArray[index] = inputValue;
        }
        console.log(inputArray);
    }

    const Submit = (event) => {
      event.preventDefault();
  }

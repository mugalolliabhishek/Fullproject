export const categories = [
  {
    key: 'pizzas',
    name: 'Pizzas',
    description: 'Wood-fired crusts and melty cheese.',
  },
  {
    key: 'burgers',
    name: 'Burgers',
    description: 'Stacked with premium patties and fresh toppings.',
  },
  {
    key: 'sushi',
    name: 'Sushi',
    description: 'Delicate rolls and sashimi from top chefs.',
  },
  {
    key: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to finish your meal.',
  },
  {
    key: 'salads',
    name: 'Salads',
    description: 'Fresh bowls packed with greens and vibrant toppings.',
    
  },
  {
    key: 'drinks',
    name: 'Drinks',
    description: 'Cold and hot beverages to complement every order.',
  },
  {
    key: 'wraps',
    name: 'Wraps',
    description: 'Handheld wraps loaded with fresh fillings.',
  },
];

export const featuredItems = [
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    category: 'Pizzas',
    price: 14.5,
    description: 'Fresh mozzarella, basil, and tomato sauce on a crisp crust.',
    image: 'https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=7A7_uRfvthKD3VZxM51xtBOeyISeXBhBgXrdOPLco68=',
  },
  {
    id: 'bbq-burger',
    name: 'BBQ Beef Burger',
    category: 'Burgers',
    price: 13.75,
    description: 'Smoky sauce, crispy onions, cheddar cheese, and pickles.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dragon-roll',
    name: 'Dragon Roll',
    category: 'Sushi',
    price: 18.0,
    description: 'Eel, avocado, and cucumber topped with spicy mayo.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chocolate-tart',
    name: 'Chocolate Tart',
    category: 'Desserts',
    price: 7.5,
    description: 'Rich chocolate ganache with a crisp pastry shell.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    category: 'Salads',
    price: 11.25,
    description: 'Crisp lettuce, olives, feta, and a zesty Greek dressing.',
    image: 'https://images.unsplash.com/photo-1692106914247-4f9f1850eeab?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'strawberry-lemonade',
    name: 'Strawberry Lemonade',
    category: 'Drinks',
    price: 5.5,
    description: 'Freshly squeezed lemonade with ripe strawberry flavor.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chicken-wrap',
    name: 'Chicken Wrap',
    category: 'Wraps',
    price: 12.0,
    description: 'Grilled chicken, veggies, and sauce wrapped in a soft flatbread.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
];

export const foodItems = [
  ...featuredItems,
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    category: 'Pizzas',
    price: 15.25,
    description: 'Crispy pepperoni, melting mozzarella, and zesty tomato sauce.',
    image: 'https://media.istockphoto.com/id/1471267168/photo/detroit-style-meat-lovers-pizza.jpg?s=1024x1024&w=is&k=20&c=rcjJxPXw5dMlQwJg_1DQ1AybbLCNMIdg2Y4dQc94UW4=',
  },
  {
    id: 'cheese-burger',
    name: 'Classic Cheeseburger',
    category: 'Burgers',
    price: 13.0,
    description: 'Juicy beef patty with American cheese and special sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'salmon-sushi',
    name: 'Salmon Nigiri',
    category: 'Sushi',
    price: 12.0,
    description: 'Fresh salmon served over seasoned rice.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cheesecake',
    name: 'Vanilla Cheesecake',
    category: 'Desserts',
    price: 8.0,
    description: 'Creamy cheesecake with a graham cracker crust.',
    image: 'https://media.istockphoto.com/id/615247930/photo/creamy-mascarpone-cheese-cake-with-strawberry-and-winter-berries-christmas.jpg?s=1024x1024&w=is&k=20&c=I9AnyH1_7Bno4-vxP_Pj7ruFT4t54lUP4w94Y3KcT6U=',
  },
];

export const restaurants = [
  {
    id: 'urban-pizza',
    name: 'Urban Pizza Co.',
    category: 'Pizzas',
    rating: 4.8,
    description: 'Artisan pies with fresh toppings and a wood-fired crust.',
    image: 'https://images.unsplash.com/photo-1548365328-bff746b0ac87?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'smash-burger',
    name: 'Smash Burger Hub',
    category: 'Burgers',
    rating: 4.7,
    description: 'Handcrafted burgers with sauces and premium buns.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sushi-luxe',
    name: 'Sushi Luxe',
    category: 'Sushi',
    rating: 4.9,
    description: 'Elegant nigiri and specialty rolls prepared daily.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sweet-bite',
    name: 'Sweet Bite Bakery',
    category: 'Desserts',
    rating: 4.8,
    description: 'Decadent pastries, tarts, and dessert boxes to share.',
    image: 'https://images.unsplash.com/photo-1505253216164-2d997106a552?auto=format&fit=crop&w=900&q=80',
  },
  
];

import { rest } from "msw";
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "https://images.unsplash.com/photo-1618163633027-30a494d08cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          desc: " I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan",
        },
        {
          id: 2,
          title: "diner double",
          category: "lunch",
          price: 13.99,
          img: "https://images.unsplash.com/photo-1552056776-9b5657118ca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
          desc: " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        },
        {
          id: 3,
          title: "godzilla wilkshake",
          category: "shakes",
          price: 6.99,
          img: "https://images.unsplash.com/photo-1599020792689-9fde458e7e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
          desc: " I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan",
        },
        {
          id: 4,
          title: "Salad",
          category: "lunch",
          price: 12.87,
          img: "https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          desc: " I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan",
        },
        {
          id: 5,
          title: "Tuna Steak",
          category: "lunch",
          price: 16.99,
          img: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          desc: " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        },
        {
          id: 6,
          title: "Yakiniku",
          category: "Dinner",
          price: 15.99,
          img: "https://cdn.tasteatlas.com/images/dishes/8778f2ab8696489d8b8c16fbd7a685e9.jpg?mw=1300",
          desc: "Traditionally, raw, thinly sliced meat and vegetables are brought to the table and grilled by the consumers. The most popular meat for yakiniku includes beef, pork, chicken, and a variety of shellfish. Numerous sauces and dips are usually served on the side - from soy sauce and miso sauce to garlic oil sauce.",
        },
        {
          id: 7,
          title: "Croissant",
          category: "breakfast",
          price: 15.99,
          img: "https://cdn.tasteatlas.com//images/dishes/b075a8fbe7224ef787272cf4d979e388.jpg?w=905&h=510",
          desc: " I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan",
        },
        {
          id: 8,
          title: "Cellophane Noodles",
          category: "Dinner",
          price: 15.99,
          img: "https://cdn.tasteatlas.com//Images/Ingredients/62316f3656f2471d8d636952b7bfe2a8.jpg?w=905&h=510",
          desc: "Also known as Chinese vermicelli and glass noodles, these thin noodles are made from water and starch extracted from mung beans, yams, cassava, or potato. They are characterized by their translucent appearance and extremely mild flavor. Cellophane noodles are often used in soups and stir-fries, but can also be served cold in salads.",
        },
        {
          id: 9,
          title: "Tacos",
          category: "breakfast",
          price: 15.99,
          img: "https://cdn.tasteatlas.com//images/dishes/967fe03b58464dad9f82d91650d98824.jpg?w=905&h=510",
          desc: "  vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        },
        {
          id: 10,
          title: "buttermilk pancakes",
          category: "Dinner",
          price: 15.99,
          img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=932&q=80",
          desc: " A taco is basically anything eaten on a soft tortilla, and there is an infinite variety of them. In Sonora, in the north of Mexico, they eat the classic carne asada - thinly sliced meat grilled over coals and topped with salsa, onions, guacamole, and a lime wedge.",
        },
      ])
    );
  }),
];

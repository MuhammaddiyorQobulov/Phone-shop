import { faker } from "@faker-js/faker";
const products = [
  {
    id: faker.random.numeric(5),
    name: "Apple Watch",
    model: "Series 5 SE",
    imgURL: require("./assets/images/apple-watch.png"),
    rate: faker.datatype.number({ max: 10 }) / 2,
    price: faker.commerce.price(),
    description: faker.random.words(200),
    countOfProduc: 0,
  },
  {
    id: faker.random.numeric(5),
    name: "Sony ZX33OBT",
    model: "Light",
    imgURL: require("./assets/images/Dell-XPS-13-Black.png"),
    rate: faker.datatype.number({ max: 10 }) / 2,
    price: faker.commerce.price(),
    description: faker.random.words(200),
    countOfProduc: 0,
  },
];

export default products;

const faker = require("faker");
const size = ["", "Medium", "Large", "Small"];
const color = ["", "white", "black", "brown", "blue"];
const mockApi = () => {
  return {
    products: {
      record: {
        id: faker.random.number(),
        idCategory: Math.floor(Math.random() * 20),
        img: "bg-gray-img",
        title: faker.random.words(),
        minPrice: (Math.random() * 35).toFixed(2),
        maxPrice: (Math.random() * 100 + 35).toFixed(2),
        isSale: faker.random.boolean(),
        isNew: faker.random.boolean(),
        inStock: faker.random.boolean(),
        isLiked: faker.random.boolean(),
        rating: Math.floor(Math.random() * 5),
        size: size[Math.floor(Math.random() * 3)],
        color: color[Math.floor(Math.random() * 4)],
        quantity: Math.floor(Math.random() * 20),
        amount: 1
      },

      number: 30
    },
    categories: {
      record: {
        img: "bg-gray-img",
        id: Math.floor(Math.random() * 20),
        name: faker.random.words(),
        hasChild: faker.random.boolean(),
        quantity: Math.floor(Math.random() * 50)
      },
      number: 8
    },
    childrenCategory: {
      record: {
        id: Math.floor(Math.random() * 20),
        name: faker.random.words(),
        hasChild: faker.random.boolean()
      },
      number: 5
    }
  };
};

const db = {
  products: [],
  categories: [],
  childrenCategory: []
};
const getFakeData = (db, mockApi) => {
  Object.keys(db).forEach(api => {
    db[api] = [
      ...db[api],
      ...Array(mockApi()[api].number)
        .fill(null)
        .map(item => mockApi()[api].record)
    ];
  });
};

getFakeData(db, mockApi);
console.log(JSON.stringify(db));

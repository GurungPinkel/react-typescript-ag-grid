var faker = require("faker");
var randomName = faker.name.findName();

const generator = async (schema, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() => {
    const number = faker.random.number();

    const dataObj = Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {});

    dataObj.number = number;

    return dataObj;
  });
};

const clientsSchema = {
  id: "{{random.number}}",
  firstName: "{{name.firstName}}",
  lastName: "{{name.lastName}}",
  address: "{{address.streetAddress}}",
  city: "{{address.city}}",
  country: "{{address.country}}",
  phone: "{{phone.phoneNumberFormat}}",
  email: "{{internet.email}}",
  company: "{{company.companyName}}",
};

const init = async () => {
  const data = await generator(clientsSchema, 40, 1000);
  return data;
};

init().then((data) => {
  console.log(data);
});

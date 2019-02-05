const faker = require('faker');

module.exports = {
  fakeProfile() {
    return {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: 'Kopcdr',
      phoneNumber: '+380995786675',
      city: faker.address.cityPrefix(),
      country: faker.address.county(),
      gender: 'male',
      birthday: faker.date.past(),
      photo: faker.image.imageUrl(),
      about: faker.random.words(),
    }
  },
  fakeUserData() {
    return {
      login: faker.random.word(),
      password: '1111'
    }
  }
}
const faker = require('faker');

module.exports = {
  fakeProfile() {
    return {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: '+380995786675',
      city: faker.address.cityPrefix(),
      country: faker.address.county(),
      gender: 'male',
      birthday: faker.date.past(),
      photo: faker.image.imageUrl(),
      about: faker.random.words()
    }
  },
  fakeUser() {
    return {
      login: faker.
      password: '1111'
    }
  }
}
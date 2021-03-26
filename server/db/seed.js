const db= require('./db')
const {Campus, Student}= require('./models/Example')
const faker= require('faker')

const  syncAndSeed= async()=>{
    const [Brown, Yale, Harvard, timothee, rihanna, nicki]= await Promise.all([
        Campus.create({name: 'Brown',address: faker.address.streetAddress(), 
    decription: faker.lorem.paragraph()}),Campus.create({name: 'Yale',address: faker.address.streetAddress(), 
    decription: faker.lorem.paragraph()}), Campus.create({name: 'Harvard',address: faker.address.streetAddress(), 
    decription: faker.lorem.paragraph()}), Student.create({firstName: 'Timothee', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 2.0}), Student.create({firstName: 'Rihanna', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 3.8}), Student.create({firstName: 'Nicki', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 3.8})
    ])
}
module.exports= syncAndSeed
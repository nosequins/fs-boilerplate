const db= require('./db')
const {Campus, Student}= require('./models/Example')
const faker= require('faker')

const  syncAndSeed= async()=>{
    await db.sync({force:true})
    const [Brown, Yale, Harvard, Columbia, timothee, rihanna, nicki]= await Promise.all([
        Campus.create({name: 'Brown University',address: faker.address.streetAddress(true), 
    description: faker.lorem.paragraph(3)}),Campus.create({name: 'Yale University',address: faker.address.streetAddress(true), 
    description: faker.lorem.paragraph(3)}), Campus.create({name: 'Harvard Univeristy',address: faker.address.streetAddress(true), 
    description: faker.lorem.paragraph(3)}), Campus.create({name: 'Columbia University',address: faker.address.streetAddress(true), 
    description: faker.lorem.paragraph(3)}),Student.create({firstName: 'Timothee', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 2.0}), Student.create({firstName: 'Rihanna', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 3.8}), Student.create({firstName: 'Nicki', lastName: faker.name.lastName(), email: faker.internet.email(), gpa: 3.8})
    ])
    timothee.campusId= Columbia.id;
    await timothee.save()
    await db.close()
}
syncAndSeed()
module.exports= syncAndSeed
const pack=require('fs');
const { faker } = require('@faker-js/faker');
let names=[];

for (let i = 0; i <= 1000; i++) {
    const randomName = faker.name.findName();
    names.push('Number = '+i,"Name = "+randomName)
}

pack.writeFileSync('fakerRandom.txt',JSON.stringify(names));

console.log('File fakerRandom.txt created');
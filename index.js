const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


const generateImage = ({ text, textColor, shape, shapeColor }) => {
    let shapeObj;
    switch (shape) {
        case 'Circle':
            shapeObj = new Circle();
            break;
        case 'Triangle':
            shapeObj = new Triangle();
            break;
        case 'Square':
            shapeObj = new Square();
            break;
    }
    shapeObj.setColor(shapeColor);


    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
};

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text',
        validate: input => input.length <= 3 || 'Text must be up to three characters.',s
    }, 
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color',
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'Enter shape',
        choice: [
            'Square',
            'Circle',
            'Triangle',
        ]
    }, 
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color',
    },
])
.then ((answers) => {
    const svgContent = generateImage(answers);

    fs.writeFile('logo.svg', svgContent, (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    })
    .catch((error) => {
      console.error('Error generating image:', error);
    });


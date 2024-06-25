
# SVG Logo Maker

This command-line application generates a simple logo in SVG format based on user input for text, color and shape selections.

Repo URL: https://github.com/danielleboe/logomaker

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered



## Video Walkthrough

[![Demo Video](./lib/demo%20screenshot.png)](./lib/LogoMaker%20Demo.mp4)

## Usage

Can be found at https://github.com/danielleboe/logomaker

1. Clone the repository https://github.com/danielleboe/logomaker
2. Run `npm i inquirer@8.2.4`
3. Run `node index.js` and follow the prompts
4. Run `npx jest` for test file

## Example

Generated SVG files are saved in the `examples/` directory.

## Contributors
Danielle Boenisch 
https://github.com/danielleboe
danielleboenisch@gmail.com

## License
MIT License




# My Cook Book

My Cook Book is an app for saving and viewing my favorite recipies, or recipies that I would like to try

## Installation

- download files to your machine.
- in 2 terminals navigate to the my-cook-book folder
- if you have json server installed, skip this step
    - if you do not have json server installed type npm install -g json-server and press enter
    - json-server documents can be viewed at https://www.npmjs.com/package/json-server
- in the first terminal, type json-server --watch db.json --port 3001 and press enter
- in the second terminal, type npm start and press enter
- you can now view my web application

## Support

- there is currently no support for this project

## Roadmap

- add a Footer component
- duplicate, edit, and delete recipies
- add a createdAt key in the db
- add a login feature
- add a favorite recipies button
- I'd like to turn the navbar into a square with three lines that opens the navbar and animates to an x
- add RecipieNotes component
- add a sort feature
- useContext on recipies(maybe)
- figure out why I can't refresh RecipieDetails or go directly there with the link
    - I suspect I need to pass 1 recipie to RecipieDetails
    - but i don't know which recipie to pass until it gets there.
    - maybe useContext will solve this problem
- fix Add recipie redirect(I suspect it's the same issue as above)

## Contributing

I am currently not open to contributers

## Authors and Acknowledgment

All recipies and images in this project are from https://www.lanascooking.com/
I would also like to thank Clue Mediator for their helpful blog on dynamically adding input fields in react

## License

MIT License

Copyright (c) [2022] [Joseph Martin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Project Status

This project is not finished, but I am taking a break. See roadmap for future plans.
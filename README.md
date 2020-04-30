# Coffee Roaster App

This simple app lets you create roasters and create roasters' coffees. It uses a Rails API backend and Javascript frontend. More features will be added for CRUD actions.

## Installation 

To run the app, first git clone the repo to your machine.

    $ git clone git@github.com:93geraldtee/local-coffee-roasters-js.git

Once in the file, run these commands:

    $ cd local-coffee-roasters-js
    $ bundle install
    $ rake db:migrate
    $ rake db:seed

Run the development server:

    $ rails s

Cd into the frontend directory and open the index.html file in your browser:

    $ cd frontend/
    $ open index.html

Then follow the prompts!

To see the api in the browser, go to these urls:

    $ http://localhost:3000/api/v1/roasters
    $ http://localhost:3000/api/v1/coffees


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/93geraldtee/local-coffee-roasters-js. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
Copyright <2020> <93geraldtee>

The gem is available as open source under the terms of the MIT License.

MIT License: https://opensource.org/licenses/MIT

## Code of Conduct
Everyone interacting in the Rails Gratitude Journal project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
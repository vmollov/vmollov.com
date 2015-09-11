This is the code deployed to vmollov.com, my artist website.
The website is an entirely front end based SPA using AngularJS.  This is my first project in the framework as well as my first attempts at using Karma/Jasmine for unit testing and gulp as a task runner.

NOTE: The dist folder contains the minified deployable code.  Use the command gulp prod-server to start a light node based server on port 9009.  
If you would like to play around with the code you will have to create softlinks in app (my file structure in this project leaves a bit to be desired).
On UNIX go to app (cd app) then "ln -s ../dist/assets/ assets && ln -s ../bower_components bower && ln -s ../dist/data/ data".  This will create softlinks to the locations in the project containing the necessary assets.  After that you can just run gulp and render the page on port 9000 of your localhost.

# Isracard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

VER 1.00
========
This app also uploaded and hosted on amazon AWS - for online browse on this link :



App Description :
The user should type in searchbox the github repository term.
The app will listen to typing and will start search action only if term's length  is between 3-10  ,and only when stop styping .

Speical technology used:
using reactive forms , forms validations, observabels, rx/js,  services , css3 

project structure:
app.modules ->
        isracard-service (calls the server app - asp.net webapi hosted on AWS)
        app.component -> (shows all repos component in a css floating style as gallery)
                repos.component (shows the git name, full name + avatar)
        


button 'Bookmark', has not been applyed yet in this version (1.0)
added bookemarked panel (extra feature) ,has not been applyed yet in this version(1.0).

                (c) Elisha Levi 03/2018
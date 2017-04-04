# LANDING PAGE STARTER
Environment for quick start landing page development.

## Environment checking
1. Check, that npm is installed, run this command:  ```npm -v```  
   _(you should see the version of your npm)_
2. Check, that bower is installed, run this command: ```bower -v```  
   _(you should see the version of your bower)_

## Installing

1. Install node packages, run this command: ``npm install``  
   _(for Windows: ``npm install --no-bin-links``)_
2. Install bower packages, run this command: ``bower install``

## Starting
1. Run gulp, run this command: ``gulp``  
   _(you should see starting gulp tasks: 'browser-sync', 'styles', 'scripts', 'images')_
2. Open your site on :3000 port, e.g.: landing-page-starter.local:3000   

## Issues
1. If you have error, like ``Error: Cannot find module``, but this module exists in your package.json, run this command:
   ``npm cache clean``
2. If you have error, like ``Error: ENOENT: no such file or directory, scandir '.../node_modules/node-sass/vendor...'``, run this command:
``npm rebuild node-sass`` _(for windows: ``npm rebuild node-sass --no-bin-links``)_
3. If you have error, like ``npm ERR! Maximum call stack size exceeded``, just run npm installation command again.

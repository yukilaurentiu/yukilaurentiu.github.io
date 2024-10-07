# GitHub Pages

1. Start the Development Server:
``` 
npm start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Build the App for Production:

``` 
npm run predeploy 
```


Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

3. Deploy the App:

```
npm run deploy
``` 
This command runs "gh-pages -d build". \
After the build is complete, it pushes the contents of the build directory to the gh-pages branch of your repository on GitHub, making it available on GitHub Pages.

4. Set Default Branch: 

Ensure that the default branch is set to main for the repository to work correctly with GitHub Pages.

#### See GitHub pages more → [GitHub Pages](https://pages.github.com/)
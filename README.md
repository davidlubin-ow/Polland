# Form-Builder
Hackathon 2019 Project. Builds responsive forms and polls with ease

## How to Use
In your site's javascript, you can create a new form with a single instantiation

```
var form = new FormBuilder(element, options)
```

* element: the DOM element that the form will be appended to
* options: json object with additional parameters

Additionally, there are methods that you can call on your form object for convenience


## How to Run the Demo Site
Prerequisites - both are typically preinstalled in windows 10 machines

* node.js
* npm

In terminal/command prompt, open the Demo folder in the project root, then run the following commands

```
npm install
node app.js
```

If the server starts correctly, you will be able to access the site by opening localhost:8080 in your web browser
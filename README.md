# Form-Builder
Hackathon 2019 Project. Builds responsive forms and polls with ease

## How to Use
In your site's javascript, you can create a new form with a single instantiation

```
var form = new FormBuilder(element, options)
```

* element: the DOM element that the form will be appended to
* options: json object with additional parameters

| Option  | Description | Default Value |
| --- | --- | --- |
| title | (Optional) An identifying title that will be submitted along with the response data |
| questionSource | A path to a json file/endpoint containing question and answer format (see question syntax below). If the file is invalid, the question option will be used instead | undefined |
| questions  | Expects a json object containing question and answer format (see question syntax below). Will not be used if a valid json file is provided to the questionSource option | {} |
| database | The endpoint to which submitted data will be sent in json format (see submission json format for details) | undefined |
| formType | The form can be either a standard form ("form") or a poll ("poll"). The difference between the two is outlined in the Polls section | "form" |
| displayResults | (Only available for polls) If true, the totals of all multiple choice questions will be displayed when the poll is submitted | false |
| resultsSource | (Required if displayResults is true) resultsSource must be populated with an endpoint or file containing a json array of form responses in submission format syntax | undefined |
| submitImmediately | If true, the form will submit as soon as all questions contain an answer. Otherwise, the form will wait for the completion signal from a submit button or javascript call | false |
| onload | A javascript function to be called when the form finished loading | undefined |
| callback | A javascript function to be called upon submission of the form | undefined |
| preset | Can be set to "bootstrap" or "foundation". Automatically applies classnames to style the form for the bootstrap or foundation library | undefined |

Additionally, there are methods that you can call on your form object for convenience

| Function | Description |
| --- | --- |
| load() | Loads (or reloads) the form content |
| submit(answers) | Submits the form with json data (see submission json format for details) |

#### Question/Answer JSON syntax
When building the form, the following syntax must be used, either in the questions option or in a json file specified in the questionSource option

```
[
  {
    type: "multipleChoice|radioButtons|shortText|longText|checkbox",
    id: "Optional question ID that will be submitted along with response data"
    question: "Question text",
    answers (not used for text fields): [
      {
        text: "Answer text",
        value: "Answer value (optional)"
      }
    ],
    cssClasses: [additional css classes for the question can be entered here]
  }
]
```

#### Polls
Polls are simpler than forms and are designed to only accept multiple choice questions. The benefit of using polls is that you can have them display their results after submission, so that the user can see how many people chose the same answers as them.

#### Submission JSON Format
Form submissions will be sent to the endpoint specified in the database option in the following format. Note that the form builder will not sanitize inputs, so you should take the necessary precautions on the backend.

```
{
  title: The form title or null,
  responses: [
    {
      questionText: "Question text",
      id: "Question ID if it was specified",
      answer: {
        text: "Answer text",
        value: "Answer value if specified"
      }
    }
  ]
}
```

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
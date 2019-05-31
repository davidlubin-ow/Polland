document.addEventListener("DOMContentLoaded", function() {

  var questions = [
    {
      "type": "dropdown",
      "id": "q1",
      "question": "How is your day going?",
      "cssClasses": [
        "question1", 
        "q1Styles"
      ],
      "answers": [
        {
          "text": "Great!",
          "value": "3"
        },
        {
          "text": "Good",
          "value": "2"
        },
        {
          "text": "Ok",
          "value": 1
        },
        {
          "text": "Bad",
          "value": 0
        }
      ]
    },
    {
      "type": "radioButtons",
      "id": "q2",
      "question": "iPhone or Android?",
      "answers":[
        {
          "text": "iPhone"
        },
        {
          "text": "Android"
        }
      ]
    }
  ]

  var options = {
    "title": "demo1",
    "questions": questions,
    "database": "/submit",
    "formType": "form",
    "submitImmediately": false,
    "onload": function() { console.log("onload called"); },
    "callback": function() { console.log("callback called"); },
    "preset": "foundation"
  };
  
  var form = new FormBuilder("#main", options);

});
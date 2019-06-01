class FormBuilder{
  constructor(selector, options){
    this.el = document.querySelector(selector);
    if(!selector || !this.el){
      console.error("FormBuilder Error: Either no selector was provided, or the selector is invalid");
      return;
    }
    if(!options){
      console.error("No options have been defined");
      return;
    }
    this.title = options.title || undefined;
    this.database = options.database || undefined;
    this.formType = options.formType || "form";
    if(this.formType == "poll"){
      this.displayResults = options.displayResults || false;
      if(this.displayResults){
        this.resultsSource = options.resultsSource || undefined;
      }
    }
    this.submitImmediately = options.submitImmediately || false;
    this.onload = options.onload || (() => {});
    this.callback = options.callback || (() => {});
    this.preset = options.preset || undefined;
    this.questions = options.questions || [];
    this.load();
  }

  submit(answers){

    this.callback();
  }

  load(){
    if(this.el.tagName.toUpperCase() != "FORM"){
      let newForm = document.createElement("form");
      this.el.appendChild(newForm);
      this.el = newForm;
    }
    for(var i = 0; i < this.questions.length; i++){
      let question = this.questions[i];
      let answers = question.answers || [];
      let qID = question.id || question.question || `q${i}`;
      let outer = document.createElement("div")
      outer.classList.add("formBuilder-question");
      if(question.cssClasses && question.cssClasses.length > 0){
        outer.classList.add(...question.cssClasses);
      }
      if(this.preset == "foundation"){
        outer.classList.add("small-12");
      }else if(this.preset == "bootstrap"){
        outer.classList.add("form-group");
      }
      switch(question.type){
        case "dropdown":
          var label = document.createElement("label");
          label.setAttribute("for", qID);
          var labelText = document.createTextNode(question.question);
          label.appendChild(labelText);
          var select = document.createElement("select");
          if(this.preset == "bootstrap"){
            select.classList.add("form-control");
          }
          select.id = qID;
          for(var k = 0; k < answers.length; k++){
            let answer = answers[k];
            let option = document.createElement("option");
            option.setAttribute("value", answer.value || answer.text);
            let optionText = document.createTextNode(answer.text);
            option.append(optionText);
            select.append(option);
          }
          outer.appendChild(label);
          outer.append(select);
          break;
        case "radioButtons":
          var fieldset = document.createElement("fieldset");
          var legend = document.createElement("legend");
          if(this.preset == "bootstrap"){
            fieldset.classList.add("border", "p-2");
            legend.classList.add("w-auto");
          }
          var legendText = document.createTextNode(question.question);
          legend.appendChild(legendText);
          fieldset.appendChild(legend);
          for(var k = 0; k < answers.length; k++){
            let answer = answers[k];
            let parent = fieldset;
            let inputClasses = [];
            let labelClasses = [];
            if(this.preset == "bootstrap"){
              let wrapper = document.createElement("div");
              wrapper.classList.add("form-check", "form-check-inline");
              fieldset.appendChild(wrapper);
              parent = wrapper;
              inputClasses.push("form-check-input");
              labelClasses.push("form-check-label");
            }
            let input = document.createElement("input");
            let label = document.createElement("label");
            if(inputClasses.length > 0) input.classList.add(inputClasses);
            if(labelClasses.length > 0) label.classList.add(labelClasses);
            input.setAttribute("type", "radio");
            input.setAttribute("name", qID);
            input.setAttribute("value", answer.value || answer.text);
            let answerID = answer.value || answer.text.replace(/[^\w\s]/gi, '-');
            input.id = answerID;
            label.setAttribute("for", answerID);
            let labelText = document.createTextNode(answer.text);
            label.appendChild(labelText);
            parent.appendChild(input);
            parent.appendChild(label);
          }
          outer.appendChild(fieldset);
          break;
        case "checkbox":
          var fieldset = document.createElement("fieldset");
          var legend = document.createElement("legend");
          if(this.preset == "bootstrap"){
            fieldset.classList.add("border", "p-2");
            legend.classList.add("w-auto");
          }
          var legendText = document.createTextNode(question.question);
          legend.appendChild(legendText);
          fieldset.appendChild(legend);
          for(var k = 0; k < answers.length; k++){
            let answer = answers[k];
            let parent = fieldset;
            let inputClasses = [];
            let labelClasses = [];
            if(this.preset == "bootstrap"){
              let wrapper = document.createElement("div");
              wrapper.classList.add("form-check", "form-check-inline");
              fieldset.appendChild(wrapper);
              parent = wrapper;
              inputClasses.push("form-check-input");
              labelClasses.push("form-check-label");
            }
            let input = document.createElement("input");
            let label = document.createElement("label");
            if(inputClasses.length > 0) input.classList.add(inputClasses);
            if(labelClasses.length > 0) label.classList.add(labelClasses);
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", qID);
            input.setAttribute("value", answer.value || answer.text);
            let answerID = answer.value || answer.text.replace(/[^\w\s]/gi, '-');
            input.id = answerID;
            label.setAttribute("for", answerID);
            let labelText = document.createTextNode(answer.text);
            label.appendChild(labelText);
            parent.appendChild(input);
            parent.appendChild(label);
          }
          outer.appendChild(fieldset);
          break;
        default:
          console.error(`FormBuilder Error: Unable to render question ${qID} due to unrecognized question type. Allowed question types are dropdown, radioButtons, checkbox, shortText, longText, label`);
      }
      this.el.appendChild(outer);
    }
    this.onload();
  }
}
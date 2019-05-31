class FormBuilder{
  constructor(el, options){
    if(!el || !document.querySelector(el)){
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
    let rawQuestionData = options.questions || {};
    

    this.onload();
  }

  submit(){


    this.callback();
  }
}
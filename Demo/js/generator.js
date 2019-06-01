$(function(){
   let title = "";
   let questions = [];
   let count = 0;
    // the title updating live
    $("#titleField").keyup(function(event) {
        var stt = $(this).val();
        $("#title").text(stt);
    });

    // first level - sidebar

    $( '#addEmail' ).click(function() {
      $('#form-sample').append('<div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small></div><hr>');
    });

    $( '#addShortText' ).click(function() {
      var question = {"type": "shortText"};  
       var label_name = prompt('Please enter a label name', '');  
      var shortText = document.createElement('input');
      shortText.setAttribute("type", "text");
      shortText.setAttribute("class", "form-control");
      var label = document.createElement('label');
      var name = document.createTextNode(label_name);
      label.append(name);
      question.title = label_name || "";
      questions.push(question);
      count++;
        $('#form-sample').append(label).append(shortText).append('<hr>');
    });

    $( '#addLongText' ).click(function() {
      var question = {"type": "longText"};
       var label_name = prompt('Please enter a label name', '');
         var textArea = document.createElement('textarea');
         textArea.setAttribute("class", "form-control");
         textArea.setAttribute("rows", "3");
         var textAreaLabel = document.createElement('label');
         var textAreaName = document.createTextNode(label_name);
         textAreaLabel.appendChild(textAreaName);
         question.title = label_name || "";
         questions.push(question);
         count++;
      $('#form-sample').append(textAreaLabel).append(textArea).append('<hr>');
     
    });

    $( '#addNumber' ).click(function() {
      
       var label_name = prompt('Please enter a label name', '');
       if (label_name != null) {
              var number = document.createElement('input');
              number.setAttribute("class", "form-control");
              number.setAttribute("type", "number");
              number.setAttribute("placeholder", "Number");
              var numberLabel = document.createElement('label');
              var numberName = document.createTextNode(label_name);
              numberLabel.appendChild(numberName);
           }
      
      $('#form-sample').append(numberLabel).append(number).append('<hr>');
   
    });
    $( '#addDropdown' ).click(function() {
      var question = {"type": "dropdown"};
       var label_name = prompt('Please enter a label name', '');
         
         // add the field
              var multipleChoice = document.createElement('select');
              multipleChoice.setAttribute('class', 'form-control exampleFormControlSelect1');
              multipleChoice.setAttribute("id", count);
              var multipleChoiceLabel = document.createElement('label');
              var multipleChoiceName = document.createTextNode(label_name);
              question.title = label_name || "";
              question.answers = [];
              questions.push(question);
              count++;
              multipleChoiceLabel.appendChild(multipleChoiceName);
       // add option button
                var addOptionButton = document.createElement('button');
                addOptionButton.setAttribute('type', 'button');
                addOptionButton.setAttribute('class', 'btn btn-light btn-sm addOption');
                addOptionButton.setAttribute('style', 'margin-left:2em;');
                var addOptionButtonName = document.createTextNode('Add option');
                addOptionButton.appendChild(addOptionButtonName);     
      $("#form-sample").append(multipleChoiceLabel).append(multipleChoice).append(addOptionButton).append('<hr>');
    });

   $(document).on('click', '.addOption' , function(event) {
               var dropdown = $(event.target).prev();
               var dropdownID = dropdown.attr('id');
               var answer = {};
              var label_name = prompt('Please enter a label name', '');
                 if (label_name != null) {
                    answer.title = label_name;
                    var multipleChoiceItem = document.createElement('option');
                    var multipleItemName = document.createTextNode(label_name);
                    var breakNode = document.createElement('br');
                    multipleChoiceItem.appendChild(multipleItemName);
                    multipleChoiceItem.appendChild(breakNode);
                    dropdown.append(multipleChoiceItem);
                    questions[dropdownID].answers.push(answer);
                 }
     

     });

    $( '#addCheckbox' ).click(function() {
      var question = {"type": "checkbox"};
       var label_name = prompt('Please enter a label name', '');
         
         // add the field
              var checkBox = document.createElement('div');
              checkBox.setAttribute('class', 'form-check checkBoxField');
              checkBox.setAttribute('id', count);
              var checkBoxLabel = document.createElement('label');
              var checkBoxName = document.createTextNode(label_name);
              checkBoxLabel.appendChild(checkBoxName);
              question.title = label_name || "";
              question.answers = [];
              questions.push(question);
              count++;
       // add option button
                var addOptionBox = document.createElement('button');
                addOptionBox.setAttribute('type', 'button');
                addOptionBox.setAttribute('class', 'btn btn-light btn-sm addOptionBox');
                addOptionBox.setAttribute('style', 'margin-left:2em;');
                var addOptionBoxName = document.createTextNode('Add option');
                addOptionBox.appendChild(addOptionBoxName);     
      
                $(checkBox).append(checkBoxLabel).append(checkBoxName);
                $("#form-sample").append(checkBox).append(addOptionBox).append('<hr>');     
        

        $(document).on('click', '.addOptionBox' , function() {
         var checkbox = $(event.target).prev();
         var checkboxID = checkbox.attr('id');
         var answer = {};
           var label_name = prompt('Please enter a label name', '');
              
               if (label_name != null) {
                  answer.title = label_name;
                  var checkboxItem = document.createElement('input');
                  var checkboxItemLabel = document.createElement('label');
                  checkboxItem.setAttribute("type", "checkbox");
                  var checkboxItemName = document.createTextNode(label_name);
                  checkboxItemLabel.appendChild(checkboxItemName);
                  checkbox.append('<br>').append(checkboxItem).append(' ').append(checkboxItemLabel);
                  questions[checkboxID].answers.push(answer);
               }
          
        });

    });


    $( '#addFile' ).click(function() {
      
      var label_name = prompt('Please enter a label name', '');
       if (label_name != null) {
              var file = document.createElement('input');
              file.setAttribute("class", "form-control-file");
              file.setAttribute("type", "file");
              file.setAttribute("placeholder", "Number");
              var fileLabel = document.createElement('label');
              var fileName = document.createTextNode(label_name);
              fileLabel.appendChild(fileName);
           }
      
      $('#form-sample').append(fileLabel).append(file).append('<hr>');
       
    });

    $('#generate').click(function(){
      $('#output').text(JSON.stringify(questions));
    });
});
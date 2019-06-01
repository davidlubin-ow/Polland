
    
    // the title updating live

    $("#titleField").keyup(function(event) {
        var stt = $(this).val();
        $("#title").text(stt);
    });

    
    // first level - sidebar

    $( '#btn1' ).click(function() {
      $('form').append('<div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small></div><hr>');
    });

    $( '#btn2' ).click(function() {
      
       var label_name = prompt('Please enter a label name', '');
              
           if (label_name != null) {
              var slt = document.createElement('input');
              slt.setAttribute("type", "text");
              slt.setAttribute("class", "form-control");
              var sltLabel = document.createElement('label');
              var sltName = document.createTextNode(label_name);
              sltLabel.appendChild(sltName);
           }
      
        $('#forms').append(sltLabel).append(slt).append('<hr>');
    });

    $( '#btn3' ).click(function() {
      
       var label_name = prompt('Please enter a label name', '');
       if (label_name != null) {
              var textArea = document.createElement('textarea');
              textArea.setAttribute("class", "form-control");
              textArea.setAttribute("rows", "3");
              var textAreaLabel = document.createElement('label');
              var textAreaName = document.createTextNode(label_name);
              textAreaLabel.appendChild(textAreaName);
           }
      
      $('#forms').append(textAreaLabel).append(textArea).append('<hr>');
     
    });

    $( '#btn4' ).click(function() {
      
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
      
      $('#forms').append(numberLabel).append(number).append('<hr>');
   
    });

    $( '#btn5' ).click(function() {
      
       var label_name = prompt('Please enter a label name', '');
       if (label_name != null) {
         
         // add the field
              var multipleChoice = document.createElement('select');
              multipleChoice.setAttribute('class', 'form-control');
              multipleChoice.setAttribute('id', 'exampleFormControlSelect1');
              var multipleChoiceLabel = document.createElement('label');
              var multipleChoiceName = document.createTextNode(label_name);
              multipleChoiceLabel.appendChild(multipleChoiceName);
       }
       // add option button
                var addOptionButton = document.createElement('button');
                addOptionButton.setAttribute('type', 'button');
                addOptionButton.setAttribute('class', 'btn btn-light btn-sm');
                addOptionButton.setAttribute('style', 'margin-left:2em;');
                addOptionButton.setAttribute('id', 'addOption');
                var addOptionButtonName = document.createTextNode('Add option');
                addOptionButton.appendChild(addOptionButtonName);     
      
     $('#forms').append(multipleChoiceLabel).append(multipleChoiceName).append(addOptionButton).append('<hr>');
     
    });

   $(document).on('click', '#addOption' , function() {

              var label_name = prompt('Please enter a label name', '');

                 if (label_name != null) {
                    var multipleChoiceItem = document.createElement('option');
                    var multipleItemName = document.createTextNode(label_name);
                    multipleChoiceItem.appendChild(multipleItemName);
                 }
     
                 $('#exampleFormControlSelect1').appendChild(multipleChoiceItem).append('<br>');

     });

    $( '#btn6' ).click(function() {
      
       var label_name = prompt('Please enter a label name', '');
       if (label_name != null) {
         
         // add the field
              var checkBox = document.createElement('div');
              checkBox.setAttribute('class', 'form-check');
              checkBox.setAttribute('id', 'checkBoxField');
              var checkBoxLabel = document.createElement('label');
              var checkBoxName = document.createTextNode(label_name);
              checkBoxLabel.appendChild(checkBoxName);
       }
       // add option button
                var addOptionBox = document.createElement('button');
                addOptionBox.setAttribute('type', 'button');
                addOptionBox.setAttribute('class', 'btn btn-light btn-sm');
                addOptionBox.setAttribute('style', 'margin-left:2em;');
                addOptionBox.setAttribute('id', 'addOptionBox');
                var addOptionBoxName = document.createTextNode('Add option');
                addOptionBox.appendChild(addOptionBoxName);     
      
     $('#forms').append(checkBoxLabel).append(checkBoxName).append(addOptionBox).append('<hr>');
     
        

        $(document).on('click', '#addOptionBox' , function() {
           var label_name = prompt('Please enter a label name', '');
              
               if (label_name != null) {
                  var checkboxItem = document.createElement('input');
                  var checkboxItemLabel = document.createElement('label');
                  checkboxItem.setAttribute("type", "checkbox");
                  var checkboxItemName = document.createTextNode(label_name);
                  checkboxItemLabel.appendChild(checkboxItemName);
               }
          
            $('#checkBoxField').append(checkboxItem).append(' ').append(checkboxItemLabel).append('<br>');
        });

    });


    $( '#btn7' ).click(function() {
      
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
      
      $('#forms').append(fileLabel).append(file).append('<hr>');
       
    });
 
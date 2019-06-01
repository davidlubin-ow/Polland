
    // the title updating live

    $("#titleField").keyup(function(event) {
      var stt = $(this).val();
      $("#title").text(stt);
  });

  
  // first level - sidebar

  $( '#btn1' ).click(function() {
    $('form').append('<div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small></div>');
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
            multipleChoice.setAttribute('type', 'button');
            multipleChoice.setAttribute('multiple', '');
            multipleChoice.setAttribute('id', 'exampleFormControlSelect2');
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
    
      $(document).on('click', '#addOption' , function() {
        
          var label_name = prompt('Please enter a label name', '');
            
                if (label_name != null) {
                    var multipleChoiceItem = document.createElement('option');
                    var multipleItemName = document.createTextNode(label_name);
                    multipleChoiceItem.appendChild(multipleItemName);
                }
        
          $('#exampleFormControlSelect2').appendChild(multipleChoiceItem);
          
 });

  });

  $( '#btn6' ).click(function() {
      $('#forms').append('<label id="label5">Label </label><button style="margin-left:2em;" onclick="editLabel5()" type="button" class="btn btn-light btn-sm">Edit</button><br><div class="form-check" style="height: auto;" id="checkBoxField"></div><button style="margin-left:2em;float:left;" type="button" id="addBox" class="btn btn-light btn-sm">Add option</button><br><hr>');

      $(document).on('click', '#addBox' , function() {
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
      $('#forms').append('<label id="label7">Label </label><button style="margin-left:2em;" onclick="editLabel7()" type="button" class="btn btn-light btn-sm">Edit</button><br><input type="file" class="form-control-file" id="exampleFormControlFile1"><hr>');
  });

  // edit labels
  
  function editLabel() {
      var label_name = prompt("Please enter a label name", "");
      if (label_name != null) {
          document.getElementById("label1").innerHTML =
          label_name;
      }
      }
  
  function editLabel2() {
      var label_name2 = prompt("Please enter a label name", "");
      if (label_name2 != null) {
          document.getElementById("label2").innerHTML =
          label_name2;
      }
      }

  function editLabel3() {
      var label_name3 = prompt("Please enter a label name", "");
      if (label_name3 != null) {
          document.getElementById("label3").innerHTML =
          label_name3;
      }
      }

  function editLabel4() {
      var label_name4 = prompt("Please enter a label name", "");
      if (label_name4 != null) {
          document.getElementById("label4").innerHTML =
          label_name4;
      }
      }

  function editLabel5() {
      var label_name5 = prompt("Please enter a label name", "");
      if (label_name5 != null) {
          document.getElementById("label5").innerHTML =
          label_name5;
      }
      }

      function editLabel6() {
      var label_name6 = prompt("Please enter a label name", "");
      if (label_name6 != null) {
          document.getElementById("dropdownMenuButton").innerHTML =
          label_name6;
      }
      }

  function editLabel7() {
      var label_name7 = prompt("Please enter a label name", "");
      if (label_name7 != null) {
          document.getElementById("label7").innerHTML =
          label_name7;
      }
      }

  function editLabel8() {
      var label_name8 = prompt("Please enter a label name", "");
      if (label_name8 != null) {
          document.getElementById("label8").innerHTML =
          label_name8;
      }
      }

  function editLabel9() {
      var label_name9 = prompt("Please enter a label name", "");
      if (label_name9 != null) {
          document.getElementById("label9").innerHTML =
          label_name9;
      }
      }
 
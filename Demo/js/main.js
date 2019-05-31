var email = '<div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small></div>';
var textLine = '<label id="label1">Label </label><button style="margin-left:2em;" onclick="editLabel()" type="button" class="btn btn-light btn-sm">Edit</button><input class="form-control" type="text" placeholder="Default input"><hr>';
var textarea = '<label id="label2">Label </label><button style="margin-left:2em;" onclick="editLabel2()" type="button" class="btn btn-light btn-sm">Edit</button><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><hr>';
var number = '<label id="label3">Label </label><button style="margin-left:2em;" onclick="editLabel3()" type="button" class="btn btn-light btn-sm">Edit</button><input class="form-control" type="number" placeholder="Number"><hr>';
var multipleChoice = '<label id="label4">Label </label><button style="margin-left:2em;" onclick="editLabel4()" type="button" class="btn btn-light btn-sm">Edit</button><select multiple class="form-control" id="exampleFormControlSelect2"></select><button style="margin-left:2em;float:left;" id="addOption" type="button" class="btn btn-light btn-sm">Add option </button><p><sub>(Click on the option to edit the title)</sub></p><br><hr>';
var chechbox = '<label id="label5">Label </label><button style="margin-left:2em;" onclick="editLabel5()" type="button" class="btn btn-light btn-sm">Edit</button><br><div class="form-check" style="height: auto;" id="checkBoxField"></div><button style="margin-left:2em;float:left;" type="button" id="addBox" class="btn btn-light btn-sm">Add option</button><p><sub>(Click on the option to edit the title)</sub></p><br><hr>';
var file = '<label id="label7">Label </label><button style="margin-left:2em;" onclick="editLabel7()" type="button" class="btn btn-light btn-sm">Edit</button><br><input type="file" class="form-control-file" id="exampleFormControlFile1"><hr>';

var multipleChoiceItem = '<option id="label8" onclick="editLabel8()">option</option>';
var chechboxItem = '<input type="checkbox" value="option" ><label class="form-check-label" id="label9" for="defaultCheck1" onclick="editLabel9()"> Option </label><br>';

    // the title updating live

    $("#titleField").keyup(function(event) {
        var stt = $(this).val();
        $("#title").text(stt);
    });

    
    // first level - sidebar

    $( '#btn1' ).click(function() {
        $('#forms').append(email);
    });

    $( '#btn2' ).click(function() {
        $('#forms').append(textLine);
    });

    $( '#btn3' ).click(function() {
        $('#forms').append(textarea);
    });

    $( '#btn4' ).click(function() {
        $('#forms').append(number);
    });

    $( '#btn5' ).click(function() {
        $('#forms').append(multipleChoice);

        $(document).on('click', '#addOption' , function() {
            $('#exampleFormControlSelect2').append(multipleChoiceItem);
        });

    });

    $( '#btn6' ).click(function() {
        $('#forms').append(chechbox);

        $(document).on('click', '#addBox' , function() {
            $('#checkBoxField').append(chechboxItem);
        });

    });


    $( '#btn7' ).click(function() {
        $('#forms').append(file);
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
        var label_name6 = prompt("Please enter a label name", "");
        if (label_name6 != null) {
            document.getElementById("label5").innerHTML =
            label_name6;
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
   
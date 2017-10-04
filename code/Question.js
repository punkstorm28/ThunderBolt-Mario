


function fetchQuestion() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://www.campusherald.in/backend/randomQuestion.php",
        "method": "GET",
        "processData": false,
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        var obj = JSON.parse(response);

        var question = obj[0].question;
        var optionA = obj[0].optionA;
        var optionB = obj[0].optionB;
        var optionC = obj[0].optionC;
        var optionD = obj[0].optionD;

        var answer = obj[0].answer;

        var total = question + "\n" + "1. "+optionA + "\n" + "2. "+optionB+ "\n" + "3. "+optionC+ "\n" + "4. "+optionD;
        total= total.replace(/\n/g, "<br />");
        console.log(total)
        showQuestion(total,answer);
    });
}

function getQuestion(){
    if(isCompetitive) {
        fetchQuestion();
    }
}

function rightAnswer(){ 
  //TODO

    Coins = Coins + 50;

}

function showQuestion(question, ans){ //TODO This function should take data from get request as parameter.
	       $.confirm({
           title:"Answer This",
           theme: 'supervan',
           columnClass: 'col-md-12',
           useBootstrap: true,
           content: question +
           '<form action="" class="formName">' +
           '<div class="form-group">' +
           '<input type="text" placeholder="Enter Option Number" class="name form-control" required />' +
           '</div>' +
           '</form>',
           buttons: {
               formSubmit: {
                   text: 'Submit',
                   btnClass: 'btn-blue',
                   action: function () {
                       var answer = this.$content.find('.name').val();
                       // if(!name){
                       //     $.alert('provide a valid name'); //TODO Option validation
                       //     return false; 
                       // }
                       // $.alert('Your name is ' + name); //TODO Change this
                       if(answer!='1' || answer!='2' || answer!='3' || answer!='4'){
                        $.alert('Enter a valid answer!');
                       }
                       else if(answer == ans){
                        $.alert('Awesome,Right Answer!!');
                        rightAnswer();
                       }
                       else{
                        $.alert('Too bad,Wrong Answer!!');
                       }

                   }
               },
                cancel: function () {
                    setTimeout(function () {
                        setTimeout(function () {

                        }, 4000);
                        $(this).remove();
                    },2000);
                },
           },
           onContentReady: function () {
               // bind to events
               var jc = this;
               this.$content.find('form').on('submit', function (e) {
                   // if the user submits the form by pressing enter in the field.
                   e.preventDefault();
                   jc.$$formSubmit.trigger('click'); // reference the button and click it
               });

           }
       });

}
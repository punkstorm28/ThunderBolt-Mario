
//This will be used when i have a fucking server.
// function getQuestion(){
// 	$.get('#',
// 		function(data){
// 			showQuestion(data);
// 			checkAnswer(data);

// 		});
// }

//For testing purposes.

function getQuestion(){
    if(isCompetitive) {
        showQuestion();
    }
}

function checkAnswer(data){ 
  //TODO
}

function showQuestion(){ //TODO This function should take data from get request as parameter.
	       $.confirm({
           title: 'Bonus Question!',
           theme: 'supervan',
           columnClass: 'col-md-12',
           useBootstrap: true,
           content: '' +
           '<form action="" class="formName">' +
           '<div class="form-group">' +
           '<label>Place holder for Question</label>' + //TODO Question must go here.
           '<input type="text" placeholder="Enter Option Number" class="name form-control" required />' +
           '</div>' +
           '</form>',
           buttons: {
               formSubmit: {
                   text: 'Submit',
                   btnClass: 'btn-blue',
                   action: function () {
                   		//TODO:I need to check the answer here and handle it.
                       var name = this.$content.find('.name').val();
                       if(!name){
                           $.alert('provide a valid name'); //TODO Option validation
                           return false;
                       }
                       $.alert('Your name is ' + name); //TODO Change this
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
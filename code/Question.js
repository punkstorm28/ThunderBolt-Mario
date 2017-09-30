var isCompetitive = true;

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
	showQuestion();
}

function showQuestion(){
	       $.confirm({
           title: 'Prompt!',
           theme: 'supervan',
           columnClass: 'col-md-4 col-md-offset-4',
           useBootstrap: true,
           content: '' +
           '<form action="" class="formName">' +
           '<div class="form-group">' +
           '<label>Answer</label>' +
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
                           $.alert('provide a valid name');
                           return false;
                       }
                       $.alert('Your name is ' + name);
                   }
               },
               // cancel: function () {
               //     //close
               // },
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
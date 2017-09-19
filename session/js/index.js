$(document).ready(function(){
  var working = false;
  $('.login').on('submit', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    console.log(username);
    if( username == '' || password == ''){
      alert("Please fill all fields!!");
    }
    else{
      $.post("#", //TODO : Add URL
        {username1 : username,password1 : password},
        function(data){
         


        })
    //   if (working) return;
    // working = true;
    // var $this = $(this),
    //   $state = $this.find('button > .state');
    // $this.addClass('loading');
    // $state.html('Authenticating');
    // setTimeout(function() {
    //   $this.addClass('ok');
    //   $state.html('Welcome back!');
    //   setTimeout(function() {
    //     $state.html('Log in');
    //     $this.removeClass('ok loading');
    //     working = false;
    //   }, 4000);
    // }, 3000);

    }
    
  });
});
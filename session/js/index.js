$(document).ready(function(){
    var token_;
    var working = false;
    $('.login').on('submit', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    console.log(username);
    if( username == '' || password == ''){
      alert("Please fill all fields!!");
    }


    /*--->This will post a JSON object to the URL.
    --->If the post is successful a JSON object data
    will be returned by the backend.
    --->data will contain a key : authenticated that will be set to true
    if the username and password are authenticated.
    --->data will also contain a key called access_token that holds
    the token.
        */

        
    else{
      $.post("#", //TODO : Add URL
        {username : username,password : password},
        function(data){
            var obj = JSON.parse(data);
            var authenticated = obj.authenticated;
            if(authenticated){
                var key = obj.access_token;
                token_ = key; //Get the token and save it in token_

                window.location = "#"; //TODO : Add URL

            }
            else{
                alert("Invalid Username or Password");

            }
         


        })
    /*Animation stuff that I need to Integrate with the code later*/


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
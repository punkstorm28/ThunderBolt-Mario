$(document).ready(function () {
    var token_;
    var working = false;
    $('.login').on('submit', function (e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        if (username == '' || password == '') {
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



        else {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://www.campusherald.in/backend/login.php",
                "method": "POST",
                "processData": false,
                "data": "{ \"username\" : \""+username+"\",\n \"passcode\" :\""+password +"\"}"
            }


            $.ajax(settings).done(function (response) {
                console.log(response);
                var obj = JSON.parse(response);
                usernameToken = obj.username;
                token_ = obj[0].token;
                console.log(token_);

            });



            /*Animation stuff that I need to Integrate with the code later*/
            if (working) return;
            working = true;
            var $this = $(this),
                $state = $this.find('button > .state');
            $this.addClass('loading');
            $state.html('Authenticating');
            setTimeout(function () {
                if(token_!=undefined) {
                    $this.addClass('ok');
                    $state.html('Welcome back!');
                    setTimeout(function () {
                        $this.removeClass('ok loading');
                        $('.wrapper').hide('slow');
                        $('.button1').show();
                        $('.button2').show();
                        working = false;

                    }, 4000);
                }
            }, 3000);
        }

    });
});
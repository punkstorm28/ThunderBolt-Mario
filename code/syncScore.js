/**
 * Created by vyomkeshjha on 10/4/17.
 */
function updateScore(token, score) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://www.campusherald.in/backend/updateScore.php",
        "method": "POST",
        "processData": false,
        "data": "{\n \"token\" :"+token+",\n \"score\" :"+score+"\n}"
    }
    console.log(settings);


    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

activeController();


function activeController(){
  var database = firebase.database();
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAeJKDVKWYKjZcBffFq6axiqEU4iNupVIo",
    authDomain: "rifas-ce773.firebaseapp.com",
    databaseURL: "https://rifas-ce773.firebaseio.com/",
    storageBucket: "rifas-ce773.appspot.com",
    messagingSenderId: "155210069413"
  };
  firebase.initializeApp(config);

}



  $(document).ready(function(){

  var ref = new Firebase('https://rifas-ce773.firebaseio.com/');

  $('#enviar').on('click',function(){

     
    ref.push({
      message:$('#name').val()
    });

    
  });

  ref.on('child_added',function(snapshot){
      
      var newText = snapshot.val();

      $('#texto').append('<p>' + newText.message + '</p>');
    });


  });



  


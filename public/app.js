//script para abrir y cerrar el modal
$('#modal1').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    complete: function () {
    }
});

$('#modal2').modal();

//script que manda la info de la vista al HTML
$(document).ready(function () {

    var ref = new Firebase('https://rifas-ce773.firebaseio.com');


    $('#enviar').on('click', function () {
        var folio = Math.random();
        var prueba = folio.toFixed(6) * 10000000;


        ref.push({
            name: $('#name').val(),
            email: $('#email').val(),
            numTickets: $('#number_tickets').val(),
            telefono: $('#telephone').val(),
            folio: prueba
        });
    });

    ref.on('child_added', function (snapshot) {

        var newText = snapshot.val();
        var newUser = snapshot.val();
        var newFolio = snapshot.val();
        $('#user_name').html(newText.name);
        $('#user_email').html(newUser.email);
        $('#folio').html(newFolio.folio);

    });



});
 //Funcón que limpia el formulariouna vez enviado
function myFunction() {
    document.getElementById("form_data").reset();
}


window.onload = function(e){

    var $clock = $('#clock'),
        eventTime = moment('22-11-2016 08:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;

    // if time to countdown
    if(diffTime > 0) {

        // Show clock
        // $clock.show();

        var $d = $('#days').html($clock),
            $h = $('#hours').html($clock),
            $m = $('#minutes').html($clock),
            $s = $('#seconds').html($clock);

        setInterval(function(){

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();

            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;

            // show how many hours, minutes and seconds are left
            $d.text(d);
            $h.text(h);
            $m.text(m);
            $s.text(s);

        }, interval);

    }

};



'use strict';
// FAIRE OBJET !!!!!!!!!!!!!!!!!!!
// Mettre indication faire json-server --watch db.json au démarrage du projet sinon ajax call ne fonctionne pas !!!

// <td class="degree">
const td_degree =       document.getElementsByClassName('degree');

// <td class="school">
const td_school =       document.getElementsByClassName('school');

// <td class="location">
const td_location =     document.getElementsByClassName('location');

// <td class="date">
const td_date =         document.getElementsByClassName('date');


// AJAX CALL
$(document).ready(function() {

    /******* TO GET DATAS ********/
    $('#button-get-data').on('click', function(e) {

        $.ajax({
    
            // Where the datas are
            url: 'http://localhost:3000/education',

            // Type of request
            method: 'GET',

             // Type of datas
            dataType: 'json',
    
            // If we get a response from the server, the following function is executed.
            // "data" contains the server response. It is an array of objects
            success: function(data) { 
                    console.log("GET ajax Request : SUCCESS", data);

                    // For every object in the array...
                    for(let object in data) {

                        // Put the content of property "school" of each object in each <td class="school">
                        // Here, object is used as an index
                        td_degree[object].innerHTML =      data[object].degree;
                        td_school[object].innerHTML =      data[object].school;
                        td_location[object].innerHTML =    data[object].location;
                        td_date[object].innerHTML =        data[object].date;
                    }
            },
    
            // Function executed if an error occured during the request
            error: function(error_ajax) {
                console.log('GET ajax Request : ERROR:' + error_ajax);
            }
        });
    });
});

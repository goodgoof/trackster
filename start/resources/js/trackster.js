$(document).ready(function(){
  $('#search').click(function(){
    Trackster.searchTracksByTitle($('input').val() );
  });
  $.ajax({url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=aba0b6c323c5640cb1869094ac55c629&format=json",
     success: function(console.log(hehe))
   });

});


const API_KEY = aba0b6c323c5640cb1869094ac55c629;
var Trackster = {};
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};

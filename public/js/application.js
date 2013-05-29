DieRoles = {};


DieRoles.render = function(){

  var elements = $();

  // HINT: change this to get the roles from the server somehow.
  var roles = JSON.parse(decodeURIComponent(window.location.href.substring(29)));

  roles.forEach(function(role){
    elements = elements.add($('<li>').text(role));
  });

  return elements;
};

$(function(){
  $('.die-roles').html(DieRoles.render());

});

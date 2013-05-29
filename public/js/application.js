$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    console.log("submitted");   
    $.ajax({
      type: 'post',
      url: '/roll',
      data: 'roles'
    }).done( function(data){
      console.log(data.roles);
      roleRender(DieRoles.render(data.roles));
      
    });
  });
});

DieRoles = {};
DieRoles.render = function(roles){
  var elements = $();
  roles.forEach(function(role){
    elements = elements.add($('<li>').text(role));
  });
return elements
};

function roleRender(elements){
  $('.die-roles').html(elements);
};
DieRoles = {};
var elements = $();


DieRoles.render = function(){

  
//   // HINT: change this to get the roles from the server somehow.
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
      var roles = data.roles;
      roles.forEach(function(role){
        elements = elements.add($('<li>').text(role));
        console.log(elements);
        //roleRender(elements);
      });

    })

  })

})
 return elements;   

};


function roleRender(elements){
  $('.die-roles').html(elements);
};

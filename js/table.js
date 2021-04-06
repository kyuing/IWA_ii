function draw_table() {
  $("#results").empty();
  $.getJSONuncached = function (url) {
    return $.ajax(
      {
        url: url,
        type: 'GET',
        cache: false,
        success: function (users) {
          $("#results").append(users);
          select_row();
        }
      });
  };
  $.getJSONuncached("/users")
};
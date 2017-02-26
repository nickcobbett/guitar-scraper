$( ".tab-submit" ).submit(function(event) {
  console.log($( "input" ).val());
  var link = $( "input" ).val();
  event.preventDefault();
}).ajax({
  url: 'http://127.0.0.1:8082/scrape',
  data: {
    link: this.link
  },
  success: function() {
    console.log('##')
  },
  dataType: 'json'
});
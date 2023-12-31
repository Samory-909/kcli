function kubecreate(){
  $("#wheel").show();
  var type = $("#type").val();
  var parameters = {};
  $.each($('#createkube').serializeArray(), function() {
    parameters[this.name] = this.value;
  });
  data = {'type': type, 'parameters': parameters};
  cluster = parameters['cluster'];
  $.ajax({
       type: "POST",
        url: '/kubes',
        data: data,
        success: function(data) {
            $("#wheel").hide();
            if (data.result == 'success') {
                $('.top-right').notify({message: { text: "Cluster "+cluster+" created!!!" }, type: 'success'}).show();
            } else {
                $('.top-right').notify({message: { text: "Cluster "+cluster+" not created because "+data.reason }, type: 'danger'}).show();
            };
        }
    });
}

function kubecreatefromprofile(type, profile){
  var cluster = prompt("Enter cluster name");
  if (cluster === "") {
   return;
  }
  var parameters = {};
  parameters["cluster"] = cluster;
  parameters["clusterprofile"] = profile;
  data = {'type': type, 'parameters': parameters};
  $("#wheel").show();
  $.ajax({
       type: "POST",
        url: '/kubes',
        data: data,
        success: function(data) {
            $("#wheel").hide();
            if (data.result == 'success') {
                $('.top-right').notify({message: { text: "Cluster "+cluster+" created!!!" }, type: 'success'}).show();
            } else {
                $('.top-right').notify({message: { text: "Cluster "+cluster+" not created because "+data.reason }, type: 'danger'}).show();
            };
        }
    });
}

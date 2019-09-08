$(document).ready(function(){
    $("#hide").on('click', function() {
            $("#element").hide();
            return false;
        });
     
        $("#show").on('click', function() {
            $("#element").show();
            return false;
        });
});
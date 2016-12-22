$(function(){
    $(".checkBox label").click(function() {
        $(this).parent(".checkBox").toggleClass('active');
    })
});
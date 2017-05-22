$(document).ready(function(){
    $('.switch-link').click(function(e){
        $(this).toggleClass('active');
        e.preventDefault();
    });
    $('.switch-link-data').click(function(e){
        var t = $(this).text();
        $(this).text($(this).attr('data-alt'));
        $(this).attr('data-alt',t);
        e.preventDefault();
    });

    $('.js-viewport_1024').click(function(e){$('#container, .page').animate({ width : 1024 }, 150); e.preventDefault()});
    $('.js-viewport_1260').click(function(e){$('#container, .page').animate({ width : 1260 }, 150); e.preventDefault()});

});
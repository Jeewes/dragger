javascript: (function() {
    var isDragging = false;
    var $ = window.jQuery;
    $('body')
    .mousedown(function (e) {
        e.preventDefault();
        var el = $(e.target);
        $(document).mousemove(function(e) {
            isDragging = false;
            var x = e.pageX - el.width();
            var y = e.pageY - el.height();
            el.css({top: y, left: x, position: 'fixed'});
        });
    })
    .mouseup(function (e) {
        var wasDragging = isDragging;
        isDragging = false;
        $(document).unbind("mousemove");
    });
}());

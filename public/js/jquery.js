jQuery(function($) {
        $('#dbl1').click(function() {
            return false;
        }).dblclick(function() {
            window.location = this.href;
            return false;
        });
    });
jQuery(function($) {
    $('#dbl2').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});
jQuery(function($) {
    $('#dbl3').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});
jQuery(function($) {
    $('#dbl4').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});

leftIsDragging   = false;
middleIsDragging = false;
rightIsDragging  = false;

$(document).bind('mousedown', function(event) {

    switch (event.which) {
        case 1:
            console.log('Left mouse down.');
            leftIsDragging   = true;
            break;
        case 2:
            console.log('Middle mouse down.');
            middleIsDragging = true;
            break;
        case 3:
            console.log('Right mouse down.');
            rightIsDragging   = true;
            break;
        default:
             console.log('Other mouse down.');
    }
});

$(document).bind('mouseup', function(event) {

    switch (event.which) {
        case 1:
            console.log('Left mouse up.');
            leftIsDragging   = false;
            break;
        case 2:
            console.log('Middle mouse up.');
            middleIsDragging = false;
            break;
        case 3:
            console.log('Right mouse up.');
            rightIsDragging  = false;
            break;
        default:
             console.log('Other mouse up.');
    }
});

$(document).bind('mousemove', function(event) {
    if (leftIsDragging)
    {
        console.log('left dragging');
    }
    if (middleIsDragging)
    {
        console.log('mousewheel dragging');
    }
    if (rightIsDragging)
    {
        console.log('right dragging');
    }
});

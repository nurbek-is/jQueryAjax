$(function() {
    var $specials = $('#specials');
    //create an area for the response

    var $details = $('<div/>').appendTo($specials);

    var handleResponse = function (specials,val) {
        //specials is an array, find he correct element
        var daySpecials = specials[val];
        var html = '<h3>' + daySpecials.title + '</h3>';
        html += '<p>' + daySpecials.text + "</p>";

        $details.html(html);
        $('<img/>').attr('src',daySpecial.image)
        .appendTo($details);
        $details.css('color',daySpecial.color);
    };
    $specials.find('select').change(
        function() {
            var val = $(this).val();
            if(!val) {
                $details.empty();
            } else {
                $.ajax({
                    type:'get',
                    dataType: 'json',
                    url: "data/specials.json",
                    success: function(specials) {
                        handleResponse(specials,val)
                    }

                })
            }
        })
        //remove the Submit button
        $specials.find('li.buttons').remove();




    var $sel = $('#specials select[name=day]');
    var $content = $('<div />').insertAfter('#specials form');
    $sel.change(function(e) {
        var day = $(this).val();
        if (day.length) {
            $.ajax('data/specials.json', {
                dataType:'json',
                success: function(data) {
                    var special = data[day];
                    if (special) {  
                        $content
                            .empty()
                            .append($('<h1>' + special.title + '</h1>')
                                .css('color', special.color))
                            .append('<img src="' + special.image + '" />' +
                                            '<p>' + special.text + '</p>');
                    }
                }
            });
        } else {
            $content.empty();
        }
    });
    $('#specials li.buttons').remove();
});
        

    



$(function() {
    $('#blog>h3').each(function() {
            // create the div
        var $target = $("<div/>")
            //this refers to each h3
        var $this = $(this)
            //insert newly-created div after this h3
        $this.after($target)
            //on user click, do the following...
        .click(function(e) {
            //without preventDefault
            //page would reload
        e.preventDefault();
            //create the url from the href attr of 
            //a-tag contained in h3
        var url = $this.find('a:first')
            //load method asks for space
            //between url and id selector
        .attr('href').replace('#', ' #');
            //load the relevant div from blog.html
        $target.load(url)
            })
    });
});
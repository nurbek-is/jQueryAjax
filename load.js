// Iterate over all h2s on page, adding each h2
// as a hash to the "titles" array. Use .push to
// add each element; f
$(function() {
    var titles = [];
    
    $('h2').each(function () {
        titles.push({
            label:$(this).html(),
            url:$(this).attr('id')
        })
        console.log(titles)
    })
    // assign autocomplete to #q, with the source being
    // the "titles" array and specifying that the select
    //     event should redirect users to the appropriate
    //     spot (e.g. '#fruit', '#blogtitle') on the page

   $('#q').autocomplete({
        source:titles,
        select:function(event, ui) {
            window.location.href='#' + ui.item.url
        }
    }),
    // use animate to change the background and foreground
    // color of table rows in the #fruits table at the
    // bottom of the page 

    $('table#fruits tr').hover(
    
        function() {
            $(this).animate({
                backgroundColor: "#600",
                color: "#fff"
            });    
        },    
        function() {
            $(this).animate({
                backgroundColor: "#fff",
                color: "#000"
            });    
        }    
    )    
});    
   


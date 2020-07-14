$(function () {
 $('#blog>ul>li>h3:first-child').each(function () {
     //create div and insert it after the headline, this refers to headline
     var $target = $('<div/>')
     .insertAfter(this);
     //now that the $target div exist, we can write the click handler
     //that will load it -the $target variable is the closure
     $(this).click(function (e){
         e.preventDeafult();
         $target.load(e.target.href.replace('#',' #'));
     })
   })
 })
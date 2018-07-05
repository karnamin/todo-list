// Check off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");

    /* // if li is grey
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black
        $(this).css({
            "color": "black",
            "textDecoration": "none"
        });
    }
    // else
    else {
        // turn it grey
        $(this).css({
            "color": "grey",
            "textDecoration": "line-through"
        });
    } */
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // to stop bubbling it up to parent elements
    event.stopPropagation();
});

// Creating todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // grabbing new todo text from from input 
        var todoText = $(this).val();
        // clearing the input
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})
$("p").click(function(){
    $(this).hide();
})

$("p").click(function() {
    $(this).hide(2000);
})

$(".red").on("click", function() {
    $(this).fadeOut(3000);
})

$("li").on("click", function(){
     console.log("this is li ", $(this).html());
})

$("input").keyup(function() {
    var name = $(this).val()
    console.long(name);
    var fullThing = "hello" + name

    $('h1').text(fullThing)
})

$("sign-up-form").submit(function(e) {
    e.preventDefault();
    console.log("hey: ", $("input"))
    console.log("username is ", username);
    var username = $("input[name='username']").val();
    var password = $("input[password='password']").val();
    if(username === "ironhack" && password ==="ironhack"){
        console.log("All good.");
    } else {
        console.log("Sorry dude!");
    }
    console.log("password: ", password);
});
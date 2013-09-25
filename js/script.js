// Max's jQuery 2013
$(document).ready(function() {
	$('#show').click(function() {
		$('div.placeholder').html("You found the hidden paragraph!");
		$('div.placeholder').css("margin-top", "10px");
	});
	$('#hide').click(function() {
		$('div.placeholder').html("");
		$('div.placeholder').css("margin-top", "0px");
	});
	$('#hidesidebar').click(function() {
		$('.sidebar').toggle('slow');
	});
	$('.chooseusername').one('click', function() {
        var username = $('input[name=username]').val();
        $('.welcome').append('<p>Welcome to my site, ' + username + '.</p>');
        alert("Welcome to my site, " + username + ".\nEnjoy your stay!");
    });
    // Below is kept as an example if needed in the future
    //$('.desert').click(function() {
    	//$('html').css('background-image','url(assets/desert.jpg)');
    	//$('html').css('background-repeat','no-repeat');
    	//$('html').css('background-attachment','fixed');
    //});
    $('.closeupdatesbutton').click(function() {
        $('.updates').css('display', 'none');
        $('.navbar').css('top', '0px');
        $('.content').css('margin-top', '60px');
        $('.sidebar').css('top', '60px');
        $('.subHeading').css('margin-top', '54px');
    });
    $('.mobiletopbar a').on('click', function() {
        $('.navbar').slideToggle();
    });
    $('.mobiletopbar a').click(function() {
        $('.content').toggleClass("contentextendedmargin");
    });
});


//var userAge = 1;

//if userAge = 17;
//{
//	console.log("So close! You can drive in 1 year.");
//}
//if (userAge > 18)
//{
//	console.log("Congratulations! You can legally drive!");
//}
//else
//{
//	alert("What a pity. You can't drive yet.");
//}
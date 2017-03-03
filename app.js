var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

$(document).ready(function() {

  var manImg = $('<img id="man-img">');
  manImg.attr('src', images.man.path);
  manImg.attr('class', "img-responsive")
  manImg.appendTo('#man');

  var wizardImg = $('<img id="wizard-img">');
  wizardImg.attr('src', images.wizard.path);
  wizardImg.attr('class', "img-responsive");
  wizardImg.appendTo('#wizard');

  var beastImg = $('<img id="beast-img">');
  beastImg.attr('src', images.beast.path);
  beastImg.attr('class', "img-responsive");
  beastImg.appendTo('#beast');

  var beastHeading = $('<h2 id="beast-heading"></h2>');
  $(beastHeading).append(images.beast.heading);

  $("#beast").hover(function() {
    $(this).append($(beastHeading));
  }, function() {
    $(this).find( "span:last" ).remove();
  }
);

// var thisObj = {
//   man: {
// 		heading: 'Man Image',
// 		description: 'Image of a man.',
// 		path: 'http://lorempixel.com/400/200'
// 	},
// 	wizard: {
// 		heading: 'Wizard Image',
// 		description: 'Image of a wizard.',
// 		path: 'http://lorempixel.com/400/200'
// 	},
// 	beast: {
// 		heading: 'Beast Image',
// 		description: 'Image of a beast.',
// 		path: 'http://lorempixel.com/400/200/sports'
// 	}
// }

// var elements = Object.keys(images).map(function(item) {
//   var objHere = images[item];
//   return(
//     "<div class='col-sm-4 img-container'>" + "<img class='img-responsive' src='" + objHere.path + "'</div>"
//   )
// });

$("div#img-row").html(elements);

});

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
  wizardImg.attr('class', "img-responsive")
  wizardImg.appendTo('#wizard');

  var beastImg = $('<img id="beast-img">');
  beastImg.attr('src', images.beast.path);
  beastImg.attr('class', "img-responsive")
  beastImg.appendTo('#beast');

  $('#home').click(function() {
    $($(this).attr('li')).addClass('active');
  });

});

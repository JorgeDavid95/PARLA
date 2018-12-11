// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},

		{
		path: '/comida/',
    	url: 'comida.html',
    	name: 'comida',
  		}
	]
});


// Init top demo gauge
var demoGauge = app.gauge.create({
  el: '.demo-gauge',
  type: 'circle',
  value: 0.5,
  size: 250,
  borderColor: '#2196f3',
  borderWidth: 10,
  valueText: '50%',
  valueFontSize: 41,
  valueTextColor: '#2196f3',
  labelText: 'amount of something',
});

// Change demo gauge on button click
$$('.button').on('click', function () {
  var value = $$(this).attr('data-value');
  demoGauge.update({
    value: value / 100,
    valueText: value + '%'
  });
});




// Export selectors engine
var $$ = Dom7;





 


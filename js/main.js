window.addEvent('domready', function(){


});

window.addEvent('load', function(){

    setTimeout(function() {
        Interface.initialize();
    }, 10);

    setTimeout(function(){
        $('body')[0].setStyle('overflow', 'visible');
    }, 5000);

});
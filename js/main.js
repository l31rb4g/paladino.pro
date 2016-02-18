window.addEvent('domready', function(){

    $$('body')[0].empty();
    window.initialCS = Interface.getCharSize('frame');

});

window.addEvent('load', function(){

    setTimeout(function() {
        Interface.initialize();
    }, 10);

    setTimeout(function(){
        $$('body')[0].setStyle('overflow', 'visible');
    }, 5000);

});
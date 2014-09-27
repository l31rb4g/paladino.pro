FlyingMenu = new Class({

    Extends: FlyingObject,

    initialize: function(){

        var qtd = (window.getSize().y / (Interface.getCharSize().y - 4)).toInt();
        for (var i=0, t=0; i<qtd; i++, t+=16) {
            this.addElement('|', t, 200);
        }

        this.fly();

    }

});
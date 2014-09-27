FlyingString = new Class({

    Implements: Options,
    Extends: FlyingObject,

    options: {
        'class': '',
        spacing: 8
    },

    initialize: function(string, top, left, options){
        this.setOptions(options);

        var x = left;
        for (var i=0; i<string.length; i++) {
            this.addElement(string.substr(i, 1), top, x);
            x += this.options.spacing;
        }

        this.fly();

    }

});
FlyingChar = new Class({

    Implements: Options,

    morph: {
        duration: 500
    },

    initialize: function(char, top, left, options){
        this.setOptions(options);

        this.char = char;
        this.top = top;
        this.left = left;
        this.createElement();
        this.fly();
    },

    createElement: function(){
        var randomPositions = this.getRandomOutOfScreenPositions();

        this.el = new Element('span', {
            'class': 'flyingChar' + (this.options.class ? ' ' + this.options.class : ''),
            'text': this.char,
            'styles': {
                'top': randomPositions['top'],
                'left': randomPositions['left']
            },
            'morph': this.morph
        }).inject($$('body')[0]);
    },

    fly: function(){
        this.el.morph({
            'top': this.top,
            'left': this.left
        });
    },

    getRandomOutOfScreenPositions: function(){
        var side = (Math.random() * 4).toInt() + 1;
        var _top, _left;
        var margin = 50;
        var randomTop = (Math.random() * window.getSize().y).toInt() + ((Math.random() * 2).toInt() ? 50 : -50);
        var randomLeft = (Math.random() * window.getSize().x).toInt() + ((Math.random() * 2).toInt() ? 50 : -50);
        if (side == 1){ //top
            _top = -margin;
            _left = randomLeft;
        } else if (side == 2){ //right
            _left = window.getSize().x + margin
            _top = randomTop;
        } else if (side == 3){ //bottom
            _top = window.getSize().y + margin
            _left = randomLeft;
        } else if (side == 4){ //left
            _left = -margin;
            _top = randomTop;
        }

        return {'top': _top, 'left': _left};
    },

    explode: function(){
        var randomPositions = this.getRandomOutOfScreenPositions();
        this.top = randomPositions['top'];
        this.left = randomPositions['left'];
        this.el.set('morph', {
            duration: 250,
            'onComplete': function(){
                this.el.dispose();
            }.bind(this)
        });
        this.fly();
    }

});
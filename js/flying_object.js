FlyingObject = new Class({

    Implements: Options,

    options: {
        interval: 6,
        duration: 500
    },

    sequence: [],
    chars: [],

    initialize: function(options) {
        this.setOptions(options);
    },

    addElement: function(char, top, left){
        this.sequence.push([char, top, left]);
    },

    shuffleSequence: function(){
        var o = this.sequence;
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        this.sequence = o;
    },

    fly: function(){
        this.shuffleSequence();

        var i = 0;
        this.sequence.each(function(charInfo){
            setTimeout(function() {
                this.chars.push(new FlyingChar(charInfo[0], charInfo[1], charInfo[2], this.options));
            }.bind(this), this.options.interval * i);
            i++;
        }.bind(this));

        return this;
    },

    dispose: function(){
        this.chars.each(function(char){
            char.el.dispose();
        });
    },

    explode: function(){
        var i = 0;
        this.chars.each(function(char){
            setTimeout(function() {
                char.explode();
            }, i * 250);
        });
    }

});
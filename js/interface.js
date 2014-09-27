Interface = {

    initialize: function(){
        //this.menu = new FlyingMenu();
        this.buildFrame();
    },

    getCharSize: function(cl){
        var el = new Element('span', {
            'class': 'flyingChar ' + cl,
            'text': '.',
            'styles': {
                'top': -50,
                'left': -50
            }
        }).inject($$('body')[0]);
        var size = el.getSize();
        el.dispose();
        return size;
    },

    buildFrame: function(){
        var frame = new FlyingObject({'class': 'frame'});
        var margin = 30;
        var cs = Interface.getCharSize('frame');

        frame.addElement('+', margin, margin);

        var qtd_y = ((window.getSize().y - (margin * 2.2)) / (cs.y)).toInt() - 1;
        var qtd_x = ((window.getSize().x - (margin * 2.2)) / (cs.x)).toInt() - 1;

        //left 1
        var n1 = cs.y + margin - 10;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n1, margin);
            n1 += cs.y;
        }
        frame.addElement('+', n1 - 6, margin);

        //left 2
        var n1 = cs.y + margin - 10;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n1, margin + 272);
            n1 += cs.y;
        }

        //top
        var n2 = cs.x + margin;
        var char, z;
        for (var i=0; i<qtd_x; i++) {
            if (i == 15) {
                char = '+';
                z = 0;
            } else {
                char = '-';
                z = 1;
            }
            frame.addElement(char, margin - z, n2);
            n2 += cs.x;
        }
        frame.addElement('+',  margin, n2);

        //right
        var n3 = cs.y + margin - 10;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n3, n2);
            n3 += cs.y;
        }
        frame.addElement('+', n3 - 7, n2);

        //bottom
        var n4 = cs.x + margin;
        for (var i=0; i<qtd_x; i++) {
            if (i == 15) {
                char = '+';
                z = 6;
            } else {
                char = '-';
                z = 7;
            }
            frame.addElement(char, n3 - z, n4);
            n4 += cs.x;
        }

        frame.fly();
    }

};
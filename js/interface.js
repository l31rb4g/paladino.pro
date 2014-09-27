Interface = {

    //670px minimum window height

    initialize: function(){
        //this.menu = new FlyingMenu();
        this.buildFrame();
        setTimeout(function(){
            this.picture();
        }.bind(this), 1500);
        setTimeout(function(){
            this.leftColumn();
        }.bind(this), 1750);
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
        this.margin = margin;
        var cs = Interface.getCharSize('frame');

        frame.addElement('+', margin, margin);

        var qtd_y = ((window.getSize().y - (margin * 2.2)) / cs.y).toInt() - 1;
        var qtd_x = ((window.getSize().x - (margin * 2)) / 16).toInt() - 2;

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
        var z = 7;
        var n2 = cs.x + margin + z;
        var char;
        for (var i=0; i<qtd_x; i++) {
            if (i == 16) {
                char = '+';
            } else {
                char = '-';
            }
            frame.addElement(char, margin, n2);
            n2 += cs.x + z;
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
        var x = 7;
        var n4 = cs.x + margin + x;
        for (var i=0; i<qtd_x; i++) {
            if (i == 16){
                char = '+';
            } else {
                char = '-';
            }
            frame.addElement(char, n3 - 6, n4);
            n4 += cs.x + x;
        }

        frame.fly();
    },

    picture: function(){
        var obj = new FlyingObject({'class': 'picture'});

        var img = new Element('img', {
            'src': 'img/foto1.jpg'
        })
        obj.addElement(img, this.margin + 44, this.margin + 44);

        var img = new Element('img', {
            'src': 'img/foto2.jpg'
        })
        obj.addElement(img, this.margin + 44, this.margin + 111);

        var img = new Element('img', {
            'src': 'img/foto3.jpg'
        })
        obj.addElement(img, this.margin + 44, this.margin + 177);

        var img = new Element('img', {
            'src': 'img/foto4.jpg'
        })
        obj.addElement(img, this.margin + 111, this.margin + 44);

        var img = new Element('img', {
            'src': 'img/foto5.jpg'
        })
        obj.addElement(img, this.margin + 111, this.margin + 111);

        var img = new Element('img', {
            'src': 'img/foto6.jpg'
        })
        obj.addElement(img, this.margin + 111, this.margin + 177);


        var img = new Element('img', {
            'src': 'img/foto7.jpg'
        })
        obj.addElement(img, this.margin + 177, this.margin + 44);

        var img = new Element('img', {
            'src': 'img/foto8.jpg'
        })
        obj.addElement(img, this.margin + 177, this.margin + 111);

        var img = new Element('img', {
            'src': 'img/foto9.jpg'
        })
        obj.addElement(img, this.margin + 177, this.margin + 177);

        obj.fly()
    },

    leftColumn: function(){

        new FlyingString('Gabriel Paladino', 290, 78, {
            'class': 'h1',
            'spacing': 12
        }).fly();

        new FlyingString('Senior Software Engineer', 315, 90, {
            'class': 'h2',
            'spacing': 7
        }).fly();

        var padding_top = 280;

        //E-mail
        new FlyingChar('@', padding_top + 91, 55, {
            'class': 'arroba',
            'title': 'E-mail'
        }).fly();

        var email = new Element('a', {
            'href': 'mailto:gabriel@paladino.pro',
            'text': 'gabriel@paladino.pro',
            'title': 'E-mail'
        });
        new FlyingChar(email, padding_top + 100, 90, {
            'class': 'h2',
            'spacing': 7,
            'title': 'E-mail'
        }).fly();

        //Phone
        var phone = new Element('img', {
            'src': 'img/phone.jpg',
            'title': 'Telefone'
        });
        new FlyingChar(phone, padding_top + 129, 55).fly();
        new FlyingChar('+55 (21) 98804-7007', padding_top + 135, 90, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Telefone'
        }).fly();

        //Localization
        var localization = new Element('img', {
            'src': 'img/localization.jpg',
            'title': 'Localização'
        });
        new FlyingChar(localization, padding_top + 164, 60).fly();
        new FlyingChar('Rio de Janeiro, RJ, BR', padding_top + 170, 90, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Localização'
        }).fly();

        //GitHub
        var github = new Element('a', {
            'href': 'https://github.com/l31rb4g',
            'target': '_blank',
            'title': 'GitHub'
        }).adopt(
            new Element('img', {
                'src': 'img/blacktocat.jpg'
            })
        );
        new FlyingChar(github, padding_top + 198, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        github = new Element('a', {
            'href': 'https://github.com/l31rb4g',
            'target': '_blank',
            'text': 'github.com/l31rb4g',
            'title': 'GitHub'
        });
        new FlyingChar(github, padding_top + 205, 90, {
            'class': 'h2',
            'spacing': 7
        }).fly();

        //LinkedIn
        var linkedin = new Element('a', {
            'href': 'https://www.linkedin.com/in/grppaladino',
            'target': '_blank',
            'title': 'LinkedIn'
        }).adopt(
            new Element('img', {
                'src': 'img/linkedin.jpg'
            })
        );
        new FlyingChar(linkedin, padding_top + 234, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.linkedin.com/in/grppaladino',
            'target': '_blank',
            'text': 'linkedin.com/in/grppaladino',
            'title': 'LinkedIn'
        });
        new FlyingChar(linkedin, padding_top + 240, 90, {
            'class': 'h2',
            'spacing': 7
        }).fly();

        //Facebook
        var facebook = new Element('a', {
            'href': 'https://www.facebook.com/grppaladino',
            'target': '_blank',
            'title': 'Facebook'
        }).adopt(
            new Element('img', {
                'src': 'img/facebook.jpg'
            })
        );
        new FlyingChar(facebook, padding_top + 268, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.facebook.com/grppaladino',
            'target': '_blank',
            'text': 'facebook.com/grppaladino',
            'title': 'Facebook'
        });
        new FlyingChar(linkedin, padding_top + 275, 90, {
            'class': 'h2',
            'spacing': 7
        }).fly();

    }

};
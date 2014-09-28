Interface = {

    //670px minimum window height

    initialize: function(){
        this.buildFrame();
        setTimeout(function(){
            this.picture();
        }.bind(this), 1200);
        setTimeout(function(){
            this.leftColumn();
        }.bind(this), 850);
        setTimeout(function(){
            this.menu();
        }.bind(this), 2000);
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
        var frame = new FlyingObject({
            'class': 'frame',
            'interval': 8,
            'duration': 400
        });
        var margin = 30;
        this.margin = margin;
        var cs = Interface.getCharSize('frame');

        frame.addElement('+', margin, margin);

        var qtd_y = Math.ceil((window.getSize().y - (margin * 2)) / 32) - 1;
        var qtd_x = ((window.getSize().x - (margin * 2)) / 17).toInt() - 3;

        //left 1
        var n1 = cs.y + margin - 8;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n1, margin);
            n1 += cs.y + 4;
        }
        frame.addElement('+', n1 - 6, margin);

        //left 2
        var n1 = cs.y + margin - 8;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n1, margin + 272);
            n1 += cs.y + 4;
        }

        //top
        var y = 3;
        var n2 = cs.x + margin;
        var char;
        for (var i=0; i<qtd_x; i++) {
            if (i == 15) {
                char = '+';
                y = 0;
            } else {
                char = '-';
                y = 3;
            }
            frame.addElement(char, margin - y, n2);
            n2 += cs.x;
        }
        frame.addElement('+',  margin, n2);

        //top2
        var n22 = 310;
        for (var i=0; i<qtd_x-15; i++) {
            frame.addElement('-', margin + 36, n22);
            n22 += cs.x;
        }


        //right
        var n3 = cs.y + margin - 8;
        for (var i=0; i<qtd_y; i++) {
            frame.addElement('|', n3, n2);
            n3 += cs.y + 4;
        }
        frame.addElement('+', n3 - 6, n2);

        //bottom
        var z;
        var n4 = cs.x + margin;
        for (var i=0; i<qtd_x; i++) {
            if (i == 15){
                char = '+';
                z = 6;
            } else {
                char = '-';
                z = 8;
            }
            frame.addElement(char, n3 - z, n4);
            n4 += cs.x;
        }

        frame.fly();
    },

    picture: function(){
        var obj = new FlyingObject({
            'class': 'picture',
            'duration': 500,
            interval: 25
        });
        var r = 1;
        var c = 1;
        var stepx = 0;
        var stepy = 0;

        for (var i=0; i<64; i++) {
            var img = new Element('img', {
                'src': 'img/foto/foto1_r' + r + '_c' + c + '.jpg'
            });
            obj.addElement(img, this.margin + 44 + stepy, this.margin + 44 + stepx);

            if (c == 8) {
                r++;
                c = 1;
                stepx = 0;
                stepy += 25;
            } else {
                c++;
                stepx += 25;
            }
        }

        obj.fly();
    },

    leftColumn: function(){

        window.gp = new FlyingString('Gabriel Paladino', 290, 78, {
            'class': 'h1',
            'spacing': 12,
            'interval': 25,
            'duration': 1200
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

        //Skype
        var skype = new Element('img', {
            'src': 'img/skype.jpg',
            'title': 'Skype'
        });
        new FlyingChar(skype, padding_top + 164, 55).fly();
        new FlyingChar('l31rb4g', padding_top + 170, 90, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Skype'
        }).fly();

        //Localization
        var localization = new Element('img', {
            'src': 'img/localization.jpg',
            'title': 'Localização'
        });
        new FlyingChar(localization, padding_top + 199, 60).fly();
        new FlyingChar('Rio de Janeiro, RJ, BR', padding_top + 205, 90, {
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
        new FlyingChar(github, padding_top + 233, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        github = new Element('a', {
            'href': 'https://github.com/l31rb4g',
            'target': '_blank',
            'text': 'github.com/l31rb4g',
            'title': 'GitHub'
        });
        new FlyingChar(github, padding_top + 240, 90, {
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
        new FlyingChar(linkedin, padding_top + 269, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.linkedin.com/in/grppaladino',
            'target': '_blank',
            'text': 'linkedin.com/in/grppaladino',
            'title': 'LinkedIn'
        });
        new FlyingChar(linkedin, padding_top + 275, 90, {
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
        new FlyingChar(facebook, padding_top + 303, 55, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.facebook.com/grppaladino',
            'target': '_blank',
            'text': 'facebook.com/grppaladino',
            'title': 'Facebook'
        });
        new FlyingChar(linkedin, padding_top + 310, 90, {
            'class': 'h2',
            'spacing': 7
        }).fly();

    },

    menu: function(){
        var link = new Element('a', {
            'text': 'Perfil',
            'href': 'javascript:;'
        });
        new FlyingChar(link, 50, 320).fly();
    }

};
Interface = {

    frameSize: {
        x: 1284,
        y: 676
    },

    initialize: function(){
        this.buildFrame();
    },

    getCharSize: function(cl){
        var el = new Element('span', {
            'class': 'flyingChar ' + cl,
            'text': '.',
            'styles': {
                'top': -50,
                'left': -50,
                'visibility': 'hidden'
            }
        }).inject($$('body')[0]);
        var size = el.getSize();
        el.dispose();
        return size;
    },

    buildFrame: function(){
        var cs = Interface.getCharSize('frame');
        if (window.initialCS.x == cs.x){
            setTimeout(function(){
                this.buildFrame();
            }.bind(this), 100);
        } else {
            var frame = new FlyingObject({
                'class': 'frame',
                'interval': 8,
                'duration': 400
            });

            var margin = 30;
            this.centerWidth = ((window.getSize().x - this.frameSize.x) / 2).toInt();
            this.centerHeight = ((window.getSize().y - this.frameSize.y) / 2).toInt();

            this.margin = margin;

            frame.addElement('+', margin + this.centerHeight, margin + this.centerWidth);

            //var qtd_y = Math.ceil((window.getSize().y - (margin * 2)) / 32) - 1;
            var qtd_y = 18;
            //var qtd_x = ((window.getSize().x - (margin * 2)) / 17).toInt() - 3;
            var qtd_x = 70;

            //left 1
            var n1 = cs.y + margin - 8;
            for (var i = 0; i < qtd_y; i++) {
                frame.addElement('|', n1 + this.centerHeight, margin + this.centerWidth);
                n1 += cs.y + 4;
            }
            frame.addElement('+', n1 - 6 + this.centerHeight, margin + this.centerWidth);

            //left 2
            var n1 = cs.y + margin - 8;
            for (var i = 0; i < qtd_y; i++) {
                frame.addElement('|', n1 + this.centerHeight, margin + 272 + this.centerWidth);
                n1 += cs.y + 4;
            }

            //top
            var y = 3;
            var n2 = cs.x + margin;
            var char;
            for (var i = 0; i < qtd_x; i++) {
                if (i == 15) {
                    char = '+';
                    y = 0;
                } else {
                    char = '-';
                    y = 3;
                }
                frame.addElement(char, margin - y + this.centerHeight, n2 + this.centerWidth);
                n2 += cs.x;
            }
            frame.addElement('+', margin + this.centerHeight, n2 + this.centerWidth);

            //top2
            var n22 = 310;
            for (var i = 0; i < qtd_x - 15; i++) {
                frame.addElement('-', margin + 36 + this.centerHeight, n22 + this.centerWidth);
                n22 += cs.x;
            }


            //right
            var n3 = cs.y + margin - 8;
            for (var i = 0; i < qtd_y; i++) {
                frame.addElement('|', n3 + this.centerHeight, n2 + this.centerWidth);
                n3 += cs.y + 4;
            }
            frame.addElement('+', n3 - 6 + this.centerHeight, n2 + this.centerWidth);

            //bottom
            var z;
            var n4 = cs.x + margin;
            for (var i = 0; i < qtd_x; i++) {
                if (i == 15) {
                    char = '+';
                    z = 6;
                } else {
                    char = '-';
                    z = 8;
                }
                frame.addElement(char, n3 - z + this.centerHeight, n4 + this.centerWidth);
                n4 += cs.x;
            }

            frame.fly();

            setTimeout(function(){
                this.picture();
            }.bind(this), 1200);
            setTimeout(function(){
                this.leftColumn();
            }.bind(this), 750);
            setTimeout(function(){
                this.menu();
            }.bind(this), 2000);
        }
    },

    picture: function(){
        var pieces = 8;
        var pieceSize = 200 / pieces;
        if (pieceSize != pieceSize.toInt()){
            console.log('Invalid piece quantity: ' + pieces);
            return false;
        }
        var r = 1;
        var c = 1;
        var stepx = 0;
        var stepy = 0;
        var x = 0
        var y = 0;

        var obj = new FlyingObject({
            'class': 'picture',
            'duration': 500,
            interval: 30
        });

        for (var i=0; i<pieces*pieces; i++) {
            var img = new Element('span', {
                'styles': {
                    'display': 'inline-block',
                    'width': pieceSize,
                    'height': pieceSize,
                    'background': 'url(img/foto.jpg) -' + x + 'px -' + y + 'px no-repeat'
                }
            });

            obj.addElement(img, this.margin + 44 + stepy + this.centerHeight, this.margin + 44 + stepx + this.centerWidth);

            x += pieceSize;

            if (c == pieces) {
                r++;
                c = 1;
                stepx = 0;
                stepy += pieceSize;
                y += pieceSize;
                x = 0;
            } else {
                c++;
                stepx += pieceSize;
            }
        }

        obj.fly();
    },

    leftColumn: function(){

        window.gp = new FlyingString('Gabriel Paladino', 290 + this.centerHeight, 78 + this.centerWidth, {
            'class': 'h1',
            'spacing': 12,
            'interval': 25,
            'duration': 2000
        }).fly();

        new FlyingString('Senior Software Engineer', 315 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'interval': 25,
            'duration': 1000
        }).fly();

        var padding_top = 280;

        //E-mail
        new FlyingChar('@', padding_top + 91 + this.centerHeight, 55 + this.centerWidth, {
            'class': 'arroba',
            'title': 'E-mail'
        }).fly();

        var email = new Element('a', {
            'href': 'mailto:gabriel@paladino.pro',
            'text': 'gabriel@paladino.pro',
            'title': 'E-mail'
        });
        new FlyingChar(email, padding_top + 100 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'E-mail'
        }).fly();

        //Phone
        var phone = new Element('img', {
            'src': 'img/phone.jpg',
            'title': 'Telefone'
        });
        new FlyingChar(phone, padding_top + 129 + this.centerHeight, 55 + this.centerWidth).fly();
        new FlyingChar('+55 (21) 98804-7007', padding_top + 135 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Telefone'
        }).fly();

        //Skype
        var skype = new Element('img', {
            'src': 'img/skype.jpg',
            'title': 'Skype'
        });
        new FlyingChar(skype, padding_top + 164 + this.centerHeight, 55 + this.centerWidth).fly();
        new FlyingChar('l31rb4g', padding_top + 170 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Skype'
        }).fly();

        //Localization
        var localization = new Element('img', {
            'src': 'img/localization.jpg',
            'title': 'Localização'
        });
        new FlyingChar(localization, padding_top + 199 + this.centerHeight, 60 + this.centerWidth).fly();
        new FlyingChar('Rio de Janeiro, RJ, BR', padding_top + 205 + this.centerHeight, 90 + this.centerWidth, {
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
        new FlyingChar(github, padding_top + 233 + this.centerHeight, 55 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        github = new Element('a', {
            'href': 'https://github.com/l31rb4g',
            'target': '_blank',
            'text': 'github.com/l31rb4g',
            'title': 'GitHub'
        });
        new FlyingChar(github, padding_top + 240 + this.centerHeight, 90 + this.centerWidth, {
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
        new FlyingChar(linkedin, padding_top + 269 + this.centerHeight, 55 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.linkedin.com/in/grppaladino',
            'target': '_blank',
            'text': 'linkedin.com/in/grppaladino',
            'title': 'LinkedIn'
        });
        new FlyingChar(linkedin, padding_top + 275 + this.centerHeight, 90 + this.centerWidth, {
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
        new FlyingChar(facebook, padding_top + 303 + this.centerHeight, 55 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly();
        linkedin = new Element('a', {
            'href': 'https://www.facebook.com/grppaladino',
            'target': '_blank',
            'text': 'facebook.com/grppaladino',
            'title': 'Facebook'
        });
        new FlyingChar(linkedin, padding_top + 310 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly();

    },

    menu: function(){
        var link = new Element('a', {
            'text': 'Perfil',
            'href': 'javascript:;'
        });
        new FlyingChar(link, 50 + this.centerHeight, 315 + this.centerWidth).fly();
    }

};

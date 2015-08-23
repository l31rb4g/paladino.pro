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
        if (window.initialCS.x == cs.x && cs.x != 17){
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
            /*var n22 = 310;
            for (var i = 0; i < qtd_x - 15; i++) {
                frame.addElement('-', margin + 36 + this.centerHeight, n22 + this.centerWidth);
                n22 += cs.x;
            }*/


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
            }.bind(this), 0);
            setTimeout(function(){
                this.leftColumn();
            }.bind(this), 750);
            setTimeout(function(){
                this.skills();
            }.bind(this), 2200);
            setTimeout(function(){
                this.experience();
            }.bind(this), 2500);
            setTimeout(function(){
                this.idioms();
            }.bind(this), 2500);
            setTimeout(function(){
                this.projects();
            }.bind(this), 3000);
        }
    },

    shuffle: function(sourceArray){
        sourceArray.each(function(el, n){
            var k = n + Math.floor(Math.random() * (sourceArray.length - n));
            var temp = sourceArray[k];
            sourceArray[k] = sourceArray[n];
            sourceArray[n] = temp;
        });
        return sourceArray;
    },

    picture: function(){
        var pieces = 20;
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
            interval: 10
        });

        var n = '';
        if (Math.round(Math.random() * 100) >= 50){
            n = '2';
        }

        for (var i=0; i<pieces*pieces; i++) {
            var img = new Element('span', {
                'styles': {
                    'display': 'inline-block',
                    'width': pieceSize,
                    'height': pieceSize,
                    'background': 'url(img/foto' + n + '.jpg) -' + x + 'px -' + y + 'px no-repeat'
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

        setTimeout(function(){
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
        }.bind(this), 1000);

        var padding_top = 280;

        //E-mail
        new FlyingChar('@', padding_top + 91 + this.centerHeight, 55 + this.centerWidth, {
            'class': 'arroba',
            'title': 'E-mail'
        }).fly(100);

        var email = new Element('a', {
            'href': 'mailto:gabriel@paladino.pro',
            'text': 'gabriel@paladino.pro',
            'title': 'E-mail'
        });
        new FlyingChar(email, padding_top + 100 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'E-mail'
        }).fly(200);

        //Phone
        var phone = new Element('img', {
            'src': 'img/phone.jpg',
            'title': 'Telefone'
        });
        new FlyingChar(phone, padding_top + 129 + this.centerHeight, 55 + this.centerWidth).fly(400);
        new FlyingChar('+55 (21) 98804-7007', padding_top + 135 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Telefone'
        }).fly(500);

        //Skype
        var skype = new Element('img', {
            'src': 'img/skype.jpg',
            'title': 'Skype'
        });
        new FlyingChar(skype, padding_top + 164 + this.centerHeight, 55 + this.centerWidth).fly(700);
        new FlyingChar('l31rb4g', padding_top + 170 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Skype'
        }).fly(800);

        //Localization
        var localization = new Element('img', {
            'src': 'img/localization.jpg',
            'title': 'Localização'
        });
        new FlyingChar(localization, padding_top + 199 + this.centerHeight, 60 + this.centerWidth).fly(1000);
        new FlyingChar('Rio de Janeiro, RJ, BR', padding_top + 205 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7,
            'title': 'Localização'
        }).fly(1100);

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
        }).fly(1300);
        github = new Element('a', {
            'href': 'https://github.com/l31rb4g',
            'target': '_blank',
            'text': 'github.com/l31rb4g',
            'title': 'GitHub'
        });
        new FlyingChar(github, padding_top + 240 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly(1400);

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
        }).fly(1600);
        linkedin = new Element('a', {
            'href': 'https://www.linkedin.com/in/grppaladino',
            'target': '_blank',
            'text': 'linkedin.com/in/grppaladino',
            'title': 'LinkedIn'
        });
        new FlyingChar(linkedin, padding_top + 275 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly(1700);

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
        }).fly(1900);
        facebook = new Element('a', {
            'href': 'https://www.facebook.com/grppaladino',
            'target': '_blank',
            'text': 'facebook.com/grppaladino',
            'title': 'Facebook'
        });
        new FlyingChar(facebook, padding_top + 310 + this.centerHeight, 90 + this.centerWidth, {
            'class': 'h2',
            'spacing': 7
        }).fly(2000);

    },

    experience: function(){
        var el = new Element('div', {
            'styles': {
                'position': 'absolute',
                'top': -1000,
                'left': 920 + this.centerWidth
            }
        }).adopt(
            new Element('h1', {'text': 'Experiência profissional'}),
            new Element('div', {'class': 'job'}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/pearson.png',
                        'styles': {
                            'margin-top': 27
                        }
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'Pearson', 'class': 'company'}),
                    new Element('div', {'text': 'Senior Software Engineer'}),
                    new Element('div', {'text': 'junho/2014 - atualmente'})
                )
            ),
            new Element('div', {'class': 'job'}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/ingresso.png',
                        'styles': {
                            'margin-top': 20
                        }
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'Ingresso.com', 'class': 'company'}),
                    new Element('div', {'text': 'Javascript specialist'}),
                    new Element('div', {'text': 'fevereiro/2012 - maio/2012'})
                )
            ),
            new Element('div', {'class': 'job'}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/ezlearn.png',
                        'styles': {
                            'margin-top': 16
                        }
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'ezLearn Educacional', 'class': 'company'}),
                    new Element('div', {'text': 'Software Engineer'}),
                    new Element('div', {'text': 'julho/2010 - junho/2014'})
                )
            ),
            new Element('div', {'class': 'job'}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/rjhost.gif'
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'RJHost Soluções de Internet', 'class': 'company'}),
                    new Element('div', {'text': 'Web Developer'}),
                    new Element('div', {'text': 'julho/2007 - agosto/2009'})
                )
            )
        );
        el.inject($$('body')[0]);
        el.set('tween', {'duration': 1500, transition: Fx.Transitions.Cubic.easeOut});
        el.tween('top', 70 + this.centerHeight);
    },

    skills: function(){
        var skills = [
            ['Python', 92],
            ['PHP', 94],
            ['Javascript', 96],
            ['Shell/bash', 86],
            ['HTML 5', 90],
            ['CSS 3', 85],
            ['jQuery', 98],
            ['MooTools', 97],
            ['Django', 84],
            ['CakePHP', 88],
            ['Amazon Web Services', 83],
            ['Scrum', 95],
            ['Cordova/Phonegap', 85],
            ['Jenkins', 80],
            ['SQL', 85],
            ['Linux', 92],
            ['Windows', 88]
        ];
        //this.shuffle(skills);
        skills.sort(function (a, b) {
            return b[1] - a[1];
        });
        var el = new Element('div', {
            'styles': {
                'position': 'absolute',
                'top': 70 + this.centerHeight,
                'left': window.getSize().x + this.centerWidth
            }
        }).adopt(
            new Element('h1', {'text': 'Skills'}),
            new Element('div', {'class': 'skills'})
        );
        skills.each(function(lang){
            new Element('div', {'text': lang[0]}).adopt(
                new Element('div', {'class': 'progressbar'}).adopt(
                    new Element('div', {'styles': {'width': lang[1] + '%'}})
                )
            ).inject(el.getElement('.skills'));
        });
        el.inject($$('body')[0]);
        el.set('tween', {'duration': 500, transition: Fx.Transitions.Cubic.easeOut});
        el.tween('left', 335 + this.centerWidth);
    },

    idioms: function(){
        var el = new Element('div', {
            'styles': {
                'position': 'absolute',
                'top': 450 + this.centerHeight,
                'left': -1000
            }
        }).adopt(
            new Element('h1', {'text': 'Idiomas', 'class': 'idiom'}),
            new Element('div', {'class': 'skills idioms'})
        );
        var idioms = [
            ['Português', 98],
            ['English', 85],
            ['Español', 35]
        ];
        idioms.each(function(idiom){
            new Element('div', {'text': idiom[0]}).adopt(
                new Element('div', {'class': 'progressbar'}).adopt(
                    new Element('div', {'styles': {'width': idiom[1] + '%'}})
                )
            ).inject(el.getElement('.idioms'));
        });

        el.inject($$('body')[0]);
        el.set('tween', {'duration': 500, transition: Fx.Transitions.Cubic.easeOut});
        el.tween('left', 620 + this.centerWidth);
    },

    projects: function(){
        var el = new Element('div', {
            'styles': {
                'position': 'absolute',
                'top': window.getSize().y + this.centerHeight,
                'left': 620 + this.centerWidth
            }
        }).adopt(
            new Element('h1', {'text': 'Projetos'}),
            new Element('div', {'class': 'job project'}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/wizard-plus.png',
                        'styles': {
                            'margin-top': 27
                        }
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'Wizard Plus', 'class': 'company'}),
                    new Element('div', {
                        'class': 'description',
                        'text': 'O Wizard Plus é o primeiro produto no mundo de Blended Learning, ou seja, ensino de idiomas que utiliza uma'
                    })
                ),
                new Element('div', {
                    'class': 'description more',
                    'text': 'plataforma adaptativa para personalizar as atividades dos alunos, incluindo a utilização de aplicativos para dispositivos móveis próprios e exclusivos em sala de aula.'
                })
            ),
            new Element('div', {'class': 'job project', 'styles': {'margin-top': 30}}).adopt(
                new Element('div').adopt(
                    new Element('img', {
                        'src': '/img/meuingles.png',
                        'styles': {
                            'margin-top': 23
                        }
                    })
                ),
                new Element('div').adopt(
                    new Element('div', {'text': 'Meuinglês', 'class': 'company'}),
                    new Element('div', {
                        'class': 'description',
                        'text': 'O Meuinglês utiliza a metodologia “Communicative Language Teaching”, focada na comunicação. O aprendi-'
                    })
                ),
                new Element('div', {
                    'class': 'description more',
                    'text': 'zado do idioma acontece através da interação e da execução de atividades simples com objetivos bem definidos. São aulas e conteúdos com situações do dia a dia, tanto para a vida pessoal quanto para a vida profissional.'
                })
            )
        );

        el.inject($$('body')[0]);
        el.set('tween', {'duration': 500, transition: Fx.Transitions.Cubic.easeOut});
        el.tween('top', 70 + this.centerHeight);
    }

};

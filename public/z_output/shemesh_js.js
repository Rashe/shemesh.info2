//easing plugin svistelki i perdelki making
jQuery.easing['jswing'] = jQuery.easing['swing']; jQuery.extend(jQuery.easing, {def: 'easeOutQuad', swing: function (x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d) }, easeInQuad: function (x, t, b, c, d) { return c * (t /= d) * t + b }, easeOutQuad: function (x, t, b, c, d) { return-c * (t /= d) * (t - 2) + b }, easeInOutQuad: function (x, t, b, c, d) { if ((t /= d / 2) < 1)return c / 2 * t * t + b; return-c / 2 * ((--t) * (t - 2) - 1) + b }, easeInCubic: function (x, t, b, c, d) { return c * (t /= d) * t * t + b }, easeOutCubic: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b }, easeInOutCubic: function (x, t, b, c, d) { if ((t /= d / 2) < 1)return c / 2 * t * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b }, easeInQuart: function (x, t, b, c, d) { return c * (t /= d) * t * t * t + b }, easeOutQuart: function (x, t, b, c, d) { return-c * ((t = t / d - 1) * t * t * t - 1) + b }, easeInOutQuart: function (x, t, b, c, d) { if ((t /= d / 2) < 1)return c / 2 * t * t * t * t + b; return-c / 2 * ((t -= 2) * t * t * t - 2) + b }, easeInQuint: function (x, t, b, c, d) { return c * (t /= d) * t * t * t * t + b }, easeOutQuint: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b }, easeInOutQuint: function (x, t, b, c, d) { if ((t /= d / 2) < 1)return c / 2 * t * t * t * t * t + b; return c / 2 * ((t -= 2) * t * t * t * t + 2) + b }, easeInSine: function (x, t, b, c, d) { return-c * Math.cos(t / d * (Math.PI / 2)) + c + b }, easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b }, easeInOutSine: function (x, t, b, c, d) { return-c / 2 * (Math.cos(Math.PI * t / d) - 1) + b }, easeInExpo: function (x, t, b, c, d) { return(t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b }, easeOutExpo: function (x, t, b, c, d) { return(t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b }, easeInOutExpo: function (x, t, b, c, d) { if (t == 0)return b; if (t == d)return b + c; if ((t /= d / 2) < 1)return c / 2 * Math.pow(2, 10 * (t - 1)) + b; return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b }, easeInCirc: function (x, t, b, c, d) { return-c * (Math.sqrt(1 - (t /= d) * t) - 1) + b }, easeOutCirc: function (x, t, b, c, d) { return c * Math.sqrt(1 - (t = t / d - 1) * t) + b }, easeInOutCirc: function (x, t, b, c, d) { if ((t /= d / 2) < 1)return-c / 2 * (Math.sqrt(1 - t * t) - 1) + b; return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b }, easeInElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0)return b; if ((t /= d) == 1)return b + c; if (!p)p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return-(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b }, easeOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0)return b; if ((t /= d) == 1)return b + c; if (!p)p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b }, easeInOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0)return b; if ((t /= d / 2) == 2)return b + c; if (!p)p = d * (.3 * 1.5); if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1)return-.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b }, easeInBack: function (x, t, b, c, d, s) { if (s == undefined)s = 1.70158; return c * (t /= d) * t * ((s + 1) * t - s) + b }, easeOutBack: function (x, t, b, c, d, s) { if (s == undefined)s = 1.70158; return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b }, easeInOutBack: function (x, t, b, c, d, s) { if (s == undefined)s = 1.70158; if ((t /= d / 2) < 1)return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b }, easeInBounce: function (x, t, b, c, d) { return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b }, easeOutBounce: function (x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b } else if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b } else if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b } }, easeInOutBounce: function (x, t, b, c, d) { if (t < d / 2)return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b }});;(function () {
    var shmsh = function () {
        var _that = this;
        this.settings = {

            degug: true,
            selectors: {
                placeholder: 'input[placeholder]',
                search_button: '.search_btn',
                message: '.message',
                eban: '#eban',
                search_form: '.search_form',
                fuck: '.fuck',
                here: '.here',
                nav_outside: '#outside',
                top_list: '.top_list',
                nav_text: '.nav_text',
                login: '#login',
                clopener: '.clopener',
                nav_inside: '#inside',
                aside_nav: '#aside_nav',
                services: '#services',
                turn_reg_but: '.turn_reg button',
                blogeg: '#blogeg',
                blogeg_article: '#blogeg_article'

            },
            classes: {
                nav_text_wide: 'nav_text_wide',
                hidden: 'hidden',
                clops: 'clopener_pos',
                clopener_ser: 'clopener_ser'
            }

        };

        this.init = function (settings) {
            var _selectors = _that.settings.selectors;
            //this.main.placeholder(_selectors.placeholder);
            //this.main.search_shit();
            //this.main.nav_hover();
            this.main.clopener();
            this.main.blog_sendForm();
            //this.main.createWidget();
            //this.main.next();
            //this.main.prev();
        };

        this.main = {
            placeholder: function (placeholder) {
                var $placeholder = $(placeholder);
                if ($placeholder.length > 0) {
                    var attrPh = $placeholder.attr('placeholder');
                    $placeholder.attr('value', attrPh)
                        .bind('focus', function () {
                            var $this = $(this);
                            if ($this.val() === attrPh)
                                $this.val('').css('color', '#fff');
                        }).bind('blur', function () {
                            var $this = $(this);
                            if ($this.val() === '')
                                $this.val(attrPh).css('color', '#fff');
                        });

                }
            },
            search_shit: function () {
                var _selectors = _that.settings.selectors,
                    search_btn = $(_selectors.search_button),
                    message = $(_selectors.message),
                    eban = $(_selectors.eban),
                    search_form = $(_selectors.search_form),
                    fuck = $(_selectors.fuck),
                    here = $(_selectors.here);

                search_btn.attr("disabled", true);
                message.show().delay(5000).fadeOut();

                eban.stop().animate({
                    top: 0
                }, 1500, 'easeOutBounce').delay(5000).animate({
                    top: -500
                }, 1500, 'easeOutBounce');

                search_form.stop().delay(6000).animate({
                    left: -9999
                }, 1500, 'easeOutBounce');
                setTimeout(function () {
                    fuck.fadeIn(500);
                }, 8000);
                setTimeout(function () {
                    here.fadeIn(500);
                }, 10000);

            },
            nav_hover: function () {
                var _selectors = _that.settings.selectors,
                    nav = $(_selectors.nav_outside),
                    top_list = $(_selectors.top_list),
                    nav_text = $(_selectors.nav_text),
                    nav_text_wide = _that.settings.classes.nav_text_wide;
                nav.hover(
                    function () {
                        top_list.slideDown('medium');
                        nav_text.addClass(nav_text_wide);
                        var _width = nav.width();
                        $('.nav_image img').width(_width);
                    },
                    function () {
                        top_list.stop();
                        top_list.slideUp('medium');
                        nav_text.removeClass(nav_text_wide);
                    }
                );
            },
            clopener: function () {
                var _selectors = _that.settings.selectors,
                    _classes = _that.settings.classes,
                    nav = $(_selectors.aside_nav),
                    clopener = $(_selectors.clopener),
                    hidden = _classes.hidden,
                    clops = _classes.clops,
                    services = $(_selectors.services),
                    clopener_ser = _classes.clopener_ser,
                    blogeg = $(_selectors.blogeg),
                    blogeg_article = $(_selectors.blogeg_article);
                clopener.on("click", function () {
                    if (nav.hasClass(hidden)) {
                        nav.removeClass(hidden);
                        clopener.removeClass(clops);
                        services.removeClass(clopener_ser);
                        blogeg.removeClass(clopener_ser);
                        blogeg_article.removeClass(clopener_ser);
                    }
                    else {
                        nav.addClass(hidden);
                        clopener.addClass(clops);
                        services.addClass(clopener_ser);
                        blogeg.addClass(clopener_ser);
                        blogeg_article.addClass(clopener_ser);
                    }
                });
            },
            send_ajax: function (ajax_data, where) {
                $.ajax({
                    url: where,
                    method: "POST",
                    data: ajax_data,
                    complete: function () {
                    }
                });
                return false;
            },
            turn_reg_text: function () {
                var _selectors = _that.settings.selectors,
                    _turn_reg_but = $(_selectors.turn_reg_but),
                    s_text = 'Turn off registration',
                    s_text2 = 'Turn on registration',
                    cur_text = _turn_reg_but.text();
                if (cur_text == s_text) {
                    cur_text = s_text2;
                } else {
                    cur_text = s_text;
                }
                _turn_reg_but.text(cur_text);
            },
            blog_sendForm: function (form_name, post, href) {
                $(document.forms[form_name]).on('submit', function () {
                    var form = $(this);
                    var gfff = form.serialize();
                    $('.error', form).html('');
                    $.ajax({
                        url: post,
                        method: "POST",
                        data: form.serialize(),
                        complete: function () {
                        },
                        statusCode: {
                            200: function () {
                                window.location.href = href;
                            },
                            403: function (jqXHR) {
                                //var error = JSON.parse(jqXHR.responseText);
                                var error = jqXHR.responseText;
                                _that.main.error_disp(error);
                                //$('.error', form).html(error.message);
                            }
                        }
                    });
                    return false;
                });
            },
            error_disp: function (error_message) {
                $(_that.settings.selectors.error_id).show();
                $(_that.settings.selectors.error_id + ' p').text(error_message);
            }
        }
    };
    window.shmsh = new shmsh();
}());


$(document).ready(function () {
    shmsh.init({debug: true});

    $('.search_btn').on('click', function () {
        shmsh.main.search_shit()
    });
    $('.close').on('click', function () {
        $(this).parent().hide();
    });
    $(shmsh.settings.selectors.turn_reg_but).on('click', function () {
        shmsh.main.send_ajax({huj: "givi"}, '/reg_onOff');
        shmsh.main.turn_reg_text();
    });
    if ($('#make_post_id').length > 0) {
        shmsh.main.blog_sendForm('make_post', '/blog_make', '/blog_admin');
    }
    if ($('#edit_post_id').length > 0) {
        shmsh.main.blog_sendForm('edit_post', '/post_edit', '/blog_admin');
    }
});
;(function () {
    var auth = function () {
        var _that = this;
        this.settings = {
            degug: true,
            selectors: {
                login: '#login',
                error_id: '#error_disp',
                for_bots: '#for_bots',
                regi_button: '.but_holder button'
            },
            classes: {}
        };

        this.init = function (settings) {
            var _selectors = _that.settings.selectors;
            this.main.auth_sendForm();
            this.main.hidden_input();
        };

        this.main = {
            auth_sendForm: function (form_name, post, href) {
                $(document.forms[form_name]).on('submit', function () {
                   var input_check = _that.main.hidden_input();
                    if(input_check == false){
                        window.location.href = '/';
                    }
                    var form = $(this);
                    $('.error', form).html('');
                    $.ajax({
                        url: post,
                        method: "POST",
                        data: form.serialize(),
                        complete: function () {
                        },
                        statusCode: {
                            200: function () {
                                window.location.href = href;
                            },
                            403: function (jqXHR) {
                                //var error = JSON.parse(jqXHR.responseText);
                                var error = jqXHR.responseText;
                                _that.main.error_disp(error);
                                //$('.error', form).html(error.message);
                            }
                        }
                    });
                    return false;
                });
            },
            error_disp: function (error_message) {
                $(_that.settings.selectors.error_id).show();
                $(_that.settings.selectors.error_id + ' p').text(error_message);
            },
            hidden_input: function(){
               var _for_bots = $(_that.settings.selectors.for_bots),
                   _button = $(_that.settings.selectors.regi_button);
                if(_for_bots.length < 1){
                    return;
                }
                if(_for_bots.val() != ''){
                    return false;
                }
            }
        }
    };
    window.auth = new auth();
}());


$(document).ready(function () {
    auth.init({debug: true});

    if ($('#login').length > 0) {
        auth.main.auth_sendForm('login_form', '/login', '/services');
    }
    if ($('#registration').length > 0) {
        auth.main.auth_sendForm('registration_form', '/registration', '/services');
    }

});;(function () {
    var auth = function () {
        var _that = this;
        this.settings = {
            degug: true,
            selectors: {
                login: '#login',
                error_id: '#error_disp',
                for_bots: '#for_bots',
                regi_button: '.but_holder button'
            },
            classes: {}
        };

        this.init = function (settings) {
            var _selectors = _that.settings.selectors;
            this.main.auth_sendForm();
            this.main.hidden_input();
        };

        this.main = {
            auth_sendForm: function (form_name, post, href) {
                $(document.forms[form_name]).on('submit', function () {
                    var input_check = _that.main.hidden_input();
                    if(input_check == false){
                        window.location.href = '/';
                    }
                    var form = $(this);
                    $('.error', form).html('');
                    $.ajax({
                        url: post,
                        method: "POST",
                        data: form.serialize(),
                        complete: function () {
                        },
                        statusCode: {
                            200: function () {
                                window.location.href = href;
                            },
                            403: function (jqXHR) {
                                //var error = JSON.parse(jqXHR.responseText);
                                var error = jqXHR.responseText;
                                _that.main.error_disp(error);
                                //$('.error', form).html(error.message);
                            }
                        }
                    });
                    return false;
                });
            },
            error_disp: function (error_message) {
                $(_that.settings.selectors.error_id).show();
                $(_that.settings.selectors.error_id + ' p').text(error_message);
            },
            hidden_input: function(){
                var _for_bots = $(_that.settings.selectors.for_bots),
                    _button = $(_that.settings.selectors.regi_button);
                if(_for_bots.length < 1){
                    return;
                }
                if(_for_bots.val() != ''){
                    return false;
                }
            }
        }
    };
    window.auth = new auth();
}());


$(document).ready(function () {
    auth.init({debug: true});

    if ($('#login').length > 0) {
        auth.main.auth_sendForm('login_form', '/login', '/services');
    }
    if ($('#registration').length > 0) {
        auth.main.auth_sendForm('registration_form', '/registration', '/services');
    }

});
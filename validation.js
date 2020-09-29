$(document).ready(function() {
    $('#contact_form').bootstrapValidator({        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fname: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Пожалуйста, введите ваше имя'
                    }
                }
            },
             lname: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Пожалуйста, введите свою фамилию'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите Ваш email'
                    },
                    emailAddress: {
                        message: 'Пожалуйста, введите действительный email'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Пожалуйста, введите не менее 10 символов и не более 200'
                    },
                    notEmpty: {
                        message: 'Пожалуйста, введите текст'
                    }
                    }
                }
            }
        }).on('success.form.bv', function(e) {           
            e.preventDefault();            
            var $form = $(e.target);            
            $.post($form.attr('action'), $form.serialize(), function(result) {                
				$("#message").html(result.message).addClass('show');
				$("#contact_form").find("input[type=text], input[type=email], textarea").val("");
            }, 'json');
        });
});
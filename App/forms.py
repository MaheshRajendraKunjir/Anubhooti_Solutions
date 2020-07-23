from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from wtforms.fields.html5 import TelField
from App.models import user



class Registration(FlaskForm):
    username = StringField('Username', 
                                validators=[DataRequired(), Length(min=2, max=20)])

    email = StringField('Email', validators=[DataRequired(), Email()])

    password = PasswordField('Password', validators=[DataRequired()])

    confirm_password = PasswordField('Confirm Password',
                                     validators=[DataRequired(), EqualTo('password')]) 

    submit = SubmitField('Sign up')                      

    def validate_username(self, username):
        username = user.query.filter_by(username = username.data).first()
        if username:
            raise ValidationError('The username is taken')
    
    def validate_email(self, email):
        email = user.query.filter_by(email = email.data).first()
        if email:
            raise ValidationError('The email is taken')

class Login(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])

    password = PasswordField('Password', validators=[DataRequired()])

    remember = BooleanField('remember me')

    submit = SubmitField('Login')     
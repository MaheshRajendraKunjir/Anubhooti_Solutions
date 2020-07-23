from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'mysql://root:root@localhost/anubhooti'
app.config['SECRET_KEY']= '191bbafe23a9b66f168a54fd50b59896'
db = SQLAlchemy(app)
bcrypt = Bcrypt()
login_manager = LoginManager(app)

from App import routes
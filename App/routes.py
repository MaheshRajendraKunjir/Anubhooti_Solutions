from flask import render_template, url_for, redirect, flash
from App.forms import Login , Registration
from App.models import user
from App import app, bcrypt, db
from flask_login import login_user, current_user, logout_user

@app.route('/')
def home():
    app.route('/')
    if current_user.is_authenticated:
        return render_template('index.html', name = current_user.username)
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/register', methods = ['GET', 'POST'])
def register():
    form = Registration()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        username = user(username = form.username.data,email = form.email.data, password = hashed_password)
        db.session.add(username)
        db.session.commit()
        return redirect(url_for('login'))
    else: 
        print(form.email.data)
        print(form.password.errors)
        print(form.confirm_password.errors)
    return render_template('register.html', form = form)
    
@app.route('/login', methods = ['GET', 'POST'])
def login():
    form = Login()
    if form.validate_on_submit():
        username = user.query.filter_by(email = form.email.data).first()
        print(username, bcrypt.check_password_hash(username.password, form.password.data))
        if username and bcrypt.check_password_hash(username.password, form.password.data):
            login_user(username, remember= True)
            return redirect(url_for('home'))
        else: 
            flash('Login unsuccessful. Please check email and password.')    
    return render_template("login.html", form = form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))
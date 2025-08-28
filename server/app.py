# __init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize db without binding to the app yet
db = SQLAlchemy()

# Import models so they register with SQLAlchemy
from .UserModel import User
# Add other models here if needed

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///olibranch.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Bind db to the app
    db.init_app(app)

    # Register Blueprints
    from .auth_routes import auth_routes
    from .resource_routes import resource_routes

    app.register_blueprint(auth_routes, url_prefix='/auth')
    app.register_blueprint(resource_routes, url_prefix='/resources')

    # Create database tables
    with app.app_context():
        db.create_all()

    return app

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .UserModel import db
from .auth_routes import auth_routes
from .resource_routes import resource_routes

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///olibranch.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# Register Blueprints
app.register_blueprint(auth_routes, url_prefix='/auth')
app.register_blueprint(resource_routes, url_prefix='/resources')

if __name__ == '__main__':
    app.run(debug=True)

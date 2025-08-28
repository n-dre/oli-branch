# test/factories.py
from app.models.UserModel import User

def create_user(username='testuser', email='test@example.com', password='password123'):
    user = User.create(username, email, password)
    return user
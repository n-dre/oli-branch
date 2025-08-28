# run.py
from your_package_name import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
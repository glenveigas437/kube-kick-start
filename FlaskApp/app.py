from flask import Flask

app = Flask(__name__)

app.config.from_object('settings')

# Import views after app is created to avoid circular imports
from views import *

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
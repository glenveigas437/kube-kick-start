from flask import render_template
from app import app
from settings import APP_ENV, APP_PASSWORD, POD_NAME
from datetime import datetime

@app.route('/')
def home():
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return render_template('index.html', 
                          app_env=APP_ENV,
                          app_password=APP_PASSWORD,
                          pod_name=POD_NAME,
                          timestamp=timestamp)

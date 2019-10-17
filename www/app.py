# Imports
from aux_pro import Process
from database import Database
from flask import Flask
from flask import jsonify
from flask import render_template
from flask import request
from models import Team
import datetime
import os
  
app = Flask(__name__)
pro = Process()
# RUTAS 
# Define the route to enter in the browser
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    # Define HOST and port
    app.run(host='0.0.0.0', port=8888)


@app.route('/reproductor')
def reproductor():
    return render_template('reproductor.html')

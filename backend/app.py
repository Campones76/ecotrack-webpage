from flask import Flask
from flask_session import Session
from backend.views.landingpage import *

app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

SECRET_KEY = "5cc130ab569ac767ea9a5a272747592658aedfe069b91a9ab2f8d4222e97861ddddec6639feac050e6efab0274f37122617195df39b2b296881d356ec3402740d7841af0beb99dfff6fce567d124ae62626950f3ee4489dd565c814c82b2cc38bd4924302bb395ef4fb2696252eb0803a9b3f86fe2e927843aabe0b12859e6b7cada48cdb9975489f588839648ff61ab2703456f8de8e99133578640d\/-!63c63ffb776-!"
app.config['SECRET_KEY'] = SECRET_KEY

# Register Blueprints
app.register_blueprint(landingpage_bp)

if __name__ == '__main__':
    app.run()

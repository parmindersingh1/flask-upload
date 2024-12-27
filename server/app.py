from flask import Flask
from flask_cors import CORS
from .config import Config
from .routes.upload import upload_bp

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # Initialize config
    Config.init_app(app)
    app.config.from_object(Config)
    
    # Register blueprints
    app.register_blueprint(upload_bp, url_prefix='/api')
    
    return app
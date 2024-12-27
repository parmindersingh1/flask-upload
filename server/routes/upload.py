from flask import Blueprint, request, jsonify
from werkzeug.exceptions import RequestEntityTooLarge
from ..utils.file_handler import allowed_file, generate_unique_filename
from ..config import Config
import os

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_file():
    if 'pdf' not in request.files:
        return jsonify({'error': 'No file part'}), 400
        
    file = request.files['pdf']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
        
    if not allowed_file(file.filename, Config.ALLOWED_EXTENSIONS):
        return jsonify({'error': 'Invalid file type. Only PDF files are allowed'}), 400
        
    try:
        filename = generate_unique_filename(file.filename)
        file_path = os.path.join(Config.UPLOAD_FOLDER, filename)
        file.save(file_path)
        
        return jsonify({
            'message': 'File uploaded successfully',
            'filename': filename
        })
        
    except RequestEntityTooLarge:
        return jsonify({'error': 'File too large'}), 413
    except Exception as e:
        return jsonify({'error': str(e)}), 500
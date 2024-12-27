import os
from werkzeug.utils import secure_filename
from datetime import datetime

def allowed_file(filename, allowed_extensions):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in allowed_extensions

def generate_unique_filename(filename):
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    secure_name = secure_filename(filename)
    name, ext = os.path.splitext(secure_name)
    return f"{name}_{timestamp}{ext}"
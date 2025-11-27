from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def health_check():
    return jsonify({"status": "healthy", "message": "Backend is running"})

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from CLOUD!"})

application = app

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
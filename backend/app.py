from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["wellnessDB"]

# collections
journal_collection = db["journal"]
users_collection = db["users"]   # 👈 NEW

# ------------------ JOURNAL ------------------

@app.route("/api/journal", methods=["POST"])
def save_journal():
    data = request.json
    print("🔥 Received data:", data)

    journal_collection.insert_one(data)
    return jsonify({"message": "Saved successfully"})


@app.route("/api/journal", methods=["GET"])
def get_journal():
    data = list(journal_collection.find({}, {"_id": 0}))
    return jsonify(data)


# ------------------ SIGNUP ------------------
@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.json

    existing = users_collection.find_one({"email": data["email"]})
    if existing:
        return jsonify({"message": "User already exists"}), 400

    users_collection.insert_one({
        "name": data["name"],          # ✅ NEW
        "username": data["username"],
        "email": data["email"],
        "password": data["password"]
    })

    return jsonify({"message": "Signup successful"})



# ------------------ LOGIN ------------------

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json

    user = users_collection.find_one({
        "username": data["username"],
        "password": data["password"]
    })

    if user:
        return jsonify({
            "message": "Login successful",
            "name": user["name"]   # ✅ SEND NAME
        })
    else:
        return jsonify({"message": "Invalid credentials"}), 401
# ------------------ RUN ------------------

if __name__ == "__main__":
    app.run(debug=True)
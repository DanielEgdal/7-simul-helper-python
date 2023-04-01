from flask import session, Flask, render_template,request,jsonify
import re

from markupsafe import escape
from secret_key import secret_key

# cargo build --release
# cp target/release/libclockapp_python.so clockapp_python.so
from clockapp_python import get_memo

app = Flask(__name__)

app.config.update(
    SECRET_KEY = secret_key,
    SESSION_COOKIE_SECURE = True,
    PERMANENT_SESSION_LIFETIME = 7200
)

@app.route('/')
def startPage():
    return render_template('index.html')

@app.route("/get_memo",methods=['POST'])
def route_get_memo():
    scramble = escape(request.form['scramble'])
    memo = get_memo(scramble)
    return jsonify(memo=memo)

if __name__ == '__main__':
    app.run(port=5000,debug=True)

from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def index():
	title = 'site'

	return render_template('layout/master.html',title=title)

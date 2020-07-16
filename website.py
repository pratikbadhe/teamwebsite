from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def index():
	title = 'Team Endurance Racing'

	return render_template('layout/index.html',title=title)

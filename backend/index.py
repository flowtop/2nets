from flask import Flask, request
from flask_cors import CORS

import totskiy

app = Flask(__name__)
CORS(app)

@app.route('/getData', methods=['POST'])
def get_data():
    userParams = request.get_json()

    link = userParams["url"]

    response = totskiy.get_2gis_data(totskiy.API_KEY, totskiy.get_2gis_id(link))
    location = totskiy.point_to_url(response)

    text = response["result"]["items"][0]["rubrics"][0]["name"]

    response = totskiy.get_2gis_near(location, text)

    return response


@app.route('/greet', methods=['GET'])
def greet():
    name = request.args.get('name')
    if name:
        return f'Привет, {name}!'
    else:
        return 'Привет! Пожалуйста, укажите имя в параметре запроса (например, /greet?name=Имя)'

@app.route('/calculate', methods=['GET'])
def calculate():
    a = request.args.get('a', default=0, type=int)
    b = request.args.get('b', default=0, type=int)
    result = a + b
    return f'Результат: {result}'

if __name__ == '__main__':
    app.run(debug=True)


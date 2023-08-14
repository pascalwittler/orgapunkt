import shelve

from flask import Flask, g
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)

CORS(app)

def get_db(database_name):
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = shelve.open(database_name)
    return db

@app.teardown_appcontext
def teardown_db(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    return {'message': 'Hello world!', 'data': {}}, 200

class EmployeeList(Resource):
    def get(self):
        shelf = get_db('data/employees.db')
        keys = list(shelf.keys())

        employees = []

        for key in keys:
            employees.append(shelf[key])

        return {'message': 'Success', 'data': employees}, 200

class Employee(Resource):
    def get(self, identifier):
        shelf = get_db('data/employees.db')

        if not (identifier in shelf):
            return {'message': 'Employee not found', 'data': {}}, 404

        return {'message': 'Employee found', 'data': shelf[identifier]}, 200

api.add_resource(EmployeeList, '/employees')
api.add_resource(Employee, '/employee/<string:identifier>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2342, debug=True)

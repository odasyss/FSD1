from urllib import parse
from flask import Flask, abort, request, render_template
from data import data
import json
from flask_cors import CORS
from config import db, parse_json

app = Flask(__name__)
CORS(app)
#  dictionary
me = {
    "name": "Odasys",
    "last": "Soberanes",
    "email": "odasyss@gmail.com"
}
# list
products = data
# products = ["churro", "Corndog", "Funnel Cake", "Turkey Leg", "Popcorn"]


@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    # dictionary
    return render_template("about.html")


@app.route("/about/name")
def name():
    return me["name"]


@app.route("/about/fullname")
def fullname():
    return me["last"] + " " + me["name"]


@app.route("/api/catalog")
def get_catalog():
    cursor = db.products.find({})
    catalog = [item for item in cursor]

    return parse_json(catalog)

    # return json.dumps(products)

    # create a POST endpoint
    # to register new porducts


@app.route("/api/catalog", methods=["POST"])
def save_product():
    prod = request.get_json()
    db.products.insert(prod)
    return parse_json(prod)
    # products.append(prod)
    # return json.dumps(prod)

#  find the products with such category
# """
#     create a results list
#     travel the list
#     get each dict inside the list
#     if the dict category is equal to my category var:
#         push the dict into the results

#     at the end, return the resuts as a json
#     """


@app.route("/api/catalog/<category>")
def get_product_by_category(category):
    data = db.products.find({"category": category})
    results = [item for item in data]

    return parse_json(results)


@app.route("/api/discountCode/<code>")
def discount_code(code):
    data = db.cupoCodes.find({"code": code})
    for code in data:
        return parse_json(code)

    return parse_json({"error": True, "reason": "Invalid code"})


# GET
@app.route("/api/catalog/id/<id>")
def get_id(id):
    for prod in products:
        if(prod["_id"] == id):

            return json.dumps(prod)
    abort(404)


# get the cheapest products
@app.route("/api/catalog/cheapest")
def get_cheapest():
    lowest = products[0]
    for prod in products:
        if(prod["price"] < lowest["price"]):
            lowest = prod
    return json.dumps(lowest)


@app.route("/api/categories")
def get_categories():
    data = db.products.find({})
    unique_categories = []
    for prod in data:
        category = prod["category"]
        if category not in unique_categories:
            unique_categories.append(category)
    return parse_json(unique_categories)


@app.route("/api/test")
def test_data_manipulation():
    test_data = db.test.find({})
    print(test_data)

    return parse_json(test_data[0])


@app.route("/test/populatecodes")
def test_populate_codes():
    db.cupoCodes.insert({"code": "qwerty", "discount": 10})
    db.cupoCodes.insert({"code": "algo", "discount": 25})
    db.cupoCodes.insert({"code": "rithm", "discount": 5})

    return "Data is registerddd"

# if __name__ == "__main__":
#     app.run(debug=True)

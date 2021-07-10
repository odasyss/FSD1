from logging import debug
from flask import Flask
from data import data
import json

app = Flask(__name__)
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
    return "Hellp from Flask!"


@app.route("/about")
def about():
    # dictionary
    return me


@app.route("/about/name")
def name():
    return me["name"]


@app.route("/about/fullname")
def fullname():
    return me["last"] + " " + me["name"]


@app.route("/api/catalog")
def get_catalog():
    return json.dumps(products)


@app.route("/api/categories")
def get_categories():
    unique_categories = []
    for prod in products:
        category = prod["category"]
        if category not in unique_categories:
            unique_categories.append(category)
    return json.dumps(unique_categories)


@app.route("/api/test")
def test():
    # add
    products.append("Deep-Fried Cookies")
    products.append("Cheese Fries")
    products.append("Candy Apples")
    products.append("Strawberry Watermelon Slush")

    # length
    print(f"you have :{len(products)} products in the Food Menu ")

    #  iterate
    for food in products:
        print(food)

    # print the name 10 times
    for i in range(0, 10, 1):
        print(i)
    # name = [",odasys "]
    # for i in name:
    #     print(i * 10)

    # remove apple from products
    # print the list
    products.remove("Candy Apples")
    for f in products:
        print(f)
    # print(products)

    return "Check Terminal! :/"


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, abort, request, render_template
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
    return json.dumps(products)

    # create a POST endpoint
    # to register new porducts


@app.route("/api/catalog", methods=["POST"])
def save_product():
    prod = request.get_json()
    products.append(prod)
    return json.dumps(prod)

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
    results = []
    for prod in products:
        if(prod["category"].lower() == category.lower()):
            results.append(prod)

    return json.dumps(results)


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

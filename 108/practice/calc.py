# description
"""
Script: Simple calculator
Author: Odasys Soberanes
Year: 2021
Functionality: Basic mathematical operations
"""
# imports

# globals
# function


def add(x, y):
    return x + y


def print_menu():
    print("-" * 25)
    print(" PyCalc")
    print("-" * 25)

    print("[1] = Sum")
    print("[2] = Subtract")
    print("[3] = Multiply")
    print("[4] = Divide")
    print("[5] - Is it EVEN?")
    print("[q] - Quit")


# instructions
selected_option = ""
while(selected_option != "q"):
    print_menu()
    selected_option = input("Please select an option: ")
    print(selected_option)
    if(selected_option == "q"):
        break

    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter 2nd number: "))
    if(selected_option == "1"):

        result = (num1) + (num2)
        # print(result)
        # print(num1, "+", num2, "=", add(num1, num2))
    elif (selected_option == "2"):
        # print(num1, "-", num2, subs(num1, num2))
        result = (num1) - (num2)
    elif(selected_option == "3"):
        result = (num1) * (num2)
    elif(selected_option == "4"):
        if(num2 == 0):
            print("0 is not allowed")
        else:
            result = (num1) / (num2)
    elif(selected_option == "5"):
        if(num1 % 2 == 0):
            print("number is EVEN")
        else:
            print("number is NOT even")

    print(result)
    print("Bye")

/* The user can enter information such as
product's name,quantity, price 
 And the program should display the info on the console. 
 Use the prompt to get the required information.
 The system should calculate the final price adding taxes 
 (like in Mexico 16% of taxes).
*/

let Product = prompt('Enter the Product Name: ');
let Price = prompt('Enter the Product Price: ');

let TotalPrice = function(Price){
    return Number(Price);
}
let CaliforniaTax = function(price, Tax){
    return (Number(Tax)*Number(price))/100;
}
let Tax = 7.25;
let price = TotalPrice(Price);
let tax = CaliforniaTax(price, Tax);
let finalPrice = price + tax; 

document.write(`<div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <td>${Product}</td>
                </tr>
                <tr>
                    <th>Product Price</th>
                    <td>$${Price}</td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>$${tax}</td>
                </tr>
                <tr class="select-total">
                    <th>Final Price</th>
                    <td>$${finalPrice}</td>
                </tr>
                </table> 
            </div>`);
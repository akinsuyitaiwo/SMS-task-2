# SMS-task-2




# Shopper App Schema Design

## User Story

As a shopper, I want to be able to browse a catalog of products and add items to my shopping cart. I also want to be able to view the contents of my cart and adjust the quantity of items in my cart. Finally, I want to be able to place an order and receive confirmation of my order.


## Requirements Analysis

### Entities:

-   Products: A product is an item which is put up for sale on the shopper app, each with a name, description, price, and category.
-   Customers: A customer has a unique identifier, name, email, and password.
-   Orders: An order has a unique identifier, the customer who placed it, a list of items, and the total amount.

### Relationships:

-   A customer can view the products and place an order.
-   A customer can select different products.
-   A customer can remove different products from selected ones.
-   A customer can view all products selected.
-   An order can contain multiple items.
-   A customer can remove orders.
- A customer can track orders.
## NoSQL Schema Design

Based on the requirements analysis, the following schema can be designed:

### Items Collection:

```
{
   _id: ObjectId,
   name: string,
   description: string,
   price: number,
   categories: [string]
}

```

### Customers Collection:

```
{
   customerId: ObjectId,
   name: string,
   email: string,
   password: string,
   deliveryAddress: string,
   phone: string
}

```

### Orders Collection:

```
{
   orderId: ObjectId,
   customerId: ObjectId,
   items: [
     {
        productId: ObjectId,
        quantity: number
     }
   ],
   totalAmount: number,
   status: string,
   orderDate: date,
   deliveryAddress: string,
   paymentType: string
}

```
## API Endpoints

```
-   GET /products - Get a list of all menu items.
-   GET /products/:{productId} - Get details of a specific item.
-   POST /products/:{productId}/order - Place an order for the items selected by the customer.
-   GET /custormer/:{customerId}/orders - Get the list of orders placed by a customer.
-   GET /orders/:{orderId} - Get the details of a specific order.
```
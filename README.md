## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Configuration

### Configure Database in .env

```
DB_NAME=
DB_PORT=3306
DB_HOST=127.0.0.1
DB_USERNAME=root
DB_PASSWORD=
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## APIs

Checkout the Postman collection inside `postman-collection` folder

## Discount Rules

### Discount Mode : `none`, `quantity` and `total_amount`

`none`: If no discount is applied
`quantity`: If the discount has to depend on quantity of the item (Product)
`total_amount`: If the amount has to depend on the total amount of an entity (Cart)

### Discount Type : `flat`

`flat`: Flat discounts assumed for this app.

### Discount Value

Flat Amount to deduct from the actual price

### Cutoff Amount

Applicable only if discount mode is total_amount

### Cutoff Quantity

Applicable only if discount mode is quantity

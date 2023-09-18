export default {
  createProduct: `
    INSERT INTO products(
        name,
        price,
        quantity,
        category_id
    ) VALUES($1, $2, $3, $4) RETURNING id, name, price
    `,

  buyProduct: `
    UPDATE products
    SET quantity_sold = quantity_sold + 1
    WHERE id=$1 RETURNING *
    `,

  fetchAllProducts: `
    SELECT p.id, p.name, p.price, p.quantity, p.quantity_sold as "quantitySold",
    c.name as "category"
    FROM products p
    INNER JOIN categories c on p.category_id = c.id
    `,
};

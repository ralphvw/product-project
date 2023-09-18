export default {
  createCategory: `
    INSERT INTO categories(
        name
    ) VALUES($1) RETURNING id, name
    `,

  fetchProductsPerCategory: `
    SELECT * FROM products WHERE category_id=$1
    `,
};

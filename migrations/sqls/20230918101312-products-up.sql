/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price INT NOT NULL,
    quantity_sold INT DEFAULT 0,
    quantity INT NOT NULL,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
)

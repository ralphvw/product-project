// test.js
import request from 'supertest';
import { app } from '../index.js';
import { expect } from 'chai';
import { userData } from '../fixtures/user.fixture.js';

let categoryId;
describe('Testing Express Endpoints', () => {
  it('should test for create user', async () => {
    const res = await request(app).post('/api/v1/users').send(userData);
    expect(res.status).to.equal(201);
  });

  it('should throw a duplicate error', async () => {
    const res = await request(app).post('/api/v1/users').send(userData);
    expect(res.status).to.equal(409);
  });

  it('should create a category', async () => {
    const categoryData = { name: 'computer' };
    const res = await request(app)
      .post('/api/v1/categories')
      .send(categoryData);
    categoryId = res.body.data.id;
    expect(res.status).to.equal(201);
  });

  it('should create a product', async () => {
    const productData = {
      name: 'macbook pro',
      price: 90,
      quantity: 5,
      categoryId,
    };
    const res = await request(app).post('/api/v1/products').send(productData);
    expect(res.status).to.equal(201);
  });

  it('should get all products', async () => {
    const res = await request(app).get('/api/v1/products');
    expect(res.status).to.equal(200);
  });
});

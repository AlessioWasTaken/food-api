import express from 'express';
import authenticationRoute from './authentication.route';
import { productsRoute } from './products.route';
import { ordersRoute } from './orders.route';

const router = express.Router();



export default () => {
    authenticationRoute(router);
    productsRoute(router);
    ordersRoute(router);
    return router;
};
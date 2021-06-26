const prefix = '/orders';
export default [

  {
    path: prefix,
    name: 'order-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Orders'
    }

  },
  {
    path: prefix+"/:id/details",
    name: 'order-details',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Order Details'
    }

  },
];

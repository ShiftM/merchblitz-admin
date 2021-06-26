const prefix = '/gem-orders';
export default [

  {
    path: prefix,
    name: 'gem-order-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Orders'
    }

  },
  {
    path: prefix+"/:id/details",
    name: 'gem-order-details',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Order Details'
    }

  },
];

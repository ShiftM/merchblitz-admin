const prefix = '/fund-transfer';
export default [

  {
    path: prefix,
    name: 'fund-transfer-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Fund Transfer'
    }

  },
  {
    path: prefix + "/create",
    name: 'fund-transfer-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Transfer Fund'
    }

  },
  {
    path: prefix + "/:account_number/:type/balance-inquiry",
    name: 'balance-inquiry',
    component: () => import('./balance-inquiry.component.vue'),
    meta: {
      title: 'Balance Inquiry'
    }

  }
];

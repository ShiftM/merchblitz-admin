const prefix = '/sales-report';
export default [

  {
    path: prefix+"/sales-by-quantity-price",
    name: 'sales-report-index',
    component: () => import('./sales-by-quantity-price/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sales Report'
    }
  },
  {
    path: prefix+"/sales-by-customer-name",
    name: 'sales-report-index',
    component: () => import('./sales-by-customer-name/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sales Report'
    }
  },
  {
    path: prefix+"/sales-by-category-item",
    name: 'sales-report-index',
    component: () => import('./sales-by-category-item/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sales Report'
    }
  },
  {
    path: prefix+"/sales-by-demographics",
    name: 'sales-report-index',
    component: () => import('./sales-by-demographics/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sales Report'
    }
  },
];

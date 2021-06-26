const prefix = '/vouchers';
export default [

  {
    path: prefix,
    name: 'voucher-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Vouchers'
    }

  },
  {
    path: prefix+"/create",
    name: 'voucher-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Vouchers'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'voucher-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Vouchers'
    }

  },
];

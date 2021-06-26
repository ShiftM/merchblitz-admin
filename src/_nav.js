export default {
  items: [

    {
      name: 'General',
      url: '/base',
      icon: 'icon-calendar',
      children: [
        {
          name: 'Users',
          url: '/events',
          icon: 'icon-grid'
        },
        {
          name: 'Products',
          url: '/booth',
          icon: 'icon-location-pin'
        },
        {
          name: 'Stores',
          url: '/quest',
          icon: 'icon-location-pin'
        },
        {
          name: 'Inventory',
          url: '/quest',
          icon: 'icon-location-pin'
        },
        {
          name: 'Locations',
          url: '/quest',
          icon: 'icon-location-pin'
        }
      ]
    },
    {
      name: 'Manpower Deployment',
      url: '/items',
      icon: 'icon-tag'
    },

    {
      name: 'Projects',
      url: '/base',
      icon: 'icon-calendar',
      children: [
        {
          name: 'MerchBlitz Records',
          url: '/events',
          icon: 'icon-grid'
        },
      ]
    },

    {
      name: 'Special Projects',
      url: '/base',
      icon: 'icon-calendar',
      children: [
        {
          name: 'MerchBlitz Records',
          url: '/events',
          icon: 'icon-grid'
        },
      ]
    },



    {
      name: 'Event Management',
      url: '/base',
      icon: 'icon-calendar',
      children: [
        {
          name: 'Events',
          url: '/events',
          // icon: 'icon-grid'
        },
        {
          name: 'Booth',
          url: '/booth',
          // icon: 'icon-location-pin'
        },
        {
          name: 'Quest',
          url: '/quest',
          // icon: 'icon-location-pin'
        }
      ]
    },
    {
      name: 'Fund Transfer',
      url: '/fund-transfer',
      icon: 'icon-diamond'
    },
    {

      name: 'Categories',
      url: '/categories',
      icon: 'icon-drawer'
    },
    {
      name: 'Colors and Sizes',
      url: '/base',
      icon: 'icon-note',
      children: [
        {
          name: 'Colors',
          url: '/colors-and-sizes/colors',
          // icon: 'icon-pencil'
        },
        {
          name: 'Sizes',
          url: '/colors-and-sizes/sizes',
          // icon: 'icon-layers'
        }
      ]
    },
    {
      name: 'Items',
      url: '/items',
      icon: 'icon-tag'
    },
    {
      name: 'Orders',
      url: '/orders',
      icon: 'icon-basket-loaded'
    },
    {
      name: 'Gem Orders',
      url: '/gem-orders',
      icon: 'icon-basket-loaded'
    },
    {
      name: 'Voucher',
      url: '/vouchers',
      icon: 'icon-doc'
    },
    {
      name: 'Gems',
      url: '/base',
      icon: 'icon-diamond',
      children: [
        {
          name: 'Gem Package',
          url: '/gems/gem-packages',
          // icon: 'icon-wallet'
        },
        {
          name: 'Gem Conversion',
          url: '/gems/gem-conversion',
          // icon: 'icon-pencil'
        }
      ]
    },

    {
      name: 'Push Notifications',
      url: '/push-notification',
      icon: 'icon-bell'
    },
    {
      name: 'Interest Option',
      url: '/interest-options',
      icon: 'icon-people'
    },
    {
      name: 'Location',
      url: '/base',
      icon: 'icon-note',
      children: [
        {
          name: 'Country',
          url: '/location/country-options',
        },
        {
          name: 'Region',
          url: '/location/region-options',
        },
        {
          name: 'Province',
          url: '/location/province-options',
        },
        {
          name: 'City',
          url: '/location/city-options',
        }
      ]
    },
    {
      name: 'Sales Report',
      url: '/sales-report',
      icon: 'icon-chart',
      children: [
        {
          name: 'Quantity & Price',
          url: '/sales-report/sales-by-quantity-price',
        },
        {
          name: 'Category & Item',
          url: '/sales-report/sales-by-category-item',
        },
        {
          name: 'Customer Name',
          url: '/sales-report/sales-by-customer-name',
        },
        {
          name: 'Demographics',
          url: '/sales-report/sales-by-demographics',
        },
      ]
    },
    // {
    //     name: 'Users',
    //     url: '/users',
    //     icon: 'icon-people'
    // },
    // {
    //     name: 'Samples',
    //     url: '/samples',
    //     icon: 'icon-people'
    // },
    {
      name: 'Top List Report',
      url: '/top-list-report',
      icon: 'icon-list',
      children: [
        {
          name: 'Items to Cart',
          url: '/top-list-report/items-to-cart',
        },
        {
          name: 'Online Store Searches',
          url: '/top-list-report/online-store-searches',
        },
        {
          name: 'Purchased Gem Package',
          url: '/top-list-report/purchased-gem-package',
        },
        {
          name: 'Viewed Category',
          url: '/top-list-report/viewed-category',
        },
        {
          name: 'Wishlisted Items',
          url: '/top-list-report/wishlisted-items',
        },
      ],
    },
    {
      name: 'User Analytics',
      url: '/user-analytics',
      icon: 'icon-chart',
      children: [
        {
          name: 'User List',
          url: '/user-analytics/user-list',
        },
        {
          name: 'Quest',
          url: '/user-analytics/users-by-quest',
        },
        {
          name: 'Demographics',
          url: '/user-analytics/users-by-demographics',
        },
        {
          name: 'Location',
          url: '/user-analytics/users-by-location',
        }
      ]
    },

    {
      name: 'Event Analytics',
      url: '/event-analytics',
      icon: 'icon-list',
      children: [
        {
          name: 'Quest Viewed/Finished',
          url: '/event-analytics/quest-viewed-or-finished'
        },
        {
          name: 'Check In and Interest',
          url: '/event-analytics/user-checked-in-and-interest-button'
        }
      ]
    },

    {
      name: 'Companies',
      url: '/companies',
      icon: 'icon-list',
    },
    {
      name: 'Administrators',
      url: '/admin-users',
      icon: 'icon-list',
    },
    {
      name: 'Subscription Plans',
      url: '/subscription-plans',
      icon: 'icon-list',
    }

  ]
}

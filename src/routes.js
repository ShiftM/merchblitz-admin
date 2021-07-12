import Vue from 'vue'
import Router from 'vue-router'
import SampleRouter from './views/sample/sample.router';
import ItemRouter from './views/item/item.router';
import CategoryRouter from './views/categories/category.router';
import ColorSizeRouter from './views/color-size/color-size.router';
import VoucherRouter from './views/Voucher/voucher.router';
import PushNotificationRouter from "./views/push-notification/push-notification.router";
import EventRouter from "./views/event/event.router";
import OrderRouter from "./views/orders/order.router";
import GemOrderRouter from "./views/gem-orders/gem-order.router";
import SalesReportRouter from "./views/sales-report/sales-report.router";
import NotFoundComponent from "./views/errors/404.component";
import GemRouter from "./views/gem/gem.router";
import TopListReportRouter from './views/top-list-report/top-list-report.router';
import LocationRouter from "./views/location/location.router";
import InterestOptionRouter from "./views/interest-option/interest-option.router";
import UserAnalyticsRouter from "./views/user-analytics/user-analytics.router";
import EventAnalyticsRouter from './views/event-analytics/event-analytics.router';
import FundTransfer from './views/fund-transfer/fund-transfer.router';
import QuestRouter from "./views/quest/quest.router";
import CompanyRouter from "./views/companies/company.router";
import AdministratorRouter from "./views/administrators/administrator.router";
import SubscriptionRouter from "./views/subscription-plans/subscription-plan.router";
import ProductsRouter from "./views/products/products.router";
import RecordsRouter from "./views/records/records.router";
import InventoriesRouter from "./views/inventories/inventories.router";
import StoresRouter from "./views/stores/stores.router";
import LocationsRouter from "./views/locations/locations.router";

// Containers
const DefaultContainer = () => import('@/components/containers/DefaultContainer')

// Views
const Login = () => import('@/views/Login/login')

const Dashboard = () => import('@/views/Dashboard')

const EventsList = () => import('@/views/Events/list')

const EventsCrud = () => import('@/views/Events/crud-events')

const Booth = () => import('@/views/Booth/list')

const BoothCrud = () => import('@/views/Booth/crud-booth')

const BoothAssign = () => import('@/views/Events/assign')

const QuestForm = () => import('@/views/Booth/quest-form');

const editQuest = () => import('@/views/Booth/edit-quest');



Vue.use(Router)

function configRoutes() {
  return [
    {path: '*', component: NotFoundComponent},
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: DefaultContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },

        {
          path: '/events',
          name: 'Events',
          component: () => import('./views/event/event.component.vue'),
          children: EventRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/event/edit/:id',
          name: 'EventEdit',
          component: EventsCrud
        },
        {
          path: '/event/assign-booth/:id',
          name: 'BoothAssign',
          component: BoothAssign
        },
        {
          path: '/create-event',
          name: 'EventsCrud',
          component: EventsCrud
        },
        {
          path: '/booth',
          name: 'Booth',
          component: Booth
        },
        {
          path: '/booth/edit/:id',
          name: 'BoothEdit',
          component: BoothCrud
        },
        {
          path: '/create-booth',
          name: 'BoothCrud',
          component: BoothCrud
        },
        {
          path: '/quest',
          name: 'Quest',
          component: () => import('./views/quest/quest.component.vue'),
          children: QuestRouter,
        },
        {
          path: '/fund-transfer',
          name: 'fund transfer',
          component: () => import('./views/fund-transfer/fund-transfer.component'),
          children: FundTransfer,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/colors-and-sizes',
          name: 'colors-and-sizes',
          component: () => import('./views/color-size/color-size.component.vue'),
          children: ColorSizeRouter,
          meta: {
            level: 'parent'
          }
        },
        // {
        //   path: '/users',
        //   name: 'Users',
        //   component: Users
        // },
        // {
        //   path: '/user/edit/:id',
        //   name: 'UserEdit',
        //   component: UserEdit
        // },
        {
          path: '/booth/quest-form/:id',
          name: 'questFrom',
          component: QuestForm
        },
        {
          path: '/booth/edit-quest/:id/:booth_id',
          name: 'editQuest',
          component: editQuest
        },
        {
          path: '/samples',
          name: 'sample',
          component: () => import('./views/sample/sample.component.vue'),
          children: SampleRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/items',
          name: 'items',
          component: () => import('./views/item/item.component.vue'),
          children: ItemRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/categories',
          name: 'category',
          component: () => import('./views/categories/category.component'),
          children: CategoryRouter,
        },
        {
          path: '/vouchers',
          name: 'voucher',
          component: () => import('./views/Voucher/voucher.component'),
          children: VoucherRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/location',
          name: 'Location',
          component: () => import('./views/location/location.component'),
          children: LocationRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/interest-options',
          name: 'Interest Options',
          component: () => import('./views/interest-option/interest-option.component'),
          children: InterestOptionRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/push-notification',
          name: 'push-notificationsample',
          component: () => import('./views/push-notification/push-notification.component.vue'),
          children: PushNotificationRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('@/views/orders/order.component.vue'),
          children: OrderRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/gem-orders',
          name: 'gem-orders',
          component: () => import('@/views/gem-orders/gem-order.component.vue'),
          children: GemOrderRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/sales-report',
          name: 'Sales Report',
          component: () => import('./views/sales-report/sales-report.component.vue'),
          children: SalesReportRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/gems',
          name: 'Gem Management',
          component: () => import('./views/gem/gem.component.vue'),
          children: GemRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/top-list-report',
          name: 'Top List Report',
          component: () => import('./views/top-list-report/top-list-report.component.vue'),
          children: TopListReportRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/user-analytics',
          name: 'User Analytics',
          component: () => import('./views/user-analytics/user-analytics.component.vue'),
          children: UserAnalyticsRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/event-analytics',
          name: 'Event Analytics',
          component: () => import('./views/event-analytics/event-analytics.component.vue'),
          children: EventAnalyticsRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/companies',
          name: 'Companies',
          component: () => import('./views/companies/company.component.vue'),
          children: CompanyRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/admin-users',
          name: 'Administrators',
          component: () => import('./views/administrators/administrator.component.vue'),
          children: AdministratorRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/subscription-plans',
          name: 'Subscription Plans',
          component: () => import('./views/subscription-plans/subscription-plan.component.vue'),
          children: SubscriptionRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('./views/products/products.component.vue'),
          children: ProductsRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/records',
          name: 'Records',
          component: () => import('./views/records/records.component.vue'),
          children: RecordsRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/inventories',
          name: 'Inventories',
          component: () => import('./views/inventories/inventories.component.vue'),
          children: InventoriesRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/stores',
          name: 'Stores',
          component: () => import('./views/stores/stores.component.vue'),
          children: StoresRouter,
          meta: {
            level: 'parent'
          }
        },
        {
          path: '/locations',
          name: 'Locations',
          component: () => import('./views/locations/locations.component.vue'),
          children: LocationsRouter,
          meta: {
            level: 'parent'
          }
        },
      ]
    }


    // {
    //   path: '/',
    //   redirect: '/dashboard',
    //   name: 'Home',
    //   component: DefaultContainer,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'Dashboard',
    //       component: Dashboard
    //     },
    //     {
    //       path: 'theme',
    //       redirect: '/theme/colors',
    //       name: 'Theme',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'colors',
    //           name: 'Colors',
    //           component: Colors
    //         },
    //         {
    //           path: 'typography',
    //           name: 'Typography',
    //           component: Typography
    //         }
    //       ]
    //     },
    //     {
    //       path: 'charts',
    //       name: 'Charts',
    //       component: Charts
    //     },
    //     {
    //       path: 'widgets',
    //       name: 'Widgets',
    //       component: Widgets
    //     },
    //     {
    //       path: 'users',
    //       meta: { label: 'Users'},
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: '',
    //           component: Users,
    //         },
    //         {
    //           path: ':id',
    //           meta: { label: 'User Details'},
    //           name: 'User',
    //           component: User,
    //         },
    //       ]
    //     },
    //     {
    //       path: 'base',
    //       redirect: '/base/cards',
    //       name: 'Base',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'cards',
    //           name: 'Cards',
    //           component: Cards
    //         },
    //         {
    //           path: 'forms',
    //           name: 'Forms',
    //           component: Forms
    //         },
    //         {
    //           path: 'switches',
    //           name: 'Switches',
    //           component: Switches
    //         },
    //         {
    //           path: 'tables',
    //           name: 'Tables',
    //           component: Tables
    //         },
    //         {
    //           path: 'tabs',
    //           name: 'Tabs',
    //           component: Tabs
    //         },
    //         {
    //           path: 'breadcrumbs',
    //           name: 'Breadcrumbs',
    //           component: Breadcrumbs
    //         },
    //         {
    //           path: 'carousels',
    //           name: 'Carousels',
    //           component: Carousels
    //         },
    //         {
    //           path: 'collapses',
    //           name: 'Collapses',
    //           component: Collapses
    //         },
    //         {
    //           path: 'jumbotrons',
    //           name: 'Jumbotrons',
    //           component: Jumbotrons
    //         },
    //         {
    //           path: 'list-groups',
    //           name: 'List Groups',
    //           component: ListGroups
    //         },
    //         {
    //           path: 'navs',
    //           name: 'Navs',
    //           component: Navs
    //         },
    //         {
    //           path: 'navbars',
    //           name: 'Navbars',
    //           component: Navbars
    //         },
    //         {
    //           path: 'paginations',
    //           name: 'Paginations',
    //           component: Paginations
    //         },
    //         {
    //           path: 'popovers',
    //           name: 'Popovers',
    //           component: Popovers
    //         },
    //         {
    //           path: 'progress-bars',
    //           name: 'Progress Bars',
    //           component: ProgressBars
    //         },
    //         {
    //           path: 'tooltips',
    //           name: 'Tooltips',
    //           component: Tooltips
    //         }
    //       ]
    //     },
    //     {
    //       path: 'buttons',
    //       redirect: '/buttons/standard-buttons',
    //       name: 'Buttons',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'standard-buttons',
    //           name: 'Standard Buttons',
    //           component: StandardButtons
    //         },
    //         {
    //           path: 'button-groups',
    //           name: 'Button Groups',
    //           component: ButtonGroups
    //         },
    //         {
    //           path: 'dropdowns',
    //           name: 'Dropdowns',
    //           component: Dropdowns
    //         },
    //         {
    //           path: 'brand-buttons',
    //           name: 'Brand Buttons',
    //           component: BrandButtons
    //         }
    //       ]
    //     },
    //     {
    //       path: 'icons',
    //       redirect: '/icons/font-awesome',
    //       name: 'Icons',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'coreui-icons',
    //           name: 'CoreUI Icons',
    //           component: CoreUIIcons
    //         },
    //         {
    //           path: 'flags',
    //           name: 'Flags',
    //           component: Flags
    //         },
    //         {
    //           path: 'font-awesome',
    //           name: 'Font Awesome',
    //           component: FontAwesome
    //         },
    //         {
    //           path: 'simple-line-icons',
    //           name: 'Simple Line Icons',
    //           component: SimpleLineIcons
    //         }
    //       ]
    //     },
    //     {
    //       path: 'notifications',
    //       redirect: '/notifications/alerts',
    //       name: 'Notifications',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'alerts',
    //           name: 'Alerts',
    //           component: Alerts
    //         },
    //         {
    //           path: 'badges',
    //           name: 'Badges',
    //           component: Badges
    //         },
    //         {
    //           path: 'modals',
    //           name: 'Modals',
    //           component: Modals
    //         }
    //       ]
    //     }
    //   ]
    // },

  ]
}

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: configRoutes()
})

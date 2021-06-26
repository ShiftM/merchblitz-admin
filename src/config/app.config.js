const config = Object.freeze({
    base_url: process.env.BASE_URL,
    api_url: process.env.VUE_APP_API_URL + process.env.VUE_APP_API_VERSION,
    api_analytics_url: process.env.VUE_APP_ANALYTICS_API_URL + process.env.VUE_APP_API_ANALYTICS_VERSION,
    api_analytics_token:  process.env.VUE_APP_ANALYTICS_API_TOKEN,
    end_point: {
        admin: {
            e_commerce: {
                samples: '/admin/e-commerce/samples',
                items: '/admin/e-commerce/items',
                item_categories: '/admin/e-commerce/item-categories',
                category_headers: '/admin/e-commerce/category-headers',
                color_options: '/admin/e-commerce/color-options',
                size_options: '/admin/e-commerce/size-options',
                item_stocks: '/admin/e-commerce/item-stocks',
                item_variants: '/admin/e-commerce/item-variants',
                featured_items: '/admin/e-commerce/featured-items',
                orders: '/admin/e-commerce/orders',
              /*Location*/
                city_options: '/admin/e-commerce/city-option',
                province_options: '/admin/e-commerce/province-option',
                region_options: '/admin/e-commerce/region-option',
                country_options: '/admin/e-commerce/country-option',
              /*Location*/
                vouchers: '/admin/e-commerce/vouchers',
                pushNotifications: '/admin/e-commerce/push-notifications',

                reports: {
                    most_sold_by_price: '/admin/e-commerce/reports/most-sold-by-price',
                    most_sold_by_quantity: '/admin/e-commerce/reports/most-sold-by-quantity',
                }
            },
            analytics: {
              interest_options: 'admin/analytics/interest-options',
            },

            wallet: {
                gem_packages: 'admin/wallet/gem-packages',
                gem_setting: 'admin/wallet/gem-setting',
                accounts: 'admin/wallet/wallet-accounts',
                transfer_fund: 'admin/wallet/transfer-fund',
                balance_inquiry: 'admin/wallet/wallet-accounts/balance-inquiry',
                transaction_history: 'admin/wallet/transaction-history',
                exchange_rate: 'admin/wallet/exchange-rate',
                orders: '/admin/wallet/orders',
            },
            images: '/admin/images',
            upload: {
                image: '/admin/upload/single/image'
            },
            search: {
                customer_info: 'admin/search/customer-info',
                order_info: 'admin/search/order-info',
                gem_order_info: 'admin/search/gem-order-info',
                item_info: 'admin/search/item-info',
                wallet_account_info: 'admin/search/wallet-account-info',
                event_info: 'admin/search/event-info',

                company_info: 'admin/search/company-info',
            },

            management : {
              company: '/company',
              administrator: '/admin/users',
              subscription_plan: '/admin/subscription-plan',
            }
        },
        analytics: {
          sales_report: {
            top_wish_listed_item: '/sales-report/top-wish-listed-item',
            top_viewed_category: '/sales-report/top-viewed-category',
            top_purchased_gem_package: '/sales-report/top-purchased-gem-package',
            top_online_store_searches: '/sales-report/top-online-searches',
            top_items_added_to_cart: '/sales-report/top-items-added-cart',
            top_items_removed_to_cart: '/sales-report/top-items-remove-from-cart',
            sales_by_customer_name: '/sales-report/sales-by-customer-name',
            sales_by_demographics: '/sales-report/sales-by-demographics',
            sales_by_item: '/sales-report/sales-by-item'
          },
          user_analytics: {
            user_list: '/user/user-lists',
            user_by_location: '/user/user-by-location',
            user_by_quest: '/user/user-by-quest',
            user_by_demographics: '/user/user-by-gender'
          },
          event_analytics: {
            number_of_times_quest_viewed: '/quests/most-viewed',
            number_of_quest_finished: '/quests/number-of-finished',
            check_ins: "/events/user-checked-ins",
            check_in_with_quests: "/events/user-checked-in-with-finish-quests",
            interest: "/events/user-event-interest",

            quest_viewed: '/quests/quest-analytics/view',
            quest_started: '/quests/quest-analytics/start',
            quest_finished: '/quests/quest-analytics/finish',

          }
        }
    }

});

export default config;

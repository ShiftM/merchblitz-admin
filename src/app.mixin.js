export default {
    data: function () {
        return {
            // isCollapsed: true
          validDate: true,
          validAge: true
        };
    },
    async mounted() {
        var tabContent = $('.tab-content');
        var tabs = $('.custom-tabs > .nav-item');
        
        tabContent.addClass('primary-active');
        tabs.css('border-bottom', '1px solid red');
    },
    methods: {
        getError(errors, key) {
            return errors.find(el => el.field == key);
        },
        toPageCount(total,per_page){
            var total = total /per_page ;

            return Math.ceil(total);
        },
        asQueryParams(data) {
            const searchParams = new URLSearchParams();
            const search = data;
            Object.keys(search).forEach(key => searchParams.append(key, search[key]));

            return "?" + searchParams.toString();
        },
        clearSearch(event) {
            var clearButton = $(event.target);
            var searchBar = clearButton.siblings('input');
            searchBar.val('');
        },
        goNext() {
            //next button for tabbed forms
            var href = $(this).attr('href');
            var activateTab = href + '-tab';
            var navTabs = $('.nav-tabs').children();
            var tabPanes = $('.tab-content').children();
        
            navTabs.removeClass('active');
            tabPanes.removeClass('active show');
            $(activateTab).addClass('active');
            $(href).addClass('active show')
        },
        toggleCollapse() {
            //toggle collapse arrow icons
            var item = event.currentTarget;
            var toggleCont = item.querySelector('span')
            var toggleIcon = toggleCont.querySelector('i');
            toggleIcon.classList.toggle('fa-chevron-down');
            toggleIcon.classList.toggle('fa-chevron-right');
        },
        setPrimaryTab() {

        },
        toggleTab() {
            //toggle page tabs' colors
            var selectedTab = event.currentTarget.parentNode;
            var tabs = $('.custom-tabs > .nav-item');
            var tabContent = $('.tab-content');
            // console.log(tabs);

            if (selectedTab.classList.contains('primary')) {
                tabs.css('border-bottom', '1px solid red');
                tabContent.addClass('primary-active');
                tabContent.removeClass('archive-active');
                tabContent.removeClass('featured-active');
            }
        
            else if (selectedTab.classList.contains('archive')) {
                tabs.css('border-bottom', '1px solid #f86c6b');
                tabContent.addClass('archive-active');
                tabContent.removeClass('primary-active');
                tabContent.removeClass('featured-active');
            }
        
            else if (selectedTab.classList.contains('featured')) {
                tabs.css('border-bottom', '1px solid #faca39');
                tabContent.addClass('featured-active');
                tabContent.removeClass('primary-active');
                tabContent.removeClass('archive-active');
            }
        },
        toggleFilterCollapse() {
            //toggle collapse arrow icons
            this.toggleCollapse();
            var item = event.currentTarget;
            var toggleCont = item.querySelector('span');
            var toggleText = toggleCont.querySelector('span');

            //toggle filter collapse text
            if (toggleText.textContent == 'Show Filters') {
                toggleText.textContent = 'Hide Filters';
            }

            else {
                toggleText.textContent = 'Show Filters'
            }
        },
        ageValidation(from = 0, to = 0){
          this.validAge = +from <= +to;
        },
        dateValidation(from, to){
          this.validDate = new Date(from) <= new Date(to);
        },
        resetOptions: function (type) {
          this.filter = {
            age_from: '',
            age_to: '',
            gender: '',
            interest_option_id: '',
            city: '',
            date_from: null,
            date_to: null,
            paginate: true,
            per_page: 10,
            page: 1,
            status_option_id: 1,
          };
          if (type){
            this.filter.type = type;
          }
          this.validAge = true;
          this.validDate = true;
          return this.search(this.filter);
        }
    }
};

function loadSearchData() {
    return new Promise((resolve, reject) => {
        var productsData = [
            {
                "name": "彩色名片",
                "url": "/Product/Products.html?product=ColorBusinessCard"
            },
            {
                "name": "Product 2",
                "url": "/Product/Products.html"
            },
            {
                "name": "Product 4",
                "url": "/Product/Products.html"
            },
            {
                "name": "Product 5",
                "url": "/Product/Products.html"
            },
            {
                "name": "Product 6",
                "url": "/Product/Products.html"
            }
        ];
        var list = $('#search_list');
        $.each(productsData, function (index, product) {
            var productA = $('<a>');
            productA.text(product.name).attr('href', product.url).addClass('search_listItem');
            list.append(productA);
        });
        resolve();
    }).catch(() => reject());
}
var searchBar_listItem_open = -1;
var searchBar_listContainer;
var searchBar_listItems;
var searchBar_numItems;
var search_noResults = true;
function search() {
    return new Promise((resolve, reject) => {
        var input, filter;
        input = $('#search-input');
        filter = input.val().toLowerCase();
        search_noResults = true;
        searchBar_listItems = $('.search_listItem');
        searchBar_listItems.not(':first').each(function (index) {
            if ($(this).text().toLowerCase().indexOf(filter) > -1) {
                searchBar_listContainer.css('display', 'block');
                $(this).css('display', 'flex');
                search_noResults = false;
            }
            else {
                $(this).css('display', 'none');
            }
        });
        if (search_noResults) {
            searchBar_listContainer.css('display', 'block');
            searchBar_noSearchResult.css('display', 'flex');
        }
        else {
            searchBar_noSearchResult.css('display', 'none');
        }
        if (filter == "" || filter == undifined) {
            searchBar_listContainer.css('display', 'none');
        }
        resolve();
    }).catch(() => {
    });
}

var isToggle = false;
var isTyping = false;
var searchForm;
var searchBtn;
var searchInput;
var searchBtn_i;

function searchBar() {
    let input = $('#search-input').val();
    if (input != '' && !search_noResults) {//has Input & has Result
        window.location.href = searchBar_listItems[searchBar_listItem_open].href;
    }
    else if (input === '') {
        searchForm.toggleClass('active');
        searchInput.focus();
        //console.log('listItem_open = ' + listItem_open);
        searchBar_listItem_open = -1; //searchText reset
    }
}
function searchBar_switch() {
    return new Promise((resolve, reject) => {
        searchBtn.on('click', function () {
            searchBar();
        });
        searchInput.on('keydown', function (event) {
            //console.log(event.keyCode === 13);
            if (event.keyCode === 13) {
                searchBar();
            }
        });
        resolve();
    }).catch(() => {
        reject();
    });
}

function loadVar() {
    return new Promise((resolve, reject) => {
        rootElement = $('html');
        // banner = $('.banner');
        // header = $('header');
        // bannerHeight = banner.outerHeight();

        searchBar_listContainer = $('#search_list');
        searchBar_listItems = $('.search_listItem');
        searchBar_numItems = searchBar_listItems.length;
        searchBar_noSearchResult = $('.search_no-search-result');

        searchForm = $('#search-form');
        searchBtn = $('#search-button');
        searchInput = $('#search-input');
        searchBtn_i = $('#search-button i');
        //console.log('變數載入成功');
        resolve();
    }).catch(() => {
        console.log('變數載入失敗');
        reject();
    });
}


    loadSearchData()
    .then(() => loadVar())
    .then(() => {
        //console.log('變數資料已全部載入完成');
        searchBar_switch();
        search();
        $(window).on('resize', function () {
            // if (window.innerWidth >= 768) {
            //   $(window).off('scroll', scrollHandler);
            // }
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(searchBar_switch, 300);
        });
    })
    .catch(() => {
        console.log('變數資料載入失敗');
    });

console.log("hi");

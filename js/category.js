let hrefAttr = window.location.search,
    pageNum = 1,
    catName = '';


// Separating Search Parameters from URL

hrefAttr = hrefAttr.slice(1, hrefAttr.length);
hrefAttr = hrefAttr.split('&');

hrefAttr.forEach(attr => {
    if (attr.indexOf('id') >= 0) {
        pageNum = Number(attr.split('=')[1]);
    } else if (attr.indexOf('cat') >= 0) {
        catName = attr.split('=')[1];
    }
});


//=================================

if (catName !== '') {


    catName !== '' ? catName : catName = allPosts[0].cat[0]['meta-name'];
    let navCat = document.getElementById(catName);

    if (navCat) {
        document.title = navCat.innerHTML + ' - Dog Carely';
        navCat.classList.add('active');

        fetch("data/allPosts.json").then(
            function (response) {
                return response.json();
            }
        ).then((data) => addPosts(data));

    } else {
        nothingFound();
    }

}
else {
    nothingFound();
}


function addPosts(data) {


    let postsContainer = document.getElementById('postsContainer'),
        allPosts = [...data.posts],
        newPostsButton = document.getElementById('newPosts'),
        oldPostsButton = document.getElementById('oldPosts');

    // Removing post that does not belong to Searched Category

    allPosts = allPosts.map(post => {
        let foundPost = false;
        post.cat.forEach(cat => {
            if (cat['meta-name'] === catName)
                foundPost = true;
        });

        if (foundPost)
            return post;
        else
            return null;
    });

    //removing null members
    allPosts = allPosts.filter(function (el) {
        return el != null;
    });

    if (((pageNum - 1) * 10) > allPosts.length) {
        if (allPosts.length > 10) {
            window.location.href = '/category.html?cat=' + catName + "&id=" + (allPosts.length % 10);
        } else {
            nothingFound();
        }
        return;
    }



    //Adjusting Posts and button to show
    if (pageNum === 0 || pageNum < 0)
        pageNum = 1;


    if (pageNum <= 1) {
        newPostsButton.classList.add('disabled');
    } else {
        newPostsButton.href = "?cat=" + catName + "&id=" + (pageNum - 1);
    }


    let postNumEnd = (pageNum * 10);
    allPosts = allPosts.slice(postNumEnd - 10, postNumEnd);


    if (allPosts.length < 10) {
        oldPostsButton.classList.add('disabled');
    } else {
        oldPostsButton.href = "?cat=" + catName + "&id=" + (pageNum + 1);
    }


    allPosts.forEach(post => {
        let article = document.createElement('article');
        article.classList.add('listigPost');


        article.innerHTML = '<a href="' + post.link + '" class="listigPost__img">\n' +
            '            <picture>\n' +
            '              <source data-srcset="img/webp/' + post.img + '.webp" type="image/webp">\n' +
            '              <source data-srcset="img/' + post.img + '.jpg" type="image/jpg">\n' +
            '              <img data-src="img/' + post.img + '.jpg" alt="' + post.imgAlt + '" class="lazy ' + (!!post.portraitImg ? 'portraitImg' : '') + '">\n' +
            '            </picture>\n' +
            '          </a>\n';


        addPostText(post, article);
        postsContainer.appendChild(article);
        lazyLoadInstance.update();

    });

    if (allPosts.length < 1) nothingFound();


}


function addPostText(data, parent) {


    let container = document.createElement('div');
    container.classList.add('postDisplayText');
    container.classList.add('container');

    let categories = document.createElement('div');
    categories.classList.add('postDisplayText__categories');

    data.cat.forEach(ele => {

        let cat = document.createElement('a');
        cat.classList.add('btn');
        cat.classList.add('btn--catg');
        cat.href = ele.link;
        cat.innerHTML = ele.name;

        categories.appendChild(cat);
    });


    let h1 = document.createElement('h1');
    h1.innerHTML = data.title;

    let h1a = document.createElement('a');
    h1a.href = data.link;
    h1a.appendChild(h1);

    let p = document.createElement('p');
    p.innerHTML = data.desc;


    let more = document.createElement('div');
    more.classList.add('postDisplayText__more');

    let readMore = document.createElement('a');
    readMore.href = data.link;
    readMore.classList.add('btn');
    readMore.classList.add('btn--primary');
    readMore.innerHTML = "read article";


    let date = document.createElement('h5');
    date.classList.add('postDisplayText__more__date');
    date.innerHTML = data.date;


    more.appendChild(readMore);
    more.appendChild(date);


    container.appendChild(categories);
    container.appendChild(h1a);
    container.appendChild(p);
    container.appendChild(more);


    parent.appendChild(container);


}


function nothingFound() {
    let postsContainer = document.getElementById('postsContainer');
    document.title = 'Nothing Found - Dog Carely';

    let main=document.querySelector('main');
    main.classList.add('centerAbsolute');
    main.innerHTML='';
    main.innerHTML = "<h1 class='nothingFound'>Nothing Found. See our <a href='/'>latest posts.</a><h1>";

    let listingBtns = document.querySelector('.postListingBtns');
    for (let i = 0; i < listingBtns.children.length; i++) {
        listingBtns.children[i].classList.add('disabled');
    }

}
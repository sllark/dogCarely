fetch("data/featured.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        let sectionFeatured = document.getElementById('sectionFeatured');

        //Adding BG
        sectionFeatured.innerHTML = '<div class="sectionFeatured__bg">' +
            '<picture>\n' +
            '  <source srcset="img/webp/' + data.img + '.webp" type="image/webp">\n' +
            '  <source srcset="img/' + data.img + '.jpg" type="image/jpg">\n' +
            '  <img src="img/' + data.img + '.jpg" alt="' + data.imgAlt + '">\n' +
            '            </picture>\n' +
            '</div>';
        addPostText(data, sectionFeatured);
    }
);


fetch("data/allPosts.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {


        let postsContainer = document.getElementById('postsContainer'),
            allPosts = [...data.posts];


        allPosts = allPosts.splice(0, 10);



        allPosts.forEach((post) => {
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

        if (data.posts.length <= 10) {

            let listingBtns = document.querySelector('.postListingBtns');

            for (let i = 0; i < listingBtns.children.length; i++) {
                listingBtns.children[i].classList.add('disabled');
            }
        }
    }
);


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
    readMore.setAttribute('title',data.title);
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


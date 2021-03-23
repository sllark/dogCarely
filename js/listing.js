let hrefAttr = window.location.search;
let idIndex = hrefAttr.indexOf('id='),
    pageNum = hrefAttr.slice(idIndex + 3, hrefAttr.length);

pageNum.replace('#', '');
pageNum = Number(pageNum);


if (pageNum > 1)  {

    if(pageNum > 1)
        document.title= 'Page '+pageNum+' - Dog Carely'

    fetch("data/allPosts.json").then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {


            let postsContainer = document.getElementById('postsContainer'),
                allPosts = [...data.posts],
                newPosts = document.getElementById('newPosts'),
                oldPosts = document.getElementById('oldPosts');


            if (  allPosts.length < ((pageNum -1) * 10) ){

                if (allPosts.length > 10 )
                    window.location.href= "listing.html?id="+( allPosts.length % 10 );
                else
                    nothingFound();

                return;
            }

            if (idIndex > -1) {//if "id" is present in url


                let postNumEnd = (pageNum * 10);

                allPosts = allPosts.slice(postNumEnd - 10, postNumEnd);


                if (pageNum === 2) {
                    newPosts.href = "index.html";
                } else {
                    let newNum = Number(pageNum) - 1;
                    newPosts.href = "?id=" + newNum;
                }


                if (allPosts.length < 10) {
                    oldPosts.classList.add('disabled');
                } else {
                    let oldNum = Number(pageNum) + 1;
                    oldPosts.href = "listing.html?id=" + oldNum;
                }


            }
            else { //if "id" is not present in url

                let postNumEnd = (2 * 10);
                allPosts = allPosts.slice(postNumEnd - 10, postNumEnd);
                if (allPosts.length < 10) {
                    oldPosts.classList.add('disabled');
                }

                newPosts.href = "index.html";
                oldPosts.href = "listing.html?id=3";

            }


            allPosts.forEach(post => {
                let article = document.createElement('article');
                article.classList.add('listigPost');


                article.innerHTML = '<a href="' + post.link + '" class="listigPost__img">\n' +
                    '            <picture>\n' +
                    '              <source data-srcset="img/webp/' + post.img + '.webp" type="image/webp">\n' +
                    '              <source data-srcset="img/' + post.img + '.jpg" type="image/jpg">\n' +
                    '              <img data-src="img/' + post.img + '.jpg" alt="' + post.imgAlt + '" class="lazy ' + ( !!post.portraitImg ? 'portraitImg' : '' ) + '">\n' +
                    '            </picture>\n' +
                    '          </a>\n';


                addPostText(post, article);
                postsContainer.appendChild(article);
                lazyLoadInstance.update();

            });


        }
    );
}
else{
    nothingFound();
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
    document.title= 'Nothing Found - Dog Carely'

    let main=document.querySelector('main');
    main.classList.add('centerAbsolute');
    main.innerHTML='';
    main.innerHTML = "<h1 class='nothingFound'>Nothing Found. See our <a href='/'>latest posts.</a><h1>";

    let listingBtns = document.querySelector('.postListingBtns');
    for (let i = 0; i < listingBtns.children.length; i++) {
        listingBtns.children[i].classList.add('disabled');
    }

}
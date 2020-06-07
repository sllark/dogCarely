let hrefAttr=window.location.search,
    pageNum=1,
    catName='';

// Separating Search Parameters from URL

hrefAttr=hrefAttr.slice(1,hrefAttr.length);
hrefAttr=hrefAttr.split('&');

hrefAttr.forEach(attr=>{
    if(attr.indexOf('id')>=0){
        pageNum=Number(attr.split('=')[1]);
    }else if(attr.indexOf('cat')>=0){
        catName=attr.split('=')[1];
    }
});

catName !== '' ? catName : catName = allPosts[0].cat[0]['meta-name'];
//=================================

document.getElementById(catName).classList.add('active');


fetch("https://sllark.github.io/dogCarely/data/allPosts.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {

        let postsContainer=document.getElementById('postsContainer'),
            allPosts=[...data.posts],
            newPosts=document.getElementById('newPosts'),
            oldPosts=document.getElementById('oldPosts');



        // Removing post that does not belong to Searched Category

        allPosts = allPosts.map(post=>{
            let ret=false;
            post.cat.forEach(cat=>{
                if(cat['meta-name']===catName)
                    ret=true;
            });

            if(ret)
                return post;
            else
                return null;
        });

        allPosts = allPosts.filter(function (el) {
            return el != null;
        });

        //=================================



        //Adjusting Posts and button to show
        if(pageNum===0)
            pageNum++;
        else if(pageNum<0)
            pageNum=1;


        let postNumEnd=(pageNum*10);
        allPosts=allPosts.slice(postNumEnd-10,postNumEnd+1);


        let newNum=Number(pageNum)-1;
        newPosts.href="?cat="+catName+"&id="+ (newNum>0 ? newNum : 1);


        if(allPosts.length<10){
            oldPosts.classList.add('disabled');
        }
        else {
            let oldNum=Number(pageNum)+1;
            newPosts.href="?cat="+catName+"&id="+oldNum;
        }

        allPosts.forEach(post=>{
            let article=document.createElement('article');
            article.classList.add('listigPost');


            article.innerHTML='<a href="'+post.link+'" class="listigPost__img">\n' +
                '            <picture>\n' +
                '              <!--<source srcset="img/webp/dogCarely_Logo.webp" type="image/webp">-->\n' +
                '              <source srcset="img/'+post.img+'" type="image/png">\n' +
                '              <img src="img/'+post.img+'" alt="Dog Carely">\n' +
                '            </picture>\n' +
                '          </a>\n';


            addPostText(post,article);
            postsContainer.appendChild(article)
        });


        if(allPosts.length<=10 ){

            let listingBtns=document.querySelector('.postListingBtns');

            for (let i=0;i<listingBtns.children.length;i++){
                listingBtns.children[i].classList.add('disabled');
            }
        }

    }
);



function addPostText(data,parent) {


    let container=document.createElement('div');
    container.classList.add('postDisplayText');
    container.classList.add('container');

    let categories=document.createElement('div');
    categories.classList.add('postDisplayText__categories');

    data.cat.forEach(ele=>{

        let cat=document.createElement('a');
        cat.classList.add('btn');
        cat.classList.add('btn--catg');
        cat.href=ele.link;
        cat.innerHTML=ele.name;

        categories.appendChild(cat);
    });





    let h1=document.createElement('h1');
    h1.innerHTML=data.title;

    let h1a=document.createElement('a');
    h1a.href=data.link;
    h1a.appendChild(h1);

    let p=document.createElement('p');
    p.innerHTML=data.desc;


    let more=document.createElement('div');
    more.classList.add('postDisplayText__more');

    let readMore=document.createElement('a');
    readMore.href=data.link;
    readMore.classList.add('btn');
    readMore.classList.add('btn--primary');
    readMore.innerHTML="read more";


    let date=document.createElement('h5');
    date.classList.add('postDisplayText__more__date');
    date.innerHTML=data.date;


    more.appendChild(readMore);
    more.appendChild(date);


    container.appendChild(categories);
    container.appendChild(h1a);
    container.appendChild(p);
    container.appendChild(more);



    parent.appendChild(container);





}

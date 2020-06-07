

fetch("https://sllark.github.io/dogCarely/data/allPosts.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {


        let postsContainer=document.getElementById('postsContainer'),
            allPosts=[...data.posts],
            newPosts=document.getElementById('newPosts'),
            oldPosts=document.getElementById('oldPosts'),
            hrefAttr=window.location.search;


        let idIndex=hrefAttr.indexOf('id='),
            pageNum=hrefAttr.slice(idIndex+3,hrefAttr.length);

        pageNum.replace('#','');
        pageNum=Number(pageNum);

        if(idIndex>-1){


            if(pageNum===1)
                window.location.href='/';


            let postNumEnd=(pageNum*10);

            allPosts=allPosts.slice(postNumEnd-10,postNumEnd+1);



            if(pageNum===2){
                newPosts.href="index.html";
            } else{
                let newNum=Number(pageNum)-1;
                newPosts.href="?id="+newNum;
            }


            if(allPosts.length<10){
                oldPosts.classList.add('disabled');
            }else {
                let oldNum=Number(pageNum)+1;
                oldPosts.href="listing.html?id="+oldNum;
            }



        }else {

            let postNumEnd=(2*10);
            allPosts=allPosts.slice(postNumEnd-10,postNumEnd);
            if(allPosts.length<10){
                oldPosts.classList.add('disabled');
            }

            newPosts.href="index.html";
            oldPosts.href="listing.html?id=3";

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


        if(data.posts.length<=10){

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








//Nav Events
var menu=document.querySelector('.hamburgerMenu'),
    nav=document.querySelector('.header__nav');


menu.onclick=function () {
    nav.classList.toggle('hideNav');
    menu.classList.toggle('makeCross')
};

window.addEventListener('click',function (e) {

    // if( !(nav.contains(e.target)) && e.target!==nav && e.target!==menu && !(menu.contains(e.target)))

    if( e.target!==nav && e.target!==menu && !(menu.contains(e.target))){
        nav.classList.add('hideNav');
        menu.classList.remove('makeCross')

    }

});


window.addEventListener('scroll',topLogManager);

window.onload=topLogManager;

function topLogManager() {
    let header=document.querySelector('.header');
    let topLogo=document.querySelector('.topLogo');

    if(window.pageYOffset>=header.getClientRects()[0].height){
        topLogo.classList.remove('hideTop')
    }else {
        topLogo.classList.add('hideTop')

    }

}


let topLogo=document.querySelector('.topLogo');
topLogo.addEventListener('click',function (e) {
    e.preventDefault();
   window.scrollTo({
       top:0,
       left:0,
       behavior:"smooth"
   })
});
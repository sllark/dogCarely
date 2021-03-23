let postName = document.querySelector(".post").dataset.name, url = "../data/postMetaData/" + postName + ".json";
fetch(url).then(function (e) {
    return e.json()
}).then(function (e) {
    let t = e.cat;
    document.getElementById(t[0]["meta-name"]).classList.add("active");
    let a = document.querySelector(".postDisplayText__categories");
    t.forEach(e => {
        a.innerHTML += `<a class="btn btn--catg" href="${e.link}">${e.name}</a>`
    });
    let n = document.querySelector(".postDisplayText__more__date");
    n.innerHTML = e.date
})
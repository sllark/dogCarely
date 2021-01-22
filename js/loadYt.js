window.addEventListener('load',()=>{
    let ytVideo=document.querySelectorAll('.youtubeVideo');
    setTimeout(()=>{
        ytVideo.forEach(vid=>{
            console.log('loading')
            vid.innerHTML=`<iframe src="https://www.youtube.com/embed/${vid.dataset.videoid}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            console.log('loaded')
        })
    },1000)

})
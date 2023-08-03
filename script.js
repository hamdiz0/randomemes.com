function fun(){
    vids = ["the wock.mp4","zubi.mp4","fattears.mp4","ashitmyears.mp4","iguana.mp4","juice.mp4","hagh.mp4","wtflion.mp4","kid.mkv"]

    plv = document.querySelector(".mes")
    vid = document.createElement('source')
    rurl = vids[Math.floor(Math.random()* vids.length )]
    vid.src = rurl

    plv.innerHTML = `<video class = "mes" autoplay controls><source src="${rurl}" type="video/mp4"></video>`;
    plv.appendChild(vid)

}
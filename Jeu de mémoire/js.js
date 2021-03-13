// init==========================================================
level=1
score=0
time=60
img_card_back='/img/card-back.jpg'
imglist=[
    '/img/game1.jpg',
    '/img/game2.jpg',
    '/img/game1.jpg',
    '/img/game2.jpg',
]
new_imglist=[]
clicked_img=[]
document.getElementById('gameaudio').play();

// document.getElementsByTagName('body').onload=function(){
    
// }
// init==========================================================
document.getElementById('score').innerHTML=score
document.getElementById('lvl').innerHTML=level
document.getElementById('time').innerHTML=time
// init==========================================================
document.getElementById('close').addEventListener('click',c=()=>{
    document.getElementById('info_post').hidden=true
})
// menu==========================================================
// hidden pages
document.getElementById('info_post').hidden=true
document.getElementById('game').hidden=true
document.getElementById('terminer').hidden=true
document.getElementById('time_over').hidden=true

// button info 
document.getElementById('i').addEventListener('click',c=()=>{
    document.getElementById('info_post').hidden=false
})
// button sound
document.getElementById('sound').addEventListener('click',c=()=>{
    src=document.getElementById('sound').src
    if (src='/img/icons8-audio-100.png'){
        document.getElementById('sound').src='/img/icons8-mute-100.png'
        document.getElementById('gameaudio').pause();
    } else {
        document.getElementById('sound').src='/img/icons8-audio-100.png'
        document.getElementById('gameaudio').play();
    }
})
// button play
document.getElementById('play').addEventListener('click',c=()=>{
    document.getElementById('game').hidden=false
    document.getElementById('menu').hidden=true
    play()
})
// game==========================================================
// random img
function play(){
    time=60
    
    
    document.getElementById('1').src=img_card_back
    document.getElementById('2').src=img_card_back
    document.getElementById('3').src=img_card_back
    document.getElementById('4').src=img_card_back
    document.getElementById('1').disabled=false
    document.getElementById('2').disabled=false
    document.getElementById('3').disabled=false
    document.getElementById('4').disabled=false
    imglist=[
        '/img/game1.jpg',
        '/img/game2.jpg',
        '/img/game1.jpg',
        '/img/game2.jpg',
    ]
    new_imglist=[]
    clicked_img=[]
    for (i=1;i<5;i++){
        ran=Math.floor(Math.random()*imglist.length)
        new_imglist.push(imglist[ran])
        imglist.splice(ran, 1)
    }
    for(i=1;i<60;i++){
        t=setTimeout(c=()=>{
            time--
            document.getElementById('time').innerHTML=time;
        },1000);
    }
    var interval = setInterval(timer(),1000);
}
// if i click the img the change img-change-handler 
document.getElementById('1').onclick=function(){
    document.getElementById('1').src=new_imglist[0]
    clicked_img.push(new_imglist[0])
    document.getElementById('1').disabled=true
    test()
}
document.getElementById('2').onclick=function(){
    document.getElementById('2').src=new_imglist[1]
    clicked_img.push(new_imglist[1])
    document.getElementById('2').disabled=true
    test()
}
document.getElementById('3').onclick=function(){
    document.getElementById('3').src=new_imglist[2]
    clicked_img.push(new_imglist[2])
    document.getElementById('3').disabled=true
    test()
}
document.getElementById('4').onclick=function(){
    document.getElementById('4').src=new_imglist[3]
    clicked_img.push(new_imglist[3])
    document.getElementById('4').disabled=true
    test()
}
// test
function test(){
    if(new_imglist.length==clicked_img.length){
        if (clicked_img[0]=clicked_img[1]){
            score=1
            if (clicked_img[2]==clicked_img[3]){
                score=1
                end()
            }else{
                play()
            }
        }else{
            play()
        }
    }
}
// terminer==========================================================
// show the end page
function end(){
    document.getElementById('info_post').hidden=true
    document.getElementById('game').hidden=true
    document.getElementById('terminer').hidden=false
}

// reload page for user to play again
function replay(){
    window.location.reload();
}
document.getElementById('replay').addEventListener('click',replay)
// time over==========================================================
// reload page because the time is over
document.getElementById('replay2').addEventListener('click',replay)
// the timer
function timer(){
    t=setTimeout(c=()=>{
        time--
        document.getElementById('time').innerHTML=time;
    },1000);
    document.getElementById('time').innerHTML=time;
}
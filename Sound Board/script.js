const sounds = ['applause','boo','gasp','tada','victroy','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click',() =>{
        stopSongs()
        document.getElementById(sound).play()
        
    })

    document.getElementById('buttons').appendChild(btn)
})


function stopSongs(){
    sounds.forEach(sound => {
        var song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;
    })
}
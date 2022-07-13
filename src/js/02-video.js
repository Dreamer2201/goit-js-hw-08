    
     import Vimeo from '@vimeo/player';
     const iframe = document.querySelector('iframe');
     const player = new Vimeo(iframe);
     console.log(player);
   
    const onPlay = function(data) {
        const time = data.seconds;
        localStorage.setItem("videoplayer-current-time", time);
    };

    let savedTime = localStorage.getItem("videoplayer-current-time");  
    //  console.log(savedTime);

    player.on('timeupdate', onPlay);
    player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
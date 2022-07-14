    
     import Vimeo from '@vimeo/player';
     const throttle = require('lodash.throttle');

     const iframe = document.querySelector('iframe');
     const player = new Vimeo(iframe);
     console.log(player);
   
    const onPlay = function(data) {
        const time = data.seconds;
        localStorage.setItem("videoplayer-current-time", time);
        console.log(time);
    };

    let savedTime = localStorage.getItem("videoplayer-current-time");  
    //  console.log(savedTime);

    player.on('timeupdate', throttle(onPlay, 1000));
    player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
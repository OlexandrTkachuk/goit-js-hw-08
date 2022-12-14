import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const storageKey = 'videoplayer-current-time';
const currentStorageValue = localStorage.getItem(storageKey);
console.log(currentStorageValue);

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer(data) {}

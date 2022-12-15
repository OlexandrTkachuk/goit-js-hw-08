import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentStorageValue = localStorage.getItem(STORAGE_KEY);

if (currentStorageValue) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

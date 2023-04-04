const anime = require('../../node_modules/animejs/lib/anime.min.js');

anime.set(".sceneTitle", {opacity:0})

anime({
    targets: ".sceneTitle",
    opacity: 1,
    duration: 5000,
    color: {
      value: '#FF0000',
      duration: 20000
    }
  });
const game = document.getElementById("game");
const rootVars = getComputedStyle(document.documentElement);
const nbcolonnes = rootVars.getPropertyValue("--column-number").trim();
const nblignes = rootVars.getPropertyValue("--row-number").trim();
let blockSize = rootVars.getPropertyValue("--block-size").trim();
// removes px from the end of the block size css value
blockSize = blockSize.slice(0, -2);

let grille = new Array();

function GenereGrille(x, y) {
  for (let j = 0; j < x; j++) {
    let line = [];
    for (let i = 0; i < y; i++) {
      let image = document.createElement('img');
      image.src = "../images/pion.png";
      image.style.position = 'absolute';
      image.style.left = `${i * blockSize}px`;
      image.style.top = `${j * blockSize}px`;
      line.push(image);
      game.appendChild(image);
    }
    grille.push(line);
  }
}

function Rand(limit) {
  return Math.floor(Math.random() * limit);
}

let nc = Rand(nbcolonnes - 1);
let y = Rand(nblignes - 1);

function AjouteMurGrille(nb) {
  for (let i = 0; i < nb; i++) {
    grille[Rand(grille.length)][Rand(grille[0].length)].src = "../images/mur.png";
  }
}

GenereGrille(nblignes, nbcolonnes);
AjouteMurGrille(100);

grille[0][0].src = "../images/pacman.png";
grille[9][19].src = "../images/monstre.png";


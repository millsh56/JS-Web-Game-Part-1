// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

  

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


function newImg(src, left, bottom) {
    let img = document.createElement ('img')
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left + 'px';
    greenCharacter.style.bottom = bottom + 'px';
    document.body.append(img);
    return img
  }
  

  newImg('assets/green-character.gif', 100, 100);
  newImg('assets/pine-tree.png', 400, 200);
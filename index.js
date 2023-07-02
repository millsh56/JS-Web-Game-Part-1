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
    let img = document.createElement('img')
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left + 'px';
    greenCharacter.style.bottom = bottom + 'px';
    document.body.append(img);
    return img
}

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })


function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

newImg('assets/green-character.gif', 100, 100);
newImg('assets/pine-tree.png', 400, 200);
newImg('assets/tree.png', 200, 300)
newImg('assets/pillar.png', 350, 100)
newImg('assets/crate.png', 150, 200)
newImg('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


document.body.style.background = createColor();

function generateBlocks() {
    const container = document.querySelector(".container-box")
    
    let boxNum = 25;
    container.innerHTML = "";

    for(let i = 0; i < boxNum; i++) {
        const createBox = document.createElement('div');
        createBox.classList.add('box');
        createBox.style.backgroundColor = createColor();
        container.append(createBox);
    }

}

function createColor() {
    const color = 8888;

    return `#${Math.floor(Math.random() * color).toString(16)}`;
}

generateBlocks();
setInterval(generateBlocks, 1000);


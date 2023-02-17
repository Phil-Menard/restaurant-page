function createMainHome()   {
    const main = document.createElement('div');
    const leftSide = createLeftSide();
    const rightSide = createRightSide();

    main.className = 'main';
    leftSide.className = 'left-side';
    rightSide.className = 'right-side';

    main.append(leftSide, rightSide);

    return main;
}

function createLeftSide()   {
    let container = document.createElement('div');
    let title = document.createElement('h1');
    let paragraphe = document.createElement('p');

    title.textContent = "Burger's Palace";
    paragraphe.textContent = "Eat. Love. Repeat.";

    container.append(title, paragraphe);

    return container;
}

function createRightSide()  {
    let container = document.createElement('div');
    const burgerImage = document.createElement('div');

    burgerImage.className = "burgerImage";

    container.appendChild(burgerImage);

    return container;
}

export default createMainHome;
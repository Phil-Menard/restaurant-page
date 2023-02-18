function createMainMenu()   {
    const main = document.createElement('div');
    const cheeseburgerDescription = document.createElement('div');
    const avocadoDescription = document.createElement('div');
    const meatyDescription = document.createElement('div');
    const cheeseburgerImg = document.createElement('div');
    const avocadoImg = document.createElement('div');
    const meatyImg = document.createElement('div');

    main.className = 'main menus';
    cheeseburgerDescription.className = "description";
    avocadoDescription.className = "description";
    meatyDescription.className = "description";
    cheeseburgerImg.className = "photo-burger cheese";
    avocadoImg.className = "photo-burger avocado";
    meatyImg.className = "photo-burger meaty";

    cheeseburgerDescription.textContent = "CHEESEBURGER : tomates / oignon / cheese/ steack";
    avocadoDescription.textContent = "AVOCADO : tomates / oignon / avocado/ steack";
    meatyDescription.textContent = "MEATY : tomates / oignon / cheese/ double steack / bacon";

    main.append(cheeseburgerDescription, cheeseburgerImg);
    main.append(avocadoImg, avocadoDescription);
    main.append(meatyDescription, meatyImg);

    return main;
}



export default createMainMenu;
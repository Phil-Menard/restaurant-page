function createHeader() {
    const header = document.createElement('header');
    const liste = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const about = document.createElement('li');
    const lienHome = document.createElement('a');
    const lienMenu = document.createElement('a');
    const lienAbout = document.createElement('a');

    lienHome.textContent = "HOME";
    lienMenu.textContent = "MENU";
    lienAbout.textContent = "ABOUT";

    lienHome.id = "home";
    lienMenu.id = "menu";
    lienAbout.id = "about";

    home.appendChild(lienHome);
    menu.appendChild(lienMenu);
    about.appendChild(lienAbout);
    liste.append(home, menu, about);
    header.appendChild(liste);

    return header;
}

export default createHeader;
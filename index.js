function setActiveOnFirstElement() {
    let element = document.getElementsByTagName("section")[0];
    element.classList.add('active');
}

const hideSections = () => {
    [...document.getElementsByTagName('section')].forEach(
        (section) => {
            section.classList.remove('active');
            console.log(section);
        }
    )
};

const showSection = (event) => {
    hideSections();
    let section = event.target.dataset.id;
    let elementToShow = document.getElementById(section);
    elementToShow.classList.add('active');
    console.log(elementToShow);
};



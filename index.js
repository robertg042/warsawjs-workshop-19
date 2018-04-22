const setActiveOnFirstElement = () => {
    let element = document.getElementsByTagName("section")[0];
    element.classList.add('active');
};

const hideSections = () => {
    [...document.getElementsByTagName('section')].forEach(
        (section) => {
            section.classList.remove('active');
            console.log(section);
        }
    )
};

const removeButtonActiveness = () => {
    [...document.getElementsByClassName('active-button')].forEach(
        (button) => {
            button.classList.remove('active-button');
        }
    )
};

const showSection = (event) => {
    let classList = ['projects-section-link', 'experience-section-link', 'contact-section-link'];

    hideSections();
    let button = event.target;
    let section = button.dataset.id;
    let elementToShow = document.getElementById(section);
    elementToShow.classList.add('active');

    let chosenClass;

    removeButtonActiveness();
    classList.forEach(
        (cl) => {
            if (button.classList.contains(cl)) {
                chosenClass = cl;
            }
        }
    );
    let navGroup = document.getElementsByClassName(chosenClass);
    [...navGroup].forEach(
        (singleButton) => {
            singleButton.classList.add('active-button');
        }
    )


};

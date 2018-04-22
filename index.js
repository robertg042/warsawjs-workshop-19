var currentImageIndex = 0;
let imagePaths = ['./images/cat1.jpg', './images/cat2.jpeg', './images/cat3.jpg'];

const changeImage = (event) => {
    let image = document.getElementById('image');
    let direction = event.target.dataset.direction;
    if (direction == 'left' && currentImageIndex != 0) {
        currentImageIndex--;
    }
    if (direction == 'right' && currentImageIndex != imagePaths.length - 1) {
        currentImageIndex++;
    }
    image.src = imagePaths[currentImageIndex];

    changePointer(currentImageIndex);
};

const changePointer = (index) => {
    if (index == 0) {
        document.getElementsByClassName('arrow-left')[0].style.cursor = 'not-allowed';
    } else {
        document.getElementsByClassName('arrow-left')[0].style.cursor = '';
    }
    if (index == imagePaths.length - 1) {
        document.getElementsByClassName('arrow-right')[0].style.cursor = 'not-allowed';
    } else {
        document.getElementsByClassName('arrow-right')[0].style.cursor = '';
    }
};

const setActiveOnFirstElement = () => {
    let element = document.getElementsByTagName("section")[0];
    element.classList.add('active');

    changePointer(currentImageIndex)
};

const hideSections = () => {
    [...document.getElementsByTagName('section')].forEach(
        (section) => {
            section.classList.remove('active');
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
    let classList = ['projects-section-link', 'gallery-section-link', 'experience-section-link', 'contact-section-link'];

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

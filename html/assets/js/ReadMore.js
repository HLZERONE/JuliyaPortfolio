const readMoreLinks = document.querySelectorAll('.read_more_link');
const projectDescriptionContainers = document.querySelectorAll('.project_description_container');

readMoreLinks.forEach((readMoreLink, index) => {
    readMoreLink.addEventListener('click', () => {
        if (projectDescriptionContainers[index].style.display === 'none') {
            projectDescriptionContainers[index].style.display = 'block';
            readMoreLink.textContent = 'Read less';
        } else {
            projectDescriptionContainers[index].style.display = 'none';
            readMoreLink.textContent = 'Read more';
        }
    });
});

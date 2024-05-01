document.addEventListener("DOMContentLoaded", function () {


    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // Button (title text)

    document.getElementsByClassName('but').addEventListener('click', function (eventData) {

        switchContent(eventData.target.value);
        switchTitletext(eventData.target.value);
    });

    // title (description)

    document.getElementsByClassName('but').addEventListener('mouseover', function (eventData) {

        switchDescription(eventData.target.value);
    });

    function switchDescription(value) {
        let description = document.getElementById('description');
        description.classList = "";
        switch (value) {
            case 'boltFS':
                description.classList.add('descriptionFS');
                break;
            case 'boltFK':
                description.classList.add('descriptionFK');
                break;
            case 'boltFY':
                description.classList.add('descriptionFY');
                break;
            case 'boltFE':
                description.classList.add('descriptionFE');
                break;
            case 'boltLY':
                description.classList.add('descriptionLY');
                break;
            case 'boltLA':
                description.classList.add('descriptionLA');
                break;
            case 'boltLN':
                description.classList.add('descriptionLN');
                break;
            case 'boltLG':
                description.classList.add('descriptionLG');
                break;
        }
    }



    // project selector (My Portfolio of Projects)
    document.getElementById('option').addEventListener('change', function (eventData) {

        changePro(eventData.target.value);
    });

    function changePro(value) {
        let project = document.getElementById('projects');
        project.classList = "";
        switch (value) {
            case 'site':
                project.classList.add('selected1');
                break;
            case 'slide':
                project.classList.add('selected2');
                break;
            case 'essay':
                project.classList.add('selected3');
                break;
            case 'video':
                project.classList.add('selected4');
                break;
        }
    }
});
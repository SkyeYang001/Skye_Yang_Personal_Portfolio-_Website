document.addEventListener("DOMContentLoaded", function () {

    // project selector (My Portfolio of Projects)

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }


    document.getElementById('option').addEventListener('change', function (eventSelect) {

        changePro(eventSelect.target.value);
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

document.addEventListener("DOMContentLoaded", function () {

    // title (description)

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // document.getElementById('NAV').addEventListener('mouseover', function (eventDescription) {

    //     switchDescription(eventDescription.target.value);
    // });

    let buttons = document.querySelectorAll('#NAV > section > a');
    for(button of buttons){
        button.addEventListener('mouseover', (event) => {
            let name = event.target.attributes['data-value'].value;
            // console.log(event.target.attributes['data-value'].value);
            switchDescription(name);
        });
    }

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

});

document.addEventListener("DOMContentLoaded", function () {
    // Button (content)

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // document.getElementById('NAV').addEventListener('click', function (eventTitleText) {

    //     switchTitleText(eventTitleText.target.value);
    //     switchContent(eventTitleText.target.value);
    // });

    let buttons = document.querySelectorAll('#NAV > section > a');
    for(button of buttons){
        button.addEventListener('click', (event) => {
            let name = event.target.attributes['data-value'].value;
            // console.log(event.target.attributes['data-value'].value);
            switchTitleText(name);
            switchContent(name);
        });
    }

    //hide content on demand
    function hideContent(){
        let contents = document.querySelectorAll('#content > .indie');
        for(content of contents) {
            content.classList.add('hidden');
        }
    }

    hideContent() // hide content on page load
    

    function switchTitleText(value) {
        console.log('TitleText ' + value);
        let NAV = document.getElementById('NAV');
        NAV.classList = "";
        switch (value) {
            case 'boltFS':
                NAV.classList.add('TitleTextFS');
                break;
            case 'boltFK':
                NAV.classList.add('TitleTextFK');
                break;
            case 'boltFY':
                NAV.classList.add('TitleTextFY');
                break;
            case 'boltFE':
                NAV.classList.add('TitleTextFE');
                break;
            case 'boltLY':
                NAV.classList.add('TitleTextLY');
                break;
            case 'boltLA':
                NAV.classList.add('TitleTextLA');
                break;
            case 'boltLN':
                NAV.classList.add('TitleTextLN');
                break;
            case 'boltLG':
                NAV.classList.add('TitleTextLG');
                break;
        }
    }

    function switchContent(value) {
        console.log('Content ' + value);
        hideContent(); // hide contents before revealing selected section
        let content = document.getElementById('content');
        content.classList = "";
        switch (value) {
            case 'boltFS':
                content.classList.add('contentFS');
                break;
            case 'boltFK':
                content.classList.add('contentFK');
                break;
            case 'boltFY':
                content.classList.add('contentFY');
                break;
            case 'boltFE':
                content.classList.add('contentFE');
                break;
            case 'boltLY':
                content.classList.add('contentLY');
                break;
            case 'boltLA':
                content.classList.add('contentLA');
                break;
            case 'boltLN':
                content.classList.add('contentLN');
                break;
            case 'boltLG':
                content.classList.add('contentLG');
                break;
        }
    }

});
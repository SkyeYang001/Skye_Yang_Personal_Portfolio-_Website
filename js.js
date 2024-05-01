document.addEventListener("DOMContentLoaded", function () {


    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // title (Large Text)


    // title (description)

    // project selector (My Portfolio of Projects)
    document.getElementById('option').addEventListener('change', function (eventData) {
        
        changeCert(eventData.target.value);
    });
    
    function changeCert(value){
        let project = document.getElementById('projects');
        project.classList = "";
        switch(value){
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
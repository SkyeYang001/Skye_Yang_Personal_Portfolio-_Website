document.addEventListener("DOMContentLoaded", function () {


    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('option').addEventListener('change', function (eventData) {
        
        changeCert(eventData.target.value);
    });

    // document.getElementById("myForm").addEventListener("submit", function (eventData) {
    //     eventData.preventDefault();
    //     console.log(eventData.target);
    //     var formData = new FormData(eventData.target);
    //     formData = Object.fromEntries(formData);

    //     let nameOutput = document.getElementById('nameOutput');
    //     let info = document.getElementById('info');
    //     nameOutput.innerText = formData.name;
    //     info.innerText = formData.type;

    //   });
    
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
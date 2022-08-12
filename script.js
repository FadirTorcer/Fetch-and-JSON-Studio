// TODO: add code here
window.addEventListener("load", function(){
    // TODO: fetch planets JSON
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            /* console.log(json);
            console.log(json.length); */
            const destination = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                destination.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li>Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[index].picture}>
                    </div>
                `;
            }
        });
    });
});
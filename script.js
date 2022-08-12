// TODO: add code here
window.addEventListener("load", function(){
    // TODO: fetch planets JSON
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            /* console.log(json);
            console.log(json.length); */
            json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });
            const destination = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                temp = '';
                if (json[index].active === true) {
                    temp = "id=onRoster";
                }
                destination.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li ${temp}>Active: ${json[index].active}</li>
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
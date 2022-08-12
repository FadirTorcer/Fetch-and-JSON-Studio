// TODO: add code here
window.addEventListener("load", function(){
    // TODO: fetch planets JSON
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            console.log(json);
            console.log(json.length);
            const destination = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                destination.innerHTML = `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>Mae Jemison</h3>
                            <ul>
                                <li>Hours in space: 190</li>
                                <li>Active: false</li>
                                <li>Skills: Physician, Chemical Engineer</li>
                            </ul>
                        </div>
                        <img class="avatar" src="images/mae-jemison.jpg">
                    </div>
                `;
            });
        });
    });
});
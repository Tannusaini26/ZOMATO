// dark/light mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "sun.png";
    }
    else{
        mode.src = "moon.png";
    }
}
// weather app
let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;

window.addEventListener("load" ,()=>{

    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/";

        const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=337bd5ff226bcb748c753d13e2e26de4`

        fetch(api).then((response)=>{
            return response.json();
            

        })


        .then (data =>
            {
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                
                if(id<300 && id>200)
                {
                    tempicon.src="thunderstorm.jpg"
                }

            if(id<400 && id>300)
            {
                tempicon.src="cloud.jpg"
            }

            if(id<600 && id>500)
            {
                tempicon.src="cloud-rain.png"
            }

            if(id<700 && id>600)
            {
                tempicon.src="snow.png"
            }

            if(id<800 && id>700)
            {
                tempicon.src="cloud.jpg"
            }

            if(id==800)
            {
                tempicon.src="cloud-and-sun.png"
            }
        })


        }
    )}
    console.log(data);
})
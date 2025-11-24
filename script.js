function convertTemperature(){
    const input = document.getElementById("temperatureInput").value;
    const unit=document.getElementById("unitSelect").value;
    const celsiusResult=document.getElementById("celsiusResult");
    const fahrenheitResult=document.getElementById("fahrenheitResult");
    const kelvinResult=document.getElementById("kelvinResult");
    if(isNaN(input) || input === ""){
        alert("Please enter a valid number!");
    }
    let celsius,fahrenheit,kelvin;
    switch (unit){
        case "celsius":
            celsius = parseFloat(input);
            fahrenheit = (celsius*9/5)+32;
            kelvin=celsius+273.15;
            break;
        case "fahrenheit":
            fahrenheit = parseFloat(input);
            celsius = (fahrenheit-32) * 5/9;
            kelvin = celsius+273.15;
            break;
        case "kelvin":
            kelvin = parseFloat(input);
            celsius= kelvin - 273.15;
            fahrenheit = (celsius * 9/5)+32;
            break;
    }
    celsiusResult.textContent = celsius.toFixed(2);
    fahrenheitResult.textContent = fahrenheit.toFixed(2);
    kelvinResult.textContent = kelvin.toFixed(2);
    changeBackground(celsius);
}
function changeBackground(tempC){
    const body = document.body;
    let imageUrl = "";
    if (tempC <= 0){
        imageUrl= "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    }
    else if (tempC >0 && tempC <=20){
        imageUrl = "https://images.unsplash.com/photo-1614959909713-128c622fad23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    }
    else if (tempC > 20 && tempC <=35){
        imageUrl = "https://images.unsplash.com/photo-1534629938736-b1b076531d3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bm55fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    }
    else{
        imageUrl="https://plus.unsplash.com/premium_photo-1699534956937-8be2c4c68e03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    }
    body.style.transition="background 1s ease-in-out";
    body.style.background=`url('${imageUrl}') no-repeat center center/cover`;

}
const Toogle = () => {


    let tooggleON = document.getElementById("tooggleON")

    let aroow = document.getElementById("aroow")



    let toggleImg= document.querySelector(".toggleImg") 


        if (tooggleON.style.left === "-380px") {
            toggleImg.style.left = "87%"
            tooggleON.style.left = "0px"

        }
        else {
            tooggleON.style.left = "-380px"
            toggleImg.style.left = "100%"


        }





    

    
}

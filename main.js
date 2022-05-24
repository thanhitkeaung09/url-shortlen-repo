import './style.scss'
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints.min'

let navBar = document.getElementById("navBar");
var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
        if(direction == 'down'){
            navBar.classList.add("position-fixed")
            navBar.classList.add("w-100")
            navBar.classList.add("header")
            navBar.classList.add("animate__fadeInDown")
            console.log(direction)

        }
        else{
            navBar.classList.remove("position-fixed")
            navBar.classList.remove("w-100")
            navBar.classList.remove("header")
            navBar.classList.remove("animate__fadeInDown")


            console.log(direction)

        }
    },
    offset: '75%'
})

var slideUp = {
    distance: '70px',
    duration : 1000,
    origin : 'top',
    interval: 500
}

ScrollReveal().reveal('.content',slideUp);


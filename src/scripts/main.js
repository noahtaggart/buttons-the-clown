import { fetchReservation } from "./dataAccess.js"
import { ClownReservation } from "./ClownReservation.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservation().then(
        () => {
            mainContainer.innerHTML = ClownReservation()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
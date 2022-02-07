import { getReservations, deleteReservation } from "./dataAccess.js"

//targets the main container in index.html
const mainContainer = document.querySelector("#container")

//function to iterate through Reservations and run each one through the html string  builder function
export const Reservations = () => {
    const reservations = getReservations()
    let html = `
        <ul>
            ${reservations.map(convertReservationToListElement).join("")
        }`

    return html

}

//function to pass each reservation through and convert to HTML with matching families and reservation times
const convertReservationToListElement = (reservation) => {



    let html = `<li>
        ${reservation.parentName} requests a clown for their child, ${reservation.childName}, for ${reservation.lengthOfReservation} hours at ${reservation.addressOfParty}. 
        The reservation is for a party of ${reservation.numOfChildren} children on ${reservation.reservationDate}.
        <button class="reservation_delete"
            id="reservation--${reservation.id}">
            Deny
            </button>
    </li>`


return html
}


mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})
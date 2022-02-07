import { ServiceForm } from "./ServiceForm.js"
import { Reservations } from "./Reservations.js"

export const ClownReservation = () => {
    return `
        <h1>Buttons the Clown</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceReservations">
            <h2>Service Reservations</h2>
            ${Reservations()}
        </section>
    `
}
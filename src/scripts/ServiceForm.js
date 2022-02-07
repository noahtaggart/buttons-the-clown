import { sendReservation } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent/Guardian Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="addressofParty">Address of Party</label>
            <input type="text" name="addressofParty" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">How many children will be attending the party?</label>
            <input type="text" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">How long is your reservation?</label>
            <input type="number" name="lengthOfReservation" class="input" />
        </div>
        <div class="field">
        <label class="label" for="reservationDate">When is the party?</label>
        <input type="date" required pattern = "\d{2}-\d{2}-\d{4}"name="reservationDate" class="input" />
    </div>
    


        <button class="button" id="submitRequest">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const addressOfParty = document.querySelector("input[name='addressofParty']").value
        const lengthOfReservation = document.querySelector("input[name='lengthOfReservation']").value
        const reservationDate = document.querySelector("input[name='reservationDate']").value
        const numofChildren = document.querySelector("input[name=numOfChildren]").value

        // Make an object out of the user input
        const reservationData = {
            parentName: parentName,
            childName: childName,
            addressOfParty: addressOfParty,
            lengthOfReservation: lengthOfReservation,
            reservationDate: reservationDate,
            numOfChildren: numofChildren
        }

        // Send the data to the API for permanent storage
        sendReservation(reservationData)
    }
})
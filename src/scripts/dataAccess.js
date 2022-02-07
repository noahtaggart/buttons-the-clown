const applicationState = {

}
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"


export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

export const getReservationDates = () => {
    return applicationState.reservationDates.map(reservationDate => ({...reservationDate}))
}

export const getEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}


export const fetchReservation = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (serviceReservation) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservation
            }
        )
}

export const sendReservation = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
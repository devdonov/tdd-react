const today = new Date();

const at = hours => today.setHours(hours, 0);

const customers = [
  {
    firstName: "John",
    lastName: "J",
    phoneNumber: "111111",
    stylist: "Anna",
    service: "test",
    notes: "test notes"
  },
  {
    firstName: "Olga",
    lastName: "V",
    phoneNumber: "22222",
    stylist: "Oloph",
    service: "test 2",
    notes: "test notes 2"
  },
  {
    firstName: "Artem",
    lastName: "D",
    phoneNumber: "333333",
    stylist: "Jorge",
    service: "test 3",
    notes: "test notes 3"
  },
  {
    firstName: "Ruben",
    lastName: "F",
    phoneNumber: "444444",
    stylist: "Anna",
    service: "1234",
    notes: "test notes 4"
  },
  {
    firstName: "Yuri",
    lastName: "G",
    phoneNumber: "5555",
    stylist: "Den",
    service: "haircut",
    notes: "test notes 5"
  },
]

export const sampleAppointments = customers.map((customer, ind) => ({
  startsAt: at(ind + 9),
  customer
}))
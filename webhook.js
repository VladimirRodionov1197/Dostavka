module.exports = (webhook) => {

webhook.on('hook_district', (session) => {
if (session.my_district == "Адмиралтейский") {
session.price = 200;
} else if (session.my_district == "Приморский") {
session.price = 400;
} else if (session.my_district == "Пушкинский") {
session.price = 800;
}
});

webhook.on('hook_weight', (session) => {
if (session.weight <= 5) {
session.price += 500;
} else if (session.weight > 5 && session.weight <= 10) {
session.price += 1000;
} else if (session.weight > 10 && session.weight <= 20) {
session.price += 3000;
}
});

};
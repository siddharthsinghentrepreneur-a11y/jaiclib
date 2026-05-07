const destinations = {
    logo: "https://www.jaiclub.org/#/register?invitationCode=885212037861",
    join: "https://www.jaiclub.org/#/register?invitationCode=885212037861",
    register: "https://www.jaiclub.org/#/register?invitationCode=885212037861",
    login: "https://www.jaiclub.org/#/register?invitationCode=885212037861",
    ads: "https://t.me/+a2jJ1Vx6WHA3Nzdl",
};

const interactiveElements = document.querySelectorAll("[data-role]");

window.addEventListener("load", () => {
    document.body.classList.add("is-ready");
});

interactiveElements.forEach((element) => {
    const role = element.dataset.role;
    const destination = destinations[role];

    if (element.tagName === "A" && destination) {
        element.href = destination;
    }

    element.addEventListener("click", (event) => {
        element.classList.remove("tap");
        void element.offsetWidth;
        element.classList.add("tap");

        window.setTimeout(() => {
            element.classList.remove("tap");
        }, 180);

        if (!destination || destination === "#") {
            event.preventDefault();
            return;
        }

        if (element.tagName !== "A") {
            window.location.href = destination;
        }
    });
});
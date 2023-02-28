const button = document.querySelector(".button");
const container = document.querySelector(".container");

button.addEventListener("click", (e) => {
    if (container.classList.contains('dark')) {
        container.classList.remove('dark')
        button.textContent = "Dark Mode"
    } else {
        container.classList.add('dark')
        button.textContent = "Light Mode"
    }
})
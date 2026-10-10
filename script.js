const home = document.getElementById("home");
const choices = document.getElementById("choices");
const picturesPage = document.getElementById("picturesPage");
const messagePage = document.getElementById("messagePage");

function showPage(page) {
    [home, choices, picturesPage, messagePage].forEach((item) => {
        item.classList.add("hidden");
    });

    page.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const backgroundMusic = document.getElementById("backgroundMusic");

document.getElementById("openButton").addEventListener("click", async () => {
    showPage(choices);

    try {
        await backgroundMusic.play();
    } catch (error) {
        console.log("Music could not play.");
    }
});

document.getElementById("picturesButton").addEventListener("click", () => {
    showPage(picturesPage);
});

document.getElementById("messageButton").addEventListener("click", () => {
    showPage(messagePage);
});

document.getElementById("backButton").addEventListener("click", () => {
    showPage(home);
});

document.getElementById("returnPictures").addEventListener("click", () => {
    showPage(choices);
});

document.getElementById("returnMessage").addEventListener("click", () => {
    showPage(choices);
});
// =========================
// REGISTER
// =========================

function registerUser(event) {

    event.preventDefault();

    alert("Registration successful!");

    window.location.href = "login.html";
}


// =========================
// LOGIN
// =========================

function loginUser(event) {

    event.preventDefault();

    alert("Login successful!");

    window.location.href = "home.html";
}


// =========================
// LOGOUT
// =========================

function logout() {

    alert("Logged out successfully!");

    window.location.href = "login.html";
}


// =========================
// CREATE POST POPUP
// =========================

function openPostPopup() {

    document.getElementById("postPopup").style.display = "flex";
}


// =========================
// EVENT POPUP
// =========================

function openEventPopup() {

    document.getElementById("eventPopup").style.display = "flex";
}


// =========================
// POLL POPUP
// =========================

function openPollPopup() {

    document.getElementById("pollPopup").style.display = "flex";
}


// =========================
// CLOSE POPUP
// =========================

function closePopup(popupId) {

    document.getElementById(popupId).style.display = "none";
}


// =========================
// CREATE POST
// =========================

function createPost() {

    let text = document.getElementById("postText").value;

    if (text.trim() === "") {

        alert("Please write something before posting.");

        return;
    }

    alert("Post created successfully!");

    document.getElementById("postText").value = "";

    closePopup("postPopup");
}


// =========================
// CREATE EVENT
// =========================

function createEvent() {

    alert("Event created successfully!");

    closePopup("eventPopup");
}


// =========================
// CREATE POLL
// =========================

function createPoll() {

    alert("Poll created successfully!");

    closePopup("pollPopup");
}


// =========================
// FILE SELECTION
// =========================

function openFile(type) {

    if (type === "photo") {

        document.getElementById("photoFile").click();

    } else if (type === "video") {

        document.getElementById("videoFile").click();

    } else if (type === "document") {

        document.getElementById("documentFile").click();
    }
}


// =========================
// LIKE
// =========================

function likePost(button) {

    if (button.classList.contains("liked")) {

        button.classList.remove("liked");

        button.innerHTML = "👍 Like";

    } else {

        button.classList.add("liked");

        button.innerHTML = "👍 Liked";

        button.style.color = "#0a66c2";
    }
}


// =========================
// CONNECT
// =========================

function connectUser(button) {

    if (button.innerText === "Connect") {

        button.innerText = "Pending";

    } else {

        button.innerText = "Connect";
    }
}

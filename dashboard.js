// ======================================
// NOTIFICATION TOGGLE
// ======================================

function toggleNotification(){

    const panel = document.getElementById("notificationPanel");

    panel.classList.toggle("show");

}

// ======================================
// DARK MODE
// ======================================

function toggleDarkMode(){

    document.body.classList.toggle("dark");

    // Save preference
    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

// Load saved theme
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

    }

});

// Close notification when clicking outside
document.addEventListener("click", function(event){

    const wrapper = document.querySelector(".notification-wrapper");
    const panel = document.getElementById("notificationPanel");

    if(wrapper && !wrapper.contains(event.target)){

        panel.classList.remove("show");

    }

});
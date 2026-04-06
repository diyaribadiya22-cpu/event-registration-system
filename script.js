document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {
        document.getElementById("msg").innerText = "Please enter a valid Gmail address!";
        return;
    }

    const data = {
        full_name: document.getElementById("name").value,
        email: email,
        event_name: document.getElementById("event").value
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("msg").innerText = data;
    })
    .catch(err => console.log(err));
});
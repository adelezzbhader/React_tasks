document.getElementById('signupBtn').addEventListener('click', function() {
    displaySignUpForm();
});

document.getElementById('loginBtn').addEventListener('click', function() {
    displayLoginForm();
});

function displaySignUpForm() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Sign Up</h1>
            <form id="signupForm">
                <input type="text" id="signupUsername" placeholder="Username" required><br><br>
                <input type="password" id="signupPassword" placeholder="Password" required><br><br>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    `;

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('signupUsername').value;
        displayWelcomePage(username);
    });
}

function displayLoginForm() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="text" id="loginUsername" placeholder="Username" required><br><br>
                <input type="password" id="loginPassword" placeholder="Password" required><br><br>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('loginUsername').value;
        displayWelcomePage(username);
    });
}

function displayWelcomePage(username) {
    document.body.innerHTML = `
        <div class="container">
            <h1>Welcome, ${username}!</h1>
            <button class="btn" onclick="goBack()">Go Back</button>
        </div>
    `;
}
function goBack() {
    location.reload();
}

const themeSelector = document.querySelector()// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function setTheme() {
    const themeValue= document.querySelector('select').value;
    console.log('Theme' + themeValue);
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    if (themeValue == 'Dark'){
        document.body.classList.add("Dark");
        document.querySelector("img").setAttribute("src", "./byui-logo_white.png");
    }
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
    else {
        document.body.classList.remove("Dark");
        document.querySelector("img").setAttribute("src", "./byui-logo_blue.webp");
    }
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
document.querySelector('select').addEventListener('change', changeTheme);
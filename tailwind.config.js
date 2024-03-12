/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require("@catppuccin/tailwindcss")({
        // prefix:"",
        defaultFlavour: "mocha"
    })],
}


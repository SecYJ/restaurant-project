/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#96262c",
                "accent": "#216149",
                "danger": "#600b0f",
                // "": "",
                // maybe use later
                // "x": "#9f8419"
            },
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    plugins: [],
};

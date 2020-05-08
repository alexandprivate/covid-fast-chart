module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            serif: ["Roboto", "sans-serif"],
            mono: ["Roboto", "sans-serif"],
        },
        extend: {
            colors: {
                "covid-purple": "#D495A0",
                "covid-teal": "#166C7B",
                "covid-brown": "#71504B",
                "covid-red": "#BD334C",
            },
        },
    },
    variants: {},
    plugins: [],
};

// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MyThin: ["MyThin"],
        MyThinItalic: ["MyThinItalic"],
        MyRegular: ["MyRegular"],
        MyRegularItalic : ["MyRegularItalic"]
      
      },
      fontWeight: {
        // Define custom font weights
        thin: 400,   // For MyThin font
        contactRegular: 700, // For normal font weight
        customRegular: 600, // Custom font weight for MyRegular
      },
      colors: {
        first: "#291C3A",
        second : "#331C52",
        third : "#8121D0",
        firstBg : "#DCCFED",
        secondBg : "#E1EBED",
        mainText : "#FFFFFF"

      
      },
    },
  },
  plugins: [],
};

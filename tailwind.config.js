/** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          'horizontal-spin': 'horizontal-spin 2s linear infinite',
        },
      },
    },
    plugins: [],
  }
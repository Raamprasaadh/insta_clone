/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        header_border:"#dbdbdb",
        header_search_bg:"#F2F3F5",
        header_text:"#8E8E8E",
        suggest_link:"#0095f6",
        suggest_pf_uname:"#262626",
        footer_text:"#C7C7C7"
      }
    },
  },
  plugins: [],
}

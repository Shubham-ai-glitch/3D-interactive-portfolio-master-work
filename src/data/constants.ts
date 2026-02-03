const config = {
  title: "Shubham Singh | Frontend Developer",
  description: {
    long: "Explore the portfolio of Shubham Singh, a Frontend Developer from Kanpur and an 11th-grade student currently preparing for the NEET exam.",
    short: "Frontend Developer and NEET aspirant from Kanpur, building creative web solutions.",
  },
  author: "Shubham Singh",
  email: "shubhamsingh9415191609@gmail.com",
  site: "https://shubham-dev-tech.netlify.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    // Sirf wahi rakhein jo aapko chahiye
    instagram: "https://www.instagram.com/Shubham.zenith_/",
    github: "https://github.com/Shubham-ai-glitch",
    telegram: "https://t.me/Shubhams872", 
  },
};
export { config };

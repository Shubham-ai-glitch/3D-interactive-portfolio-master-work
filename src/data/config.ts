const config = {
  title: "Shubham Singh | Senior Frontend Developer & Cybersecurity Expert",
  description: {
    long: "I am a highly motivated 11th-grade student and NEET aspirant at Aakash Institute, Kanpur. A passionate Frontend Developer and Cybersecurity Enthusiast focused on building secure, user-centric web applications and bridging the gap between Healthcare and Technology.",
    short:
      "Frontend Developer & NEET Aspirant from Kanpur, specializing in secure web solutions and AI automation.",
  },
  keywords: [
    "Shubham Singh",
    "Shubham Singh Kanpur",
    "Shubhams872-spec",
    "Frontend Developer Kanpur",
    "NEET Aspirant Coder",
    "Cybersecurity Enthusiast",
    "Ethical Hacking Portfolio",
    "shubham-dev-tech.netlify.app",
    "React Developer",
    "Python Automation",
  ],
  author: "Shubham Singh",
  email: "shubhamsingh9415191609@gmail.com",
  site: "https://shubham-dev-tech.netlify.app",

  get ogImg() {
    return this.site + "/assets/shubham-singh-kanpur-frontend-developer.jpg";
  },
  social: {
    // Sirf Telegram aur GitHub rakha hai, Instagram hata diya gaya hai
    telegram: "https://t.me/Shubhams872",
    github: "https://github.com/Shubhams872-spec",
  },
};
export { config };

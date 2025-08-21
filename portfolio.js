// Do you want me to make a reusable project-card template where you just 
// add project details (title, description, link) in JS and it automatically 
// generates all project cards? That way you don’t have to manually write HTML for each project.
// Get the Projects nav link and section

document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("homeLink");
  const educationLink = document.getElementById("educationLink");
  const skillLink = document.getElementById("skillLink");
  const projectsLink = document.getElementById("projectsLink");
  const contactLink = document.getElementById("contactLink");

  const homeSection = document.getElementById("home");
  const educationSection = document.getElementById("education");
  const skillSection = document.getElementById("skill");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");

  function hideAllSections() {
    homeSection.style.display = "none";
    educationSection.style.display = "none";
    skillSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  }

  // Show Home by default
  hideAllSections();
  homeSection.style.display = "block";

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    homeSection.style.display = "block";
    homeSection.scrollIntoView({behavior:"smooth"});
  });

  educationLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    educationSection.style.display = "block";
    educationSection.scrollIntoView({behavior:"smooth"});
  });

  skillLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    skillSection.style.display = "block";
    skillSection.scrollIntoView({behavior:"smooth"});
  });

  projectsLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    projectsSection.style.display = "block";
    projectsSection.scrollIntoView({behavior:"smooth"});
  });

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    contactSection.style.display = "block";
    contactSection.scrollIntoView({behavior:"smooth"});
  });

  // --- Optional: Reusable Project Cards ---
  const projectsData = [
    {title:"Project 1", desc:"This is project 1 description.", link:"#"},
    {title:"Project 2", desc:"This is project 2 description.", link:"#"},
    {title:"Project 3", desc:"This is project 3 description.", link:"#"}
  ];

  const projectsContainer = document.getElementById("projectsContainer");

  projectsData.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h3>${proj.title}</h3><p>${proj.desc}</p><a href="${proj.link}" target="_blank">View Project</a>`;
    projectsContainer.appendChild(card);
  });
});



// ==================================================================
// Project
// Inside DOMContentLoaded function
const projectsData = [
  {title:"Portfolio Website", desc:"My personal portfolio using HTML, CSS & JS.", link:"#"},
  {title:"Calculator App", desc:"A simple calculator built with JavaScript.", link:"#"},
  {title:"Todo List", desc:"Task management app using HTML, CSS & JS.", link:"#"},
  {title:"Weather App", desc:"Shows weather info using API & JS.", link:"#"},
  {title:"Blog Page", desc:"Responsive blog template built with HTML & CSS.", link:"#"}
];

const projectsContainer = document.getElementById("projectsContainer");

projectsData.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.desc}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  projectsContainer.appendChild(card);
});

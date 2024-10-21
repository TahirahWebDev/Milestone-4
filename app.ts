const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeHeader = document.getElementById('resumeHeader') as HTMLElement;
const educationSection = document.getElementById('educationSection') as HTMLElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const experienceSection = document.getElementById('experienceSection') as HTMLElement;

const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;
const profilePic = document.getElementById('profilePic') as HTMLImageElement;
const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;

    // Populate resume with form values
    displayName.textContent = name;
    displayEmail.textContent = `${email} | ${phone}`;
    displayEducation.textContent = education;

    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });

    displayExperience.innerHTML = `<h3>${experience}</h3><p>${description}</p>`;

    // Handle profile picture upload
    if (profilePicInput.files && profilePicInput.files.length > 0) {  // Check if a file is selected
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                profilePic.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    }

    // Hide form and show resume sections
    form.style.display = 'none';
    resumeHeader.style.display = 'flex';
    educationSection.style.display = 'block';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'block';
});

// Handle contenteditable changes
document.querySelectorAll('[contenteditable="true"]').forEach((editableElement) => {
    const element = editableElement as HTMLElement;  // Cast to HTMLElement
    element.addEventListener('input', () => {
        console.log('Content edited:', element.innerText);  // Use innerText now without error
    });
});

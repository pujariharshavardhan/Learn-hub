// Default user data
const defaultUserData = {
    image: "",
    name: "John Doe",
    rollNumber: "STU12345",
    mobile: "98",
    dob: "2000-01-01",
    place: "Hyderabad",
    pincode: "500001",
    skills: ["HTML", "Python", "Java"],
    hobbies: ["Reading", "Gaming", "Traveling"]
};

// Load data from localStorage or use default
let userData = JSON.parse(localStorage.getItem('userProfile')) || defaultUserData;

// DOM elements
const userImage = document.getElementById('user-image');
const imageInput = document.getElementById('image-input');
const imageUpload = document.querySelector('.image-upload');
const removeImageBtn = document.getElementById('remove-image-btn');
const nameInput = document.getElementById('name');
const rollInput = document.getElementById('roll-number');
const mobileInput = document.getElementById('mobile');
const dobInput = document.getElementById('dob');
const placeInput = document.getElementById('place');
const pincodeInput = document.getElementById('pincode');
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const infoSection = document.getElementById('personal-info');
const skillsSection = document.getElementById('skills');
const hobbiesSection = document.getElementById('hobbies');
const infoBtn = document.getElementById('info-btn');
const skillsBtn = document.getElementById('skills-btn');
const hobbiesBtn = document.getElementById('hobbies-btn');
const skillsList = document.getElementById('skills-list');
const hobbiesList = document.getElementById('hobbies-list');

// Initialize profile
function initProfile() {
    userImage.src = userData.image || "https://via.placeholder.com/100";
    nameInput.value = userData.name;
    rollInput.value = userData.rollNumber;
    mobileInput.value = userData.mobile;
    dobInput.value = userData.dob;
    placeInput.value = userData.place;
    pincodeInput.value = userData.pincode;
    skillsList.innerHTML = userData.skills.map(skill => `<li>${skill}</li>`).join('');
    hobbiesList.innerHTML = userData.hobbies.map(hobby => `<li>${hobby}</li>`).join('');
    if (userData.image) {
        imageUpload.classList.remove('hidden');
        removeImageBtn.classList.remove('hidden');
    }
    showSection('personal-info');
}

// Show selected section
function showSection(sectionId) {
    infoSection.classList.add('hidden');
    skillsSection.classList.add('hidden');
    hobbiesSection.classList.add('hidden');
    infoBtn.classList.remove('active');
    skillsBtn.classList.remove('active');
    hobbiesBtn.classList.remove('active');

    if (sectionId === 'personal-info') {
        infoSection.classList.remove('hidden');
        infoBtn.classList.add('active');
    } else if (sectionId === 'skills') {
        skillsSection.classList.remove('hidden');
        skillsBtn.classList.add('active');
    } else if (sectionId === 'hobbies') {
        hobbiesSection.classList.remove('hidden');
        hobbiesBtn.classList.add('active');
    }
}

// Dashboard button handlers
infoBtn.addEventListener('click', () => showSection('personal-info'));
skillsBtn.addEventListener('click', () => showSection('skills'));
hobbiesBtn.addEventListener('click', () => showSection('hobbies'));

// Image upload
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            userImage.src = reader.result;
            userData.image = reader.result;
            removeImageBtn.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// Remove image
removeImageBtn.addEventListener('click', () => {
    userImage.src = "https://via.placeholder.com/100";
    userData.image = "";
    imageUpload.classList.add('hidden');
    removeImageBtn.classList.add('hidden');
    saveBtn.disabled = false; // Ensure save can be triggered to persist removal
});

// Edit button
editBtn.addEventListener('click', () => {
    nameInput.disabled = false;
    rollInput.disabled = false;
    mobileInput.disabled = false;
    dobInput.disabled = false;
    placeInput.disabled = false;
    pincodeInput.disabled = false;
    imageInput.disabled = false;
    imageUpload.classList.remove('hidden');
    if (userData.image) removeImageBtn.classList.remove('hidden');
    saveBtn.disabled = false;
    editBtn.disabled = true;
});

// Save button
saveBtn.addEventListener('click', () => {
    userData.name = nameInput.value.trim();
    userData.rollNumber = rollInput.value.trim();
    userData.mobile = mobileInput.value.trim();
    userData.dob = dobInput.value;
    userData.place = placeInput.value.trim();
    userData.pincode = pincodeInput.value.trim();
    localStorage.setItem('userProfile', JSON.stringify(userData));

    nameInput.disabled = true;
    rollInput.disabled = true;
    mobileInput.disabled = true;
    dobInput.disabled = true;
    placeInput.disabled = true;
    pincodeInput.disabled = true;
    imageInput.disabled = true;
    imageUpload.classList.add('hidden');
    removeImageBtn.classList.add('hidden');
    saveBtn.disabled = true;
    editBtn.disabled = false;
});

// Initialize
initProfile();
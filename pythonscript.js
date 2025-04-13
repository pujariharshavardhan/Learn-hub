// Content data structure
const contentData = {
    home: {
        subItems: [
            { id: 'intro', title: 'Python Introduction', icon: 'fa-book', content: 'Python is a high-level, versatile programming language known for its readability and simplicity.' },
            { id: 'setup', title: 'Python Setup', icon: 'fa-cogs', content: 'Learn how to install Python and set up a development environment.' },
            { id: 'syntax', title: 'Python Syntax', icon: 'fa-code', content: 'Understand the basic syntax and structure of Python code.' },
            { id: 'variables', title: 'Variables', icon: 'fa-cube', content: 'Explore how to create and use variables in Python.' },
            { id: 'datatypes', title: 'Data Types', icon: 'fa-tag', content: 'Learn about Python’s built-in data types like integers, strings, and more.' },
            { id: 'operators', title: 'Operators', icon: 'fa-calculator', content: 'Use arithmetic, comparison, and logical operators in Python.' },
            { id: 'controlflow', title: 'Control Flow', icon: 'fa-random', content: 'Master if statements, loops, and other control structures.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    services: {
        subItems: [
            { id: 'functions', title: 'Defining Functions', icon: 'fa-function', content: 'Create reusable code blocks with Python functions.' },
            { id: 'arguments', title: 'Function Arguments', icon: 'fa-cubes', content: 'Learn about positional, keyword, and default arguments.' },
            { id: 'lambda', title: 'Lambda Functions', icon: 'fa-code', content: 'Write concise anonymous functions using lambda.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    products: {
        subItems: [
            { id: 'lists', title: 'Lists', icon: 'fa-list', content: 'Work with Python’s versatile list data structure.' },
            { id: 'dictionaries', title: 'Dictionaries', icon: 'fa-map', content: 'Store key-value pairs using dictionaries.' },
            { id: 'sets', title: 'Sets', icon: 'fa-filter', content: 'Use sets for unique, unordered collections.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    about: {
        subItems: [
            { id: 'modules', title: 'Modules', icon: 'fa-box', content: 'Organize code using Python modules.' },
            { id: 'packages', title: 'Packages', icon: 'fa-boxes', content: 'Learn how to create and use Python packages.' },
            { id: 'pip', title: 'Pip', icon: 'fa-tools', content: 'Manage Python libraries with pip.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    contact: {
        subItems: [
            { id: 'comprehensions', title: 'Comprehensions', icon: 'fa-compress', content: 'Write concise loops with list, dict, and set comprehensions.' },
            { id: 'decorators', title: 'Decorators', icon: 'fa-magic', content: 'Enhance functions with Python decorators.' },
            { id: 'generators', title: 'Generators', icon: 'fa-bolt', content: 'Create iterators using generators for efficient looping.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    }
};

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
let currentIndex = 0;

// Initialize default section
document.addEventListener('DOMContentLoaded', () => {
    activateSection('home');
});

// Handle nav item clicks
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        activateSection(section);
        currentIndex = 0;
    });
});

// Activate a section (populate sidebar and set default content)
function activateSection(section) {
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[data-section="${section}"]`).classList.add('active');

    sidebar.innerHTML = '';
    const subItems = contentData[section].subItems;
    subItems.forEach((subItem, index) => {
        const link = document.createElement('a');
        link.href = subItem.isTutorial ? 'tutorials.html' : '#';
        link.className = subItem.isTutorial ? 'tutorial-btn' : '';
        link.innerHTML = `<i class="fas ${subItem.icon}"></i> ${subItem.title}`;
        link.dataset.id = subItem.id;
        link.addEventListener('click', (e) => {
            if (!subItem.isTutorial) {
                e.preventDefault();
                updateMainContent(section, subItem.id);
                currentIndex = index;
            }
        });
        sidebar.appendChild(link);
    });

    if (subItems[0].isTutorial) {
        updateMainContent(section, subItems[0].id);
    } else {
        updateMainContent(section, subItems[0].id);
    }
}

// Update main content based on sub-item click
function updateMainContent(section, id) {
    const subItems = contentData[section].subItems;
    const item = subItems.find(sub => sub.id === id);

    sidebar.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    sidebar.querySelector(`a[data-id="${id}"]`).classList.add('active');

    mainContent.innerHTML = `
        <div class="content-wrapper">
            <h2>${item.title}</h2>
            <p>${item.content}</p>
        </div>
        <div class="nav-buttons">
            <button class="next-btn" onclick="nextContent()">Next ></button>
        </div>
    `;
}

// Function to navigate to next content
function nextContent() {
    const section = document.querySelector('.nav-item.active').dataset.section;
    const subItems = contentData[section].subItems;
    do {
        currentIndex = (currentIndex + 1) % subItems.length;
    } while (subItems[currentIndex].isTutorial);
    const nextItem = subItems[currentIndex];
    updateMainContent(section, nextItem.id);
}
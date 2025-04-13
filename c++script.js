// Content data structure
const contentData = {
    home: {
        subItems: [
            { id: 'intro', title: 'C++ Introduction', icon: 'fa-book', content: 'C++ is a powerful, high-performance programming language used for system and application development.' },
            { id: 'setup', title: 'C++ Setup', icon: 'fa-cogs', content: 'Learn how to install a C++ compiler like g++ and set up a development environment.' },
            { id: 'syntax', title: 'C++ Syntax', icon: 'fa-code', content: 'Understand the basic syntax and structure of a C++ program.' },
            { id: 'variables', title: 'Variables', icon: 'fa-cube', content: 'Explore how to declare and use variables in C++.' },
            { id: 'datatypes', title: 'Data Types', icon: 'fa-tag', content: 'Learn about C++ basic and derived data types.' },
            { id: 'operators', title: 'Operators', icon: 'fa-calculator', content: 'Use arithmetic, relational, and logical operators in C++.' },
            { id: 'controlflow', title: 'Control Flow', icon: 'fa-random', content: 'Master if-else, switch, and loops in C++.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    services: {
        subItems: [
            { id: 'classes', title: 'Classes & Objects', icon: 'fa-cubes', content: 'Learn the basics of object-oriented programming with classes and objects.' },
            { id: 'inheritance', title: 'Inheritance', icon: 'fa-sitemap', content: 'Create class hierarchies using inheritance.' },
            { id: 'polymorphism', title: 'Polymorphism', icon: 'fa-shapes', content: 'Implement polymorphism with virtual functions.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    products: {
        subItems: [
            { id: 'vectors', title: 'Vectors', icon: 'fa-list', content: 'Use dynamic arrays with the STL vector container.' },
            { id: 'maps', title: 'Maps', icon: 'fa-map', content: 'Store key-value pairs with STL maps.' },
            { id: 'iterators', title: 'Iterators', icon: 'fa-arrow-alt-circle-right', content: 'Navigate containers using STL iterators.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    about: {
        subItems: [
            { id: 'pointers', title: 'Pointers', icon: 'fa-arrow-alt-circle-right', content: 'Understand pointers and memory addresses in C++.' },
            { id: 'references', title: 'References', icon: 'fa-link', content: 'Learn how to use references as aliases for variables.' },
            { id: 'smartpointers', title: 'Smart Pointers', icon: 'fa-memory', content: 'Manage memory with unique_ptr and shared_ptr.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    contact: {
        subItems: [
            { id: 'templates', title: 'Templates', icon: 'fa-code', content: 'Write generic code using C++ templates.' },
            { id: 'exceptions', title: 'Exception Handling', icon: 'fa-exclamation-circle', content: 'Handle errors with try-catch blocks.' },
            { id: 'multithreading', title: 'Multithreading', icon: 'fa-tasks', content: 'Create concurrent programs using C++ threads.' },
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
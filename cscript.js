// Content data structure
const contentData = {
    home: {
        subItems: [
            { id: 'intro', title: 'C Introduction', icon: 'fa-book', content: 'C is a powerful, general-purpose programming language used for system programming and applications.' },
            { id: 'setup', title: 'C Setup', icon: 'fa-cogs', content: 'Learn how to install a C compiler like GCC and set up a development environment.' },
            { id: 'syntax', title: 'C Syntax', icon: 'fa-code', content: 'Understand the basic syntax and structure of a C program.' },
            { id: 'variables', title: 'Variables', icon: 'fa-cube', content: 'Explore how to declare and use variables in C.' },
            { id: 'datatypes', title: 'Data Types', icon: 'fa-tag', content: 'Learn about C’s basic data types like int, float, and char.' },
            { id: 'operators', title: 'Operators', icon: 'fa-calculator', content: 'Use arithmetic, relational, and logical operators in C.' },
            { id: 'controlflow', title: 'Control Flow', icon: 'fa-random', content: 'Master if-else, switch, and loop constructs in C.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    services: {
        subItems: [
            { id: 'functions', title: 'Defining Functions', icon: 'fa-function', content: 'Create reusable code blocks with C functions.' },
            { id: 'parameters', title: 'Function Parameters', icon: 'fa-cubes', content: 'Learn how to pass arguments to functions.' },
            { id: 'recursion', title: 'Recursion', icon: 'fa-redo', content: 'Understand how functions can call themselves.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    products: {
        subItems: [
            { id: 'pointers', title: 'Pointers Basics', icon: 'fa-arrow-alt-circle-right', content: 'Learn how pointers store memory addresses in C.' },
            { id: 'pointerarith', title: 'Pointer Arithmetic', icon: 'fa-calculator', content: 'Perform arithmetic operations with pointers.' },
            { id: 'pointerarrays', title: 'Pointers and Arrays', icon: 'fa-list', content: 'Explore the relationship between pointers and arrays.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    about: {
        subItems: [
            { id: 'arrays', title: 'Arrays', icon: 'fa-list', content: 'Store multiple values in arrays.' },
            { id: 'structs', title: 'Structures', icon: 'fa-cubes', content: 'Group related data using C structures.' },
            { id: 'linkedlists', title: 'Linked Lists', icon: 'fa-link', content: 'Build dynamic data structures with linked lists.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    contact: {
        subItems: [
            { id: 'fileio', title: 'File I/O', icon: 'fa-file', content: 'Read from and write to files in C.' },
            { id: 'memory', title: 'Dynamic Memory', icon: 'fa-memory', content: 'Manage memory with malloc, calloc, and free.' },
            { id: 'preprocessor', title: 'Preprocessor', icon: 'fa-tools', content: 'Use directives like #define and #include.' },
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
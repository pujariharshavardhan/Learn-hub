// Content data structure
const contentData = {
    home: {
        subItems: [
            { id: 'intro', title: 'Java Introduction', icon: 'fa-book', content: 'Java is a versatile, platform-independent programming language used for building robust applications.' },
            { id: 'setup', title: 'Java Setup', icon: 'fa-cogs', content: 'Learn how to install and configure the Java Development Kit (JDK) and an IDE.' },
            { id: 'syntax', title: 'Java Syntax', icon: 'fa-code', content: 'Understand the basic syntax and structure of a Java program.' },
            { id: 'variables', title: 'Variables', icon: 'fa-cube', content: 'Explore how to declare and use variables in Java.' },
            { id: 'datatypes', title: 'Data Types', icon: 'fa-tag', content: 'Learn about primitive and non-primitive data types in Java.' },
            { id: 'operators', title: 'Operators', icon: 'fa-calculator', content: 'Use arithmetic, logical, and relational operators in Java.' },
            { id: 'controlflow', title: 'Control Flow', icon: 'fa-random', content: 'Master if-else statements, loops, and switch cases.' },
            { id: 'methods', title: 'Methods', icon: 'fa-function', content: 'Define and call methods to organize your Java code.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    services: {
        subItems: [
            { id: 'classes', title: 'Classes & Objects', icon: 'fa-cubes', content: 'Understand the foundation of object-oriented programming with classes and objects.' },
            { id: 'inheritance', title: 'Inheritance', icon: 'fa-sitemap', content: 'Learn how to create hierarchical relationships between classes.' },
            { id: 'polymorphism', title: 'Polymorphism', icon: 'fa-shapes', content: 'Explore method overriding and overloading in Java.' },
            { id: 'encapsulation', title: 'Encapsulation', icon: 'fa-lock', content: 'Protect data using access modifiers and getters/setters.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    products: {
        subItems: [
            { id: 'lists', title: 'Lists', icon: 'fa-list', content: 'Work with ArrayList and LinkedList in the Java Collections Framework.' },
            { id: 'sets', title: 'Sets', icon: 'fa-filter', content: 'Use HashSet and TreeSet for unique elements.' },
            { id: 'maps', title: 'Maps', icon: 'fa-map', content: 'Store key-value pairs with HashMap and TreeMap.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    about: {
        subItems: [
            { id: 'trycatch', title: 'Try-Catch', icon: 'fa-shield-alt', content: 'Handle exceptions using try-catch blocks.' },
            { id: 'throw', title: 'Throw & Throws', icon: 'fa-exclamation-circle', content: 'Learn to throw exceptions and declare them in methods.' },
            { id: 'custom', title: 'Custom Exceptions', icon: 'fa-tools', content: 'Create your own exception classes for specific use cases.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    contact: {
        subItems: [
            { id: 'threads', title: 'Multithreading', icon: 'fa-tasks', content: 'Build concurrent programs using Java threads.' },
            { id: 'streams', title: 'Java Streams', icon: 'fa-stream', content: 'Process collections efficiently with the Streams API.' },
            { id: 'lambda', title: 'Lambda Expressions', icon: 'fa-code', content: 'Write concise code using functional programming features.' },
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
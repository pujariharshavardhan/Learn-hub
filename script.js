// Content data structure
const contentData = {
    home: {
        subItems: [
            { id: 'intro', title: 'HTML Introduction', icon: 'fa-book', content: 'HTML is the standard markup language for creating Web pages.<h2>What is HTML?</h2><ul><li>HTML stands for Hyper Text Markup Language</li><li>HTML is the standard markup language for creating Web pages</li><li>HTML describes the structure of a Web page</li><li>HTML consists of a series of elements</li><li>HTML elements tell the browser how to display the content</li><li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li></ul><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            { id: 'editors', title: 'HTML Syntax', icon: 'fa-edit', content: 'Learn about the structure and syntax of HTML.<h2>HTML Syntax Explained</h2><ul><li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document</li><li>The <code>&lt;html&gt;</code> element is the root element of an HTML page</li><li>The <code>&lt;head&gt;</code> element contains meta information about the HTML page</li><li>The <code>&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser\'s title bar or in the page\'s tab)</li><li>The <code>&lt;body&gt;</code> element defines the document\'s body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li><li>The <code>&lt;h1&gt;</code> element defines a large heading</li><li>The <code>&lt;p&gt;</code> element defines a paragraph</li></ul>' },
            { id: 'basic', title: 'HTML Basic', icon: 'fa-code', content: '<h2>The <!DOCTYPE> Declaration</h2><p>The <code><!DOCTYPE></code> declaration represents the document type, and helps browsers to display web pages correctly.</p><p>It must only appear once, at the top of the page (before any HTML tags).</p><p>The <code><!DOCTYPE></code> declaration is not case sensitive.</p><p>The <code><!DOCTYPE></code> declaration for HTML5 is:</p><div class="example-block"><pre style="color: black;"><!DOCTYPE html></pre></div><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            {
                id: 'elements',
                title: 'HTML Elements',
                icon: 'fa-cube',
                content: '<h2>HTML Headings</h2><p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p><p><code>&lt;h1&gt;</code> defines the most important heading, while <code>&lt;h6&gt;</code> defines the least important heading.</p><div class="example-block"><h3>Example</h3><pre>&lt;h1&gt;Heading 1&lt;/h1&gt;\n&lt;h2&gt;Heading 2&lt;/h2&gt;\n&lt;h3&gt;Heading 3&lt;/h3&gt;\n&lt;h4&gt;Heading 4&lt;/h4&gt;\n&lt;h5&gt;Heading 5&lt;/h5&gt;\n&lt;h6&gt;Heading 6&lt;/h6&gt;</pre><button onclick="window.location.href=\'compiler1.html\'">Try it Yourself</button></div>'
              },
            { id: 'attributes', title: 'HTML Attributes', icon: 'fa-tag', content: 'Learn how to add extra information to elements.' },
            { id: 'headings', title: 'HTML Headings', icon: 'fa-heading', content: 'Use headings to structure your content.' },
            { id: 'paragraphs', title: 'HTML Paragraphs', icon: 'fa-paragraph', content: 'Add paragraphs to your HTML pages.' },
            { id: 'styles', title: 'HTML Styles', icon: 'fa-paint-brush', content: 'Apply styles using HTML attributes.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    services: {
        subItems: [
            { id: 'consulting', title: 'Types of CSS', icon: 'fa-users', content: 'HTML is the standard markup language for creating Web pages.<h2>What is HTML?</h2><ul><li>HTML stands for Hyper Text Markup Language</li><li>HTML is the standard markup language for creating Web pages</li><li>HTML describes the structure of a Web page</li><li>HTML consists of a series of elements</li><li>HTML elements tell the browser how to display the content</li><li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li></ul><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            { id: 'training', title: 'Internal CSS', icon: 'fa-chalkboard', content: 'Professional training programs.' },
            { id: 'training', title: 'Inline CSS', icon: 'fa-chalkboard', content: 'Professional training programs.' },
            { id: 'training', title: 'External CSS', icon: 'fa-chalkboard', content: 'Professional training programs.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    products: {
        subItems: [
            { id: 'software', title: 'JS Introduction', icon: 'fa-laptop', content: 'HTML is the standard markup language for creating Web pages.<h2>What is HTML?</h2><ul><li>HTML stands for Hyper Text Markup Language</li><li>HTML is the standard markup language for creating Web pages</li><li>HTML describes the structure of a Web page</li><li>HTML consists of a series of elements</li><li>HTML elements tell the browser how to display the content</li><li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li></ul><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            { id: 'gadgets', title: 'JS Syntax', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'gadgets', title: 'JS variables', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'gadgets', title: 'JS operaters', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    about: {
        subItems: [
            { id: 'team', title: 'PHP Introduction', icon: 'fa-users', content: 'HTML is the standard markup language for creating Web pages.<h2>What is HTML?</h2><ul><li>HTML stands for Hyper Text Markup Language</li><li>HTML is the standard markup language for creating Web pages</li><li>HTML describes the structure of a Web page</li><li>HTML consists of a series of elements</li><li>HTML elements tell the browser how to display the content</li><li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li></ul><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            { id: 'story', title: 'PHP Syntax', icon: 'fa-book-open', content: 'Learn about our journey.' },
            { id: 'gadgets', title: 'PHP variables', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'gadgets', title: 'PHP Data types', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'tutorials', title: 'Tutorials', icon: 'fa-graduation-cap', isTutorial: true, content: '' }
        ]
    },
    contact: {
        subItems: [
            { id: 'email', title: 'MYSQL Introduction', icon: 'fa-envelope', content: 'HTML is the standard markup language for creating Web pages.<h2>What is HTML?</h2><ul><li>HTML stands for Hyper Text Markup Language</li><li>HTML is the standard markup language for creating Web pages</li><li>HTML describes the structure of a Web page</li><li>HTML consists of a series of elements</li><li>HTML elements tell the browser how to display the content</li><li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li></ul><div class="example-block"><h3>A Simple HTML Document</h3><p>Example</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;My First Heading&lt;/h1&gt;\n    &lt;p&gt;My first paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><button onclick="window.location.href=\'compiler.html\'">Try it Yourself</button></div>' },
            { id: 'phone', title: 'MYSQL SELECT', icon: 'fa-phone', content: 'Call us at +1-800-555-1234.' },
            { id: 'gadgets', title: 'MYSQL WHERE', icon: 'fa-mobile', content: 'Innovative gadgets.' },
            { id: 'gadgets', title: 'MYSQL DELETE', icon: 'fa-mobile', content: 'Innovative gadgets.' },
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
            ${item.content}
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


// YouTube links for tutorials by section (retained but unused for navigation)
const tutorialLinks = {
    home: 'https://www.youtube.com/watch?v=qz0aGYrrlhU', // HTML tutorial
    services: 'https://www.youtube.com/watch?v=yfoY53QXEnI', // CSS tutorial
    products: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', // JavaScript tutorial
    about: 'https://www.youtube.com/watch?v=1PnVor36_40', // PHP tutorial
    contact: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&pp=ygUcbXlzcWwgdHV0b3JpYWwgZm9yIGJlZ2lubmVycw%3D%3D' // MySQL tutorial
};
// Activate a section (populate sidebar and set default content)
function activateSection(section) {
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[data-section="${section}"]`).classList.add('active');

    sidebar.innerHTML = '';
    const subItems = contentData[section].subItems;
    subItems.forEach((subItem, index) => {
        const link = document.createElement('a');
        // All tutorial items navigate to tutorials.html
        link.href = subItem.isTutorial ? 'tutorial.html' : '#';
        link.className = subItem.isTutorial ? 'tutorial-btn' : '';
        link.innerHTML = `<i class="fas ${subItem.icon}"></i> ${subItem.title}`;
        link.dataset.id = subItem.id;
        link.addEventListener('click', (e) => {
            if (!subItem.isTutorial) {
                e.preventDefault();
                updateMainContent(section, subItem.id);
                currentIndex = index;
            }
            // Tutorial links navigate to tutorials.html via href
        });
        sidebar.appendChild(link);
    });

    // Set default content to first non-tutorial item
    const firstNonTutorial = subItems.find(item => !item.isTutorial);
    if (firstNonTutorial) {
        updateMainContent(section, firstNonTutorial.id);
    }
}

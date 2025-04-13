let isEditing = false;

function loadExample() {
    const select = document.getElementById('language-select');
    const editor = document.getElementById('code-editor');
    const savedCode = sessionStorage.getItem('exampleCode');
    const savedLanguage = sessionStorage.getItem('exampleLanguage') || 'html';

    // Set the select value based on saved language
    select.value = savedLanguage;

    if (savedCode) {
        editor.value = savedCode;
    } else if (select.value === 'html') {
        editor.value = `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`;
    } else if (select.value === 'css') {
        editor.value = `body {
    background-color: lightblue;
}
h1 {
    color: navy;
    margin-left: 20px;
}`;
    } else if (select.value === 'javascript') {
        editor.value = `console.log("Hello, World!");
alert("This is a JavaScript example");`;
    }
}

function toggleEdit() {
    const editBtn = document.getElementById('edit-btn');
    const editor = document.getElementById('code-editor');

    isEditing = !isEditing;
    editBtn.textContent = isEditing ? 'Done' : 'Edit';
    editBtn.classList.toggle('editing', isEditing);
    editor.readOnly = !isEditing;

    if (!isEditing) {
        runCode(); // Run code when exiting edit mode
    }
}

function runCode() {
    const editor = document.getElementById('code-editor');
    const output = document.getElementById('output');
    try {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        output.innerHTML = '';
        output.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(editor.value);
        doc.close();
    } catch (e) {
        output.innerHTML = `<p style="color: red;">Error: ${e.message}</p>`;
    }
}

// Load default example and run it on page load
window.onload = function() {
    loadExample();
    runCode(); // Run the default code on load
};

// Clear session storage when leaving the page
window.onunload = function() {
    sessionStorage.removeItem('exampleCode');
    sessionStorage.removeItem('exampleLanguage');
};
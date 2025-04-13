// Assignment Management
document.getElementById('assignmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('assignmentTitle').value;
    const desc = document.getElementById('assignmentDesc').value;
    
    const item = document.createElement('div');
    item.className = 'display-item bg-gray-50 p-4 rounded-md flex justify-between items-center';
    item.innerHTML = `
        <div>
            <h3 class="text-lg font-medium">${title}</h3>
            <p class="text-gray-600">${desc}</p>
        </div>
        <button class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 remove-assignment">Remove</button>
    `;
    
    // Append to the bottom of the assignment display div
    const assignmentDisplay = document.getElementById('assignmentDisplay');
    assignmentDisplay.appendChild(item);
    
    this.reset();
    
    // Add remove functionality
    item.querySelector('.remove-assignment').addEventListener('click', () => {
        item.remove();
    });
});

// File Management
document.getElementById('fileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const item = document.createElement('div');
        item.className = 'display-item bg-gray-50 p-4 rounded-md flex justify-between items-center';
        item.innerHTML = `
            <div>
                <p class="text-lg font-medium">${file.name}</p>
                <p class="text-gray-600">${(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <button class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 remove-file">Remove</button>
        `;
        
        // Append to the bottom of the file display div
        const fileDisplay = document.getElementById('fileDisplay');
        fileDisplay.appendChild(item);
        
        this.reset();
        
        // Add remove functionality
        item.querySelector('.remove-file').addEventListener('click', () => {
            item.remove();
        });
    }
});
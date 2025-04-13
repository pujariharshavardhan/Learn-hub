// Default user data
const defaultUserData = {
    password: "",
    linkedAccounts: { google: false, facebook: false },
    notifications: { email: false, sms: false, push: false },
    termsAccepted: false,
    privacyAccepted: false,
    supportRequests: [],
    accountDeleted: false
};

// Load data from localStorage or use default
let userData = JSON.parse(localStorage.getItem('userSettings')) || defaultUserData;

// DOM elements
const sections = {
    'change-password': document.getElementById('change-password'),
    'linked-accounts': document.getElementById('linked-accounts'),
    'notification': document.getElementById('notification'),
    'terms': document.getElementById('terms'),
    'privacy': document.getElementById('privacy'),
    'support': document.getElementById('support'),
    'delete': document.getElementById('delete')
};
const buttons = {
    'change-password': document.getElementById('change-password-btn'),
    'linked-accounts': document.getElementById('linked-accounts-btn'),
    'notification': document.getElementById('notification-btn'),
    'terms': document.getElementById('terms-btn'),
    'privacy': document.getElementById('privacy-btn'),
    'support': document.getElementById('support-btn'),
    'delete': document.getElementById('delete-btn')
};

// Initialize settings
function initSettings() {
    showSection('change-password');
    document.getElementById('old-password').value = userData.password || '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('email-notif').checked = userData.notifications.email;
    document.getElementById('sms-notif').checked = userData.notifications.sms;
    document.getElementById('push-notif').checked = userData.notifications.push;
    document.getElementById('terms-check').checked = userData.termsAccepted;
}

// Show selected section
function showSection(sectionId) {
    Object.values(sections).forEach(section => section.classList.add('hidden'));
    Object.values(buttons).forEach(btn => btn.classList.remove('active'));
    sections[sectionId].classList.remove('hidden');
    buttons[sectionId].classList.add('active');
}

// Sidebar button handlers
buttons['change-password'].addEventListener('click', () => showSection('change-password'));
buttons['linked-accounts'].addEventListener('click', () => showSection('linked-accounts'));
buttons['notification'].addEventListener('click', () => showSection('notification'));
buttons['terms'].addEventListener('click', () => showSection('terms'));
buttons['privacy'].addEventListener('click', () => showSection('privacy'));
buttons['support'].addEventListener('click', () => showSection('support'));
buttons['delete'].addEventListener('click', () => showSection('delete'));

// Change Password
document.getElementById('save-password-btn').addEventListener('click', () => {
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (oldPassword === userData.password && newPassword === confirmPassword && newPassword.length >= 6) {
        userData.password = newPassword;
        localStorage.setItem('userSettings', JSON.stringify(userData));
        alert('Password changed successfully!');
    } else {
        alert('Password change failed! Ensure old password matches and new passwords match.');
    }
    document.getElementById('old-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
});

// Linked Accounts
document.getElementById('link-google-btn').addEventListener('click', () => {
    userData.linkedAccounts.google = true;
    alert('Google linked successfully! Save to confirm.');
});
document.getElementById('link-facebook-btn').addEventListener('click', () => {
    userData.linkedAccounts.facebook = true;
    alert('Facebook linked successfully! Save to confirm.');
});
document.getElementById('save-linked-btn').addEventListener('click', () => {
    localStorage.setItem('userSettings', JSON.stringify(userData));
    alert('Linked accounts saved!');
});
document.getElementById('cancel-linked-btn').addEventListener('click', () => {
    userData.linkedAccounts = { google: false, facebook: false };
    showSection('linked-accounts');
});

// Notification Preferences
document.getElementById('save-notif-btn').addEventListener('click', () => {
    userData.notifications.email = document.getElementById('email-notif').checked;
    userData.notifications.sms = document.getElementById('sms-notif').checked;
    userData.notifications.push = document.getElementById('push-notif').checked;
    localStorage.setItem('userSettings', JSON.stringify(userData));
    alert('Notification preferences saved!');
});

// Terms and Conditions
document.getElementById('confirm-terms-btn').addEventListener('click', () => {
    if (document.getElementById('terms-check').checked) {
        userData.termsAccepted = true;
        localStorage.setItem('userSettings', JSON.stringify(userData));
        alert('Terms and Conditions accepted!');
    } else {
        alert('Please agree to the Terms and Conditions!');
    }
});

// Privacy Policy
document.getElementById('accept-privacy-btn').addEventListener('click', () => {
    userData.privacyAccepted = true;
    localStorage.setItem('userSettings', JSON.stringify(userData));
    alert('Privacy Policy accepted!');
});

// Contact Support/Feedback
document.getElementById('send-support-btn').addEventListener('click', () => {
    const email = document.getElementById('support-email').value;
    const note = document.getElementById('support-note').value;
    if (email && note) {
        userData.supportRequests.push({ email, note, date: new Date().toISOString() });
        localStorage.setItem('userSettings', JSON.stringify(userData));
        alert('Feedback sent successfully!');
        document.getElementById('support-email').value = '';
        document.getElementById('support-note').value = '';
    } else {
        alert('Please fill in all fields!');
    }
});
document.getElementById('cancel-support-btn').addEventListener('click', () => {
    document.getElementById('support-email').value = '';
    document.getElementById('support-note').value = '';
    showSection('support');
});

// Delete Account
document.getElementById('delete-account-btn').addEventListener('click', () => {
    document.getElementById('delete-confirmation').classList.remove('hidden');
});
document.getElementById('yes-delete-btn').addEventListener('click', () => {
    userData.accountDeleted = true;
    localStorage.setItem('userSettings', JSON.stringify(userData));
    alert('Account deleted successfully!');
    window.location.href = 'index.html'; // Redirect to homepage or login
});
document.getElementById('no-delete-btn').addEventListener('click', () => {
    document.getElementById('delete-confirmation').classList.add('hidden');
});
document.getElementById('cancel-delete-btn').addEventListener('click', () => {
    showSection('delete');
});

// Enable edit on click
Object.values(sections).forEach(section => {
    const inputs = section.querySelectorAll('input, textarea');
    inputs.forEach(input => input.disabled = false);
});

// Initialize
initSettings();
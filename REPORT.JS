// Multiple student data
const studentsData = [
    {
        info: {
            name: "John Doe",
            id: "STU12345",
            email: "john.doe@learnhub.com",
            courses: ["Web Development", "Data Science", "Java Programming"],
            enrollmentDate: "2025-01-15"
        },
        courses: [
            {
                title: "Web Development",
                instructor: "Dr. Alice Smith",
                duration: "12 weeks",
                progress: 85,
                startDate: "2025-01-15",
                endDate: "2025-04-07"
            },
            {
                title: "Data Science",
                instructor: "Prof. Bob Johnson",
                duration: "10 weeks",
                progress: 60,
                startDate: "2025-02-01",
                endDate: "2025-04-12"
            },
            {
                title: "Java Programming",
                instructor: "Ms. Clara Lee",
                duration: "8 weeks",
                progress: 90,
                startDate: "2025-01-20",
                endDate: "2025-03-17"
            }
        ],
        assessments: [
            {
                name: "Web Dev Quiz 1",
                date: "2025-02-10",
                score: 18,
                maxScore: 20,
                status: "Pass",
                timeSpent: "45 min"
            },
            {
                name: "Data Science Assignment",
                date: "2025-03-05",
                score: 85,
                maxScore: 100,
                status: "Pass",
                timeSpent: "2 hr"
            },
            {
                name: "Java Project",
                date: "2025-03-15",
                score: 90,
                maxScore: 100,
                status: "Pass",
                timeSpent: "5 hr"
            }
        ],
        activity: {
            modulesCompleted: 25,
            videosWatched: 40,
            resourcesAccessed: 15,
            timeSpent: {
                modules: 1200,
                videos: 600,
                resources: 300
            },
            discussions: 10
        },
        skills: [
            { topic: "HTML/CSS", mastery: 90 },
            { topic: "Python", mastery: 65 },
            { topic: "Java", mastery: 85 }
        ],
        attendance: {
            loginCount: 50,
            lastLogin: "2025-04-11",
            inactivityDays: 2,
            loginHistory: [
                { date: "2025-04-01", count: 3 },
                { date: "2025-04-05", count: 5 },
                { date: "2025-04-11", count: 2 }
            ]
        },
        certificates: [
            { name: "Web Development Basics", date: "2025-03-01" },
            { name: "Java Fundamentals", date: "2025-03-15" }
        ],
        achievements: {
            badges: ["Quick Learner", "Code Master"],
            leaderboardRank: 12
        }
    },
    {
        info: {
            name: "Jane Smith",
            id: "STU67890",
            email: "jane.smith@learnhub.com",
            courses: ["AI Basics", "Python Programming", "Cloud Computing"],
            enrollmentDate: "2025-01-10"
        },
        courses: [
            {
                title: "AI Basics",
                instructor: "Dr. Emma Brown",
                duration: "10 weeks",
                progress: 70,
                startDate: "2025-01-10",
                endDate: "2025-03-20"
            },
            {
                title: "Python Programming",
                instructor: "Mr. David Wilson",
                duration: "8 weeks",
                progress: 95,
                startDate: "2025-01-15",
                endDate: "2025-03-10"
            }
        ],
        assessments: [
            {
                name: "AI Quiz",
                date: "2025-02-15",
                score: 80,
                maxScore: 100,
                status: "Pass",
                timeSpent: "1 hr"
            },
            {
                name: "Python Coding Test",
                date: "2025-03-01",
                score: 92,
                maxScore: 100,
                status: "Pass",
                timeSpent: "3 hr"
            }
        ],
        activity: {
            modulesCompleted: 15,
            videosWatched: 30,
            resourcesAccessed: 10,
            timeSpent: {
                modules: 900,
                videos: 450,
                resources: 150
            },
            discussions: 5
        },
        skills: [
            { topic: "Python", mastery: 90 },
            { topic: "Machine Learning", mastery: 60 }
        ],
        attendance: {
            loginCount: 40,
            lastLogin: "2025-04-10",
            inactivityDays: 1,
            loginHistory: [
                { date: "2025-04-02", count: 4 },
                { date: "2025-04-06", count: 3 },
                { date: "2025-04-10", count: 2 }
            ]
        },
        certificates: [
            { name: "Python Basics", date: "2025-03-10" }
        ],
        achievements: {
            badges: ["Python Pro"],
            leaderboardRank: 25
        }
    },
    {
        info: {
            name: "Alex Brown",
            id: "STU11223",
            email: "alex.brown@learnhub.com",
            courses: ["Cybersecurity", "Database Systems"],
            enrollmentDate: "2025-02-01"
        },
        courses: [
            {
                title: "Cybersecurity",
                instructor: "Prof. Lisa Green",
                duration: "12 weeks",
                progress: 80,
                startDate: "2025-02-01",
                endDate: "2025-04-25"
            }
        ],
        assessments: [
            {
                name: "Security Lab",
                date: "2025-03-20",
                score: 88,
                maxScore: 100,
                status: "Pass",
                timeSpent: "4 hr"
            }
        ],
        activity: {
            modulesCompleted: 10,
            videosWatched: 20,
            resourcesAccessed: 5,
            timeSpent: {
                modules: 600,
                videos: 300,
                resources: 100
            },
            discussions: 3
        },
        skills: [
            { topic: "Networking", mastery: 75 },
            { topic: "SQL", mastery: 70 }
        ],
        attendance: {
            loginCount: 30,
            lastLogin: "2025-04-09",
            inactivityDays: 3,
            loginHistory: [
                { date: "2025-04-03", count: 2 },
                { date: "2025-04-07", count: 1 }
            ]
        },
        certificates: [],
        achievements: {
            badges: ["Security Starter"],
            leaderboardRank: 50
        }
    },
    {
        info: {
            name: "Jacky",
            id: "STU67671",
            email: "jacky@learnhub.com",
            courses: ["AI Basics", "Python Programming", "Cloud Computing"],
            enrollmentDate: "2025-01-10"
        },
        courses: [
            {
                title: "AI Basics",
                instructor: "Dr. Emma Brown",
                duration: "10 weeks",
                progress: 70,
                startDate: "2025-01-10",
                endDate: "2025-03-20"
            },
            {
                title: "Python Programming",
                instructor: "Mr. David Wilson",
                duration: "8 weeks",
                progress: 95,
                startDate: "2025-01-15",
                endDate: "2025-03-10"
            }
        ],
        assessments: [
            {
                name: "AI Quiz",
                date: "2025-02-15",
                score: 80,
                maxScore: 100,
                status: "Pass",
                timeSpent: "1 hr"
            },
            {
                name: "Python Coding Test",
                date: "2025-03-01",
                score: 92,
                maxScore: 100,
                status: "Pass",
                timeSpent: "3 hr"
            }
        ],
        activity: {
            modulesCompleted: 15,
            videosWatched: 30,
            resourcesAccessed: 10,
            timeSpent: {
                modules: 900,
                videos: 450,
                resources: 150
            },
            discussions: 5
        },
        skills: [
            { topic: "Python", mastery: 90 },
            { topic: "Machine Learning", mastery: 60 }
        ],
        attendance: {
            loginCount: 40,
            lastLogin: "2025-04-10",
            inactivityDays: 1,
            loginHistory: [
                { date: "2025-04-02", count: 4 },
                { date: "2025-04-06", count: 3 },
                { date: "2025-04-10", count: 2 }
            ]
        },
        certificates: [
            { name: "Python Basics", date: "2025-03-10" }
        ],
        achievements: {
            badges: ["Python Pro"],
            leaderboardRank: 25
        }
    }
];

// Chart instances for cleanup
let progressChart, scoresChart, activityChart, loginChart;

// Populate student dropdown
function populateStudentDropdown() {
    const select = document.getElementById('student-select');
    select.innerHTML = studentsData.map((student, index) => 
        `<option value="${index}">${student.info.name}</option>`
    ).join('');
    select.addEventListener('change', () => renderStudentReport(select.value));
}

// Render report for a student
function renderStudentReport(studentIndex) {
    const studentData = studentsData[studentIndex];

    // Destroy existing charts to prevent canvas conflicts
    if (progressChart) progressChart.destroy();
    if (scoresChart) scoresChart.destroy();
    if (activityChart) activityChart.destroy();
    if (loginChart) loginChart.destroy();

    // Student Information
    const studentDetails = document.getElementById('student-details');
    studentDetails.innerHTML = `
        <p><strong>Name:</strong> ${studentData.info.name}</p>
        <p><strong>Student ID:</strong> ${studentData.info.id}</p>
        <p><strong>Email:</strong> ${studentData.info.email}</p>
        <p><strong>Courses Enrolled:</strong> ${studentData.info.courses.join(', ')}</p>
        <p><strong>Date of Enrollment:</strong> ${studentData.info.enrollmentDate}</p>
    `;

    // Course Details
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = studentData.courses.map(course => `
        <div>
            <h3>${course.title}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Progress:</strong> ${course.progress}%</p>
            <p><strong>Start Date:</strong> ${course.startDate}</p>
            <p><strong>End Date:</strong> ${course.endDate}</p>
        </div>
    `).join('');

    // Course Progress Chart
    progressChart = new Chart(document.getElementById('progress-chart'), {
        type: 'bar',
        data: {
            labels: studentData.courses.map(c => c.title),
            datasets: [{
                label: 'Progress (%)',
                data: studentData.courses.map(c => c.progress),
                backgroundColor: '#a78bfa',
                borderColor: '#2b6cb0',
                borderWidth: 1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { display: false } }
        }
    });

    // Assessment Results
    const assessmentList = document.getElementById('assessment-list');
    assessmentList.innerHTML = studentData.assessments.map(assess => {
        const percentage = ((assess.score / assess.maxScore) * 100).toFixed(1);
        return `
            <li>
                <strong>${assess.name}</strong> (${assess.date})<br>
                Score: ${assess.score}/${assess.maxScore} (${percentage}%)<br>
                Status: ${assess.status}<br>
                Time Spent: ${assess.timeSpent}
            </li>
        `;
    }).join('');

    // Assessment Scores Chart
    scoresChart = new Chart(document.getElementById('scores-chart'), {
        type: 'line',
        data: {
            labels: studentData.assessments.map(a => a.name),
            datasets: [{
                label: 'Score (%)',
                data: studentData.assessments.map(a => (a.score / a.maxScore) * 100),
                borderColor: '#2b6cb0',
                backgroundColor: 'rgba(167, 139, 250, 0.2)',
                fill: true
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { display: false } }
        }
    });

    // Learning Activity
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = `
        <p><strong>Modules Completed:</strong> ${studentData.activity.modulesCompleted}</p>
        <p><strong>Videos Watched:</strong> ${studentData.activity.videosWatched}</p>
        <p><strong>Resources Accessed:</strong> ${studentData.activity.resourcesAccessed}</p>
        <p><strong>Total Time Spent:</strong> ${Math.round((studentData.activity.timeSpent.modules + studentData.activity.timeSpent.videos + studentData.activity.timeSpent.resources) / 60)} hr</p>
        <p><strong>Discussions:</strong> ${studentData.activity.discussions}</p>
    `;

    // Learning Activity Chart
    activityChart = new Chart(document.getElementById('activity-chart'), {
        type: 'pie',
        data: {
            labels: ['Modules', 'Videos', 'Resources'],
            datasets: [{
                data: [
                    studentData.activity.timeSpent.modules,
                    studentData.activity.timeSpent.videos,
                    studentData.activity.timeSpent.resources
                ],
                backgroundColor: ['#a78bfa', '#f6e05e', '#2b6cb0']
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } }
        }
    });

    // Skill Mastery
    const skillList = document.getElementById('skill-list');
    skillList.innerHTML = studentData.skills.map(skill => `
        <p><strong>${skill.topic}:</strong> ${skill.mastery}%</p>
        <div class="progress-bar">
            <div style="width: ${skill.mastery}%; background: #a78bfa;"></div>
        </div>
    `).join('');

    // Attendance
    const attendanceDetails = document.getElementById('attendance-details');
    attendanceDetails.innerHTML = `
        <p><strong>Login Count:</strong> ${studentData.attendance.loginCount}</p>
        <p><strong>Last Login:</strong> ${studentData.attendance.lastLogin}</p>
        <p><strong>Inactivity Days:</strong> ${studentData.attendance.inactivityDays}</p>
    `;

    // Login Activity Chart
    loginChart = new Chart(document.getElementById('login-chart'), {
        type: 'bar',
        data: {
            labels: studentData.attendance.loginHistory.map(h => h.date),
            datasets: [{
                label: 'Logins',
                data: studentData.attendance.loginHistory.map(h => h.count),
                backgroundColor: '#2b6cb0'
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { display: false } }
        }
    });

    // Certificates & Achievements
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = `
        <p><strong>Certificates:</strong> ${studentData.certificates.length ? studentData.certificates.map(c => `${c.name} (${c.date})`).join(', ') : 'None'}</p>
        <p><strong>Badges:</strong> ${studentData.achievements.badges.join(', ') || 'None'}</p>
        <p><strong>Leaderboard Rank:</strong> ${studentData.achievements.leaderboardRank}</p>
    `;
}

// Initialize dashboard
populateStudentDropdown();
renderStudentReport(0); // Default to first student
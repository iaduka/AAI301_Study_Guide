// Individual lesson page functionality

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('lesson.html')) {
        initializeLessonPage();
    }
});

function initializeLessonPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = parseInt(urlParams.get('id'));

    if (!lessonId || !window.lessonsData) {
        // If lessonsData is not available, load it
        loadLessonData(lessonId);
        return;
    }

    loadLesson(lessonId);
}

function loadLessonData(lessonId) {
    // In a real application, this would fetch from an API
    // For now, we'll use the same data from lessons.js
    const lessonsData = [
        {
            id: 1,
            title: "Introduction to Machine Learning",
            category: "artificial-intelligence",
            categoryName: "Artificial Intelligence",
            date: "2025-12-01",
            duration: "45 minutes",
            description: "Explore the fundamentals of machine learning algorithms and their applications in modern technology. Learn about supervised, unsupervised, and reinforcement learning.",
            content: `
                <h2>Introduction to Machine Learning</h2>
                <p>Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed for every task. This revolutionary field has transformed how we approach problem-solving in technology.</p>
                
                <h3>What is Machine Learning?</h3>
                <p>Machine Learning is the science of getting computers to act without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves.</p>
                
                <h3>Types of Machine Learning</h3>
                <ul>
                    <li><strong>Supervised Learning:</strong> Learning with labeled examples</li>
                    <li><strong>Unsupervised Learning:</strong> Finding patterns in data without labels</li>
                    <li><strong>Reinforcement Learning:</strong> Learning through interaction and feedback</li>
                </ul>
                
                <h3>Key Algorithms</h3>
                <p>Some fundamental machine learning algorithms include:</p>
                <ul>
                    <li>Linear Regression</li>
                    <li>Decision Trees</li>
                    <li>Random Forest</li>
                    <li>Support Vector Machines</li>
                    <li>Neural Networks</li>
                </ul>
                
                <blockquote>
                    "Machine learning is not just about algorithms; it's about understanding data and making informed predictions that can drive real-world decisions."
                </blockquote>
                
                <h3>Applications in Real World</h3>
                <p>Machine learning is used in various industries:</p>
                <ul>
                    <li>Healthcare: Disease diagnosis and drug discovery</li>
                    <li>Finance: Fraud detection and algorithmic trading</li>
                    <li>Transportation: Autonomous vehicles</li>
                    <li>Technology: Recommendation systems and search engines</li>
                </ul>
                
                <h3>Getting Started</h3>
                <p>To begin your journey in machine learning:</p>
                <ol>
                    <li>Learn Python programming</li>
                    <li>Understand statistics and linear algebra</li>
                    <li>Practice with datasets</li>
                    <li>Experiment with ML libraries like scikit-learn</li>
                </ol>
            `,
            thumbnail: "robot"
        },
        {
            id: 2,
            title: "Data Visualization Techniques",
            category: "data-science",
            categoryName: "Data Science",
            date: "2025-11-28",
            duration: "50 minutes",
            description: "Learn effective methods for presenting data through charts, graphs, and interactive visualizations to communicate insights clearly.",
            content: `
                <h2>Data Visualization Techniques</h2>
                <p>Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.</p>
                
                <h3>Why Data Visualization Matters</h3>
                <p>In today's data-driven world, the ability to effectively communicate insights through visualization is crucial. Good visualizations can:</p>
                <ul>
                    <li>Make complex data more understandable</li>
                    <li>Reveal hidden patterns and relationships</li>
                    <li>Support decision-making processes</li>
                    <li>Tell compelling data stories</li>
                </ul>
                
                <h3>Types of Visualizations</h3>
                <h4>1. Comparison Charts</h4>
                <ul>
                    <li>Bar charts for comparing categories</li>
                    <li>Line charts for trends over time</li>
                    <li>Scatter plots for correlations</li>
                </ul>
                
                <h4>2. Composition Charts</h4>
                <ul>
                    <li>Pie charts for parts of a whole</li>
                    <li>Stacked bar charts</li>
                    <li>Area charts</li>
                </ul>
                
                <h4>3. Distribution Charts</h4>
                <ul>
                    <li>Histograms for frequency distribution</li>
                    <li>Box plots for statistical distribution</li>
                    <li>Violin plots for probability density</li>
                </ul>
                
                <h3>Best Practices</h3>
                <blockquote>
                    "The greatest value of a picture is when it forces us to notice what we never expected to see." - John Tukey
                </blockquote>
                
                <ol>
                    <li><strong>Choose the right chart type:</strong> Match your visualization to your data and message</li>
                    <li><strong>Keep it simple:</strong> Avoid clutter and unnecessary elements</li>
                    <li><strong>Use color effectively:</strong> Colors should enhance, not distract</li>
                    <li><strong>Label clearly:</strong> Include titles, axis labels, and legends</li>
                    <li><strong>Consider your audience:</strong> Tailor complexity to viewer expertise</li>
                </ol>
                
                <h3>Tools and Technologies</h3>
                <p>Popular tools for creating data visualizations:</p>
                <ul>
                    <li><strong>Python:</strong> Matplotlib, Seaborn, Plotly</li>
                    <li><strong>R:</strong> ggplot2, plotly, shiny</li>
                    <li><strong>JavaScript:</strong> D3.js, Chart.js, Highcharts</li>
                    <li><strong>Business Intelligence:</strong> Tableau, Power BI, Qlik</li>
                </ul>
                
                <h3>Interactive Visualizations</h3>
                <p>Modern data visualization goes beyond static charts. Interactive elements allow users to:</p>
                <ul>
                    <li>Filter and drill down into data</li>
                    <li>Explore different perspectives</li>
                    <li>Customize views for their needs</li>
                    <li>Discover insights through exploration</li>
                </ul>
            `,
            thumbnail: "database"
        },
        {
            id: 3,
            title: "Network Protocols and Architecture",
            category: "computer-science",
            categoryName: "Computer Science",
            date: "2025-11-25",
            duration: "60 minutes",
            description: "Understanding how computer networks operate and the protocols that enable communication between devices across the internet.",
            content: `
                <h2>Network Protocols and Architecture</h2>
                <p>Computer networks are the backbone of modern communication and data exchange. Understanding network protocols and architecture is essential for anyone working in technology today.</p>
                
                <h3>What are Network Protocols?</h3>
                <p>Network protocols are standardized rules and procedures that govern how data is transmitted and received across computer networks. They ensure that different devices can communicate effectively regardless of their underlying hardware or software.</p>
                
                <h3>The OSI Model</h3>
                <p>The Open Systems Interconnection (OSI) model provides a framework for understanding network communication through seven layers:</p>
                <ol>
                    <li><strong>Physical Layer:</strong> Hardware transmission of raw data</li>
                    <li><strong>Data Link Layer:</strong> Node-to-node data transfer</li>
                    <li><strong>Network Layer:</strong> Routing and logical addressing</li>
                    <li><strong>Transport Layer:</strong> Reliable data transfer</li>
                    <li><strong>Session Layer:</strong> Managing connections</li>
                    <li><strong>Presentation Layer:</strong> Data formatting and encryption</li>
                    <li><strong>Application Layer:</strong> Network services to applications</li>
                </ol>
                
                <h3>Key Network Protocols</h3>
                
                <h4>TCP/IP Suite</h4>
                <ul>
                    <li><strong>Internet Protocol (IP):</strong> Addressing and routing</li>
                    <li><strong>Transmission Control Protocol (TCP):</strong> Reliable, ordered data delivery</li>
                    <li><strong>User Datagram Protocol (UDP):</strong> Fast, connectionless communication</li>
                </ul>
                
                <h4>Application Layer Protocols</h4>
                <ul>
                    <li><strong>HTTP/HTTPS:</strong> Web communication</li>
                    <li><strong>FTP:</strong> File transfer</li>
                    <li><strong>SMTP:</strong> Email transmission</li>
                    <li><strong>DNS:</strong> Domain name resolution</li>
                </ul>
                
                <blockquote>
                    "The internet is not a single network but a network of networks, each governed by protocols that enable seamless communication."
                </blockquote>
                
                <h3>Network Architectures</h3>
                
                <h4>1. Client-Server Architecture</h4>
                <p>Centralized model where clients request services from dedicated servers.</p>
                <ul>
                    <li>Clear separation of roles</li>
                    <li>Centralized resource management</li>
                    <li>Scalable and secure</li>
                </ul>
                
                <h4>2. Peer-to-Peer (P2P) Architecture</h4>
                <p>Distributed model where each node can act as both client and server.</p>
                <ul>
                    <li>Decentralized resource sharing</li>
                    <li>High fault tolerance</li>
                    <li>Reduced server costs</li>
                </ul>
                
                <h4>3. Hybrid Architecture</h4>
                <p>Combines elements of both client-server and P2P models.</p>
                
                <h3>Network Security</h3>
                <p>Security is crucial in network design:</p>
                <ul>
                    <li><strong>Firewalls:</strong> Control network traffic</li>
                    <li><strong>VPNs:</strong> Secure remote connections</li>
                    <li><strong>Encryption:</strong> Protect data in transit</li>
                    <li><strong>Authentication:</strong> Verify user identity</li>
                </ul>
                
                <h3>Modern Network Trends</h3>
                <ul>
                    <li><strong>Cloud Computing:</strong> Distributed computing resources</li>
                    <li><strong>Software-Defined Networking (SDN):</strong> Programmable networks</li>
                    <li><strong>Internet of Things (IoT):</strong> Connected devices everywhere</li>
                    <li><strong>5G Networks:</strong> Ultra-fast mobile communication</li>
                </ul>
                
                <h3>Practical Applications</h3>
                <p>Understanding networks helps in:</p>
                <ol>
                    <li>Troubleshooting connectivity issues</li>
                    <li>Designing scalable systems</li>
                    <li>Implementing security measures</li>
                    <li>Optimizing performance</li>
                </ol>
            `,
            thumbnail: "network-wired"
        }
    ];

    window.lessonsData = lessonsData;
    loadLesson(lessonId);
}

function loadLesson(lessonId) {
    const lesson = window.lessonsData ? window.lessonsData.find(l => l.id === lessonId) : null;
    
    if (!lesson) {
        showLessonNotFound();
        return;
    }

    // Update page elements
    updateBreadcrumb(lesson);
    updateLessonHeader(lesson);
    updateLessonContent(lesson);
    updateLessonNavigation(lessonId);
    updatePageTitle(lesson);
}

function updateBreadcrumb(lesson) {
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = lesson.title;
    }
}

function updateLessonHeader(lesson) {
    const lessonCategory = document.getElementById('lessonCategory');
    const lessonDate = document.getElementById('lessonDate');
    const lessonDuration = document.getElementById('lessonDuration');
    const lessonTitle = document.getElementById('lessonTitle');

    if (lessonCategory) lessonCategory.textContent = lesson.categoryName;
    if (lessonDate) lessonDate.textContent = EduPortal.formatDate(lesson.date);
    if (lessonDuration) lessonDuration.textContent = lesson.duration;
    if (lessonTitle) lessonTitle.textContent = lesson.title;
}

function updateLessonContent(lesson) {
    const lessonContent = document.getElementById('lessonContent');
    if (lessonContent) {
        // Add fade in effect
        lessonContent.style.opacity = '0';
        
        setTimeout(() => {
            lessonContent.innerHTML = lesson.content;
            lessonContent.style.transition = 'opacity 0.3s ease-in-out';
            lessonContent.style.opacity = '1';
        }, 100);
    }
}

function updateLessonNavigation(currentId) {
    const lessons = window.lessonsData || [];
    const currentIndex = lessons.findIndex(l => l.id === currentId);
    
    const prevLesson = document.getElementById('prevLesson');
    const nextLesson = document.getElementById('nextLesson');
    const prevTitle = document.getElementById('prevTitle');
    const nextTitle = document.getElementById('nextTitle');

    // Previous lesson
    if (currentIndex > 0) {
        const prev = lessons[currentIndex - 1];
        if (prevLesson && prevTitle) {
            prevLesson.href = `lesson.html?id=${prev.id}`;
            prevLesson.style.display = 'flex';
            prevTitle.textContent = prev.title;
        }
    } else if (prevLesson) {
        prevLesson.style.display = 'none';
    }

    // Next lesson
    if (currentIndex < lessons.length - 1) {
        const next = lessons[currentIndex + 1];
        if (nextLesson && nextTitle) {
            nextLesson.href = `lesson.html?id=${next.id}`;
            nextLesson.style.display = 'flex';
            nextTitle.textContent = next.title;
        }
    } else if (nextLesson) {
        nextLesson.style.display = 'none';
    }
}

function updatePageTitle(lesson) {
    document.title = `${lesson.title} - AAI301 SUSS`;
}

function showLessonNotFound() {
    const lessonTitle = document.getElementById('lessonTitle');
    const lessonContent = document.getElementById('lessonContent');

    if (lessonTitle) {
        lessonTitle.textContent = 'Lesson Not Found';
    }

    if (lessonContent) {
        lessonContent.innerHTML = `
            <div class="error-state" style="text-align: center; padding: 3rem; color: #e53e3e;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; color: #feb2b2;"></i>
                <h2>Lesson Not Found</h2>
                <p>Sorry, the requested lesson could not be found.</p>
                <a href="lessons.html" class="btn btn-primary" style="margin-top: 1rem;">
                    <i class="fas fa-arrow-left"></i>
                    Back to All Lessons
                </a>
            </div>
        `;
    }

    // Update page title
    document.title = 'Lesson Not Found - AAI301 SUSS';
}

// Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const lessonId = parseInt(urlParams.get('id'));
            const lesson = window.lessonsData ? window.lessonsData.find(l => l.id === lessonId) : null;
            
            if (lesson) {
                generatePDF(lesson);
            }
        });
    }
});

function generatePDF(lesson) {
    // Create a simple text version for download
    // In a real application, you might use a library like jsPDF
    const content = `
${lesson.title}
Category: ${lesson.categoryName}
Date: ${EduPortal.formatDate(lesson.date)}
Duration: ${lesson.duration}

${lesson.description}

---

${lesson.content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${EduPortal.createSlug(lesson.title)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
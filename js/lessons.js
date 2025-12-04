// Sample lesson data
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
    },
    {
        id: 4,
        title: "Database Design Fundamentals",
        category: "computer-science",
        categoryName: "Computer Science",
        date: "2025-11-22",
        duration: "55 minutes",
        description: "Learn the principles of effective database design, normalization, and relationship modeling for efficient data storage and retrieval.",
        content: `
            <h2>Database Design Fundamentals</h2>
            <p>Database design is the process of creating a detailed data model that meets the requirements of a particular application or system. Good database design is crucial for data integrity, performance, and maintainability.</p>
            
            <h3>What is Database Design?</h3>
            <p>Database design involves determining how data should be stored, organized, and accessed within a database management system (DBMS). It encompasses both the logical structure of data and the physical implementation.</p>
            
            <h3>Key Concepts</h3>
            
            <h4>1. Entities and Attributes</h4>
            <ul>
                <li><strong>Entity:</strong> A real-world object or concept (e.g., Student, Course)</li>
                <li><strong>Attribute:</strong> A property of an entity (e.g., name, age, email)</li>
                <li><strong>Primary Key:</strong> Unique identifier for each entity instance</li>
            </ul>
            
            <h4>2. Relationships</h4>
            <ul>
                <li><strong>One-to-One (1:1):</strong> Each record in one table relates to one record in another</li>
                <li><strong>One-to-Many (1:N):</strong> One record relates to multiple records</li>
                <li><strong>Many-to-Many (M:N):</strong> Multiple records relate to multiple records</li>
            </ul>
            
            <h3>Database Normalization</h3>
            <p>Normalization is the process of organizing data to minimize redundancy and improve data integrity.</p>
            
            <h4>Normal Forms</h4>
            <ol>
                <li><strong>First Normal Form (1NF):</strong> Eliminate repeating groups</li>
                <li><strong>Second Normal Form (2NF):</strong> Eliminate partial dependencies</li>
                <li><strong>Third Normal Form (3NF):</strong> Eliminate transitive dependencies</li>
            </ol>
            
            <blockquote>
                "A well-designed database is like a well-organized library - everything has its place and can be found efficiently."
            </blockquote>
            
            <h3>Design Process</h3>
            
            <h4>1. Requirements Analysis</h4>
            <ul>
                <li>Identify what data needs to be stored</li>
                <li>Understand how data will be used</li>
                <li>Define business rules and constraints</li>
            </ul>
            
            <h4>2. Conceptual Design</h4>
            <ul>
                <li>Create Entity-Relationship (ER) diagrams</li>
                <li>Identify entities, attributes, and relationships</li>
                <li>Define cardinalities and constraints</li>
            </ul>
            
            <h4>3. Logical Design</h4>
            <ul>
                <li>Convert ER model to relational schema</li>
                <li>Apply normalization rules</li>
                <li>Define data types and constraints</li>
            </ul>
            
            <h4>4. Physical Design</h4>
            <ul>
                <li>Create indexes for performance</li>
                <li>Optimize storage structures</li>
                <li>Consider partitioning strategies</li>
            </ul>
            
            <h3>Best Practices</h3>
            
            <ol>
                <li><strong>Use meaningful names:</strong> Table and column names should be descriptive</li>
                <li><strong>Choose appropriate data types:</strong> Use the most suitable type for each field</li>
                <li><strong>Define constraints:</strong> Enforce data integrity at the database level</li>
                <li><strong>Plan for scalability:</strong> Consider future growth and performance needs</li>
                <li><strong>Document your design:</strong> Maintain clear documentation for future reference</li>
            </ol>
            
            <h3>Common Pitfalls</h3>
            <ul>
                <li>Over-normalization leading to complex queries</li>
                <li>Under-normalization causing data redundancy</li>
                <li>Poor indexing strategy affecting performance</li>
                <li>Inadequate constraint definition</li>
                <li>Ignoring future requirements</li>
            </ul>
            
            <h3>Database Types</h3>
            
            <h4>Relational Databases</h4>
            <p>Traditional SQL databases with ACID properties:</p>
            <ul>
                <li>MySQL, PostgreSQL, Oracle</li>
                <li>Strong consistency and reliability</li>
                <li>Complex query capabilities</li>
            </ul>
            
            <h4>NoSQL Databases</h4>
            <p>Non-relational databases for specific use cases:</p>
            <ul>
                <li><strong>Document:</strong> MongoDB, CouchDB</li>
                <li><strong>Key-Value:</strong> Redis, DynamoDB</li>
                <li><strong>Column-Family:</strong> Cassandra, HBase</li>
                <li><strong>Graph:</strong> Neo4j, Amazon Neptune</li>
            </ul>
            
            <h3>Tools and Technologies</h3>
            <ul>
                <li><strong>Design Tools:</strong> MySQL Workbench, Lucidchart, Draw.io</li>
                <li><strong>DBMS Options:</strong> PostgreSQL, MySQL, SQL Server, Oracle</li>
                <li><strong>ORM Tools:</strong> Hibernate, Django ORM, ActiveRecord</li>
            </ul>
        `,
        thumbnail: "database"
    },
    {
        id: 5,
        title: "Introduction to Algorithms",
        category: "computer-science",
        categoryName: "Computer Science",
        date: "2025-11-20",
        duration: "65 minutes",
        description: "Explore fundamental algorithms and data structures that form the foundation of efficient programming and problem-solving.",
        content: `
            <h2>Introduction to Algorithms</h2>
            <p>Algorithms are step-by-step procedures for solving problems and performing tasks. They are fundamental to computer science and essential for writing efficient programs.</p>
            
            <h3>What is an Algorithm?</h3>
            <p>An algorithm is a finite sequence of well-defined instructions for solving a problem or performing a computation. Good algorithms are:</p>
            <ul>
                <li><strong>Correct:</strong> Produces the expected output for all valid inputs</li>
                <li><strong>Efficient:</strong> Uses minimal time and space resources</li>
                <li><strong>Clear:</strong> Easy to understand and implement</li>
                <li><strong>Finite:</strong> Terminates after a finite number of steps</li>
            </ul>
            
            <h3>Algorithm Analysis</h3>
            <p>We analyze algorithms to understand their efficiency and scalability.</p>
            
            <h4>Time Complexity</h4>
            <p>Measures how execution time increases with input size:</p>
            <ul>
                <li><strong>O(1):</strong> Constant time</li>
                <li><strong>O(log n):</strong> Logarithmic time</li>
                <li><strong>O(n):</strong> Linear time</li>
                <li><strong>O(n log n):</strong> Linearithmic time</li>
                <li><strong>O(n²):</strong> Quadratic time</li>
                <li><strong>O(2^n):</strong> Exponential time</li>
            </ul>
            
            <h4>Space Complexity</h4>
            <p>Measures how memory usage increases with input size.</p>
            
            <blockquote>
                "The choice of algorithm can make the difference between a program that runs in seconds versus one that takes hours or days."
            </blockquote>
            
            <h3>Fundamental Data Structures</h3>
            
            <h4>Arrays</h4>
            <ul>
                <li>Fixed-size sequential collection</li>
                <li>O(1) random access</li>
                <li>Good for mathematical operations</li>
            </ul>
            
            <h4>Linked Lists</h4>
            <ul>
                <li>Dynamic size with nodes and pointers</li>
                <li>O(1) insertion/deletion at head</li>
                <li>O(n) search time</li>
            </ul>
            
            <h4>Stacks and Queues</h4>
            <ul>
                <li><strong>Stack:</strong> LIFO (Last In, First Out)</li>
                <li><strong>Queue:</strong> FIFO (First In, First Out)</li>
                <li>Both support O(1) insertion and deletion</li>
            </ul>
            
            <h4>Trees</h4>
            <ul>
                <li>Hierarchical structure with nodes</li>
                <li>Binary trees, BSTs, heaps</li>
                <li>Efficient for searching and sorting</li>
            </ul>
            
            <h4>Hash Tables</h4>
            <ul>
                <li>Key-value pairs with hash function</li>
                <li>Average O(1) insertion, deletion, search</li>
                <li>Handle collisions effectively</li>
            </ul>
            
            <h3>Sorting Algorithms</h3>
            
            <h4>Bubble Sort</h4>
            <ul>
                <li>Time: O(n²), Space: O(1)</li>
                <li>Simple but inefficient</li>
                <li>Good for learning concepts</li>
            </ul>
            
            <h4>Merge Sort</h4>
            <ul>
                <li>Time: O(n log n), Space: O(n)</li>
                <li>Divide and conquer approach</li>
                <li>Stable and predictable</li>
            </ul>
            
            <h4>Quick Sort</h4>
            <ul>
                <li>Average: O(n log n), Worst: O(n²)</li>
                <li>In-place sorting</li>
                <li>Popular in practice</li>
            </ul>
            
            <h3>Searching Algorithms</h3>
            
            <h4>Linear Search</h4>
            <ul>
                <li>Time: O(n), Space: O(1)</li>
                <li>Works on unsorted data</li>
                <li>Simple implementation</li>
            </ul>
            
            <h4>Binary Search</h4>
            <ul>
                <li>Time: O(log n), Space: O(1)</li>
                <li>Requires sorted data</li>
                <li>Very efficient for large datasets</li>
            </ul>
            
            <h3>Algorithm Design Techniques</h3>
            
            <h4>1. Divide and Conquer</h4>
            <p>Break problem into smaller subproblems, solve recursively, then combine results.</p>
            <ul>
                <li>Merge Sort, Quick Sort</li>
                <li>Binary Search</li>
                <li>Fast Fourier Transform</li>
            </ul>
            
            <h4>2. Dynamic Programming</h4>
            <p>Solve complex problems by breaking them into simpler subproblems and storing results.</p>
            <ul>
                <li>Fibonacci sequence</li>
                <li>Longest Common Subsequence</li>
                <li>Knapsack problem</li>
            </ul>
            
            <h4>3. Greedy Algorithms</h4>
            <p>Make locally optimal choices at each step.</p>
            <ul>
                <li>Dijkstra's shortest path</li>
                <li>Huffman coding</li>
                <li>Activity selection</li>
            </ul>
            
            <h3>Graph Algorithms</h3>
            
            <h4>Graph Traversal</h4>
            <ul>
                <li><strong>Depth-First Search (DFS):</strong> Explore as far as possible before backtracking</li>
                <li><strong>Breadth-First Search (BFS):</strong> Explore all neighbors before going deeper</li>
            </ul>
            
            <h4>Shortest Path</h4>
            <ul>
                <li><strong>Dijkstra's Algorithm:</strong> Single-source shortest path</li>
                <li><strong>Bellman-Ford:</strong> Handles negative weights</li>
                <li><strong>Floyd-Warshall:</strong> All pairs shortest path</li>
            </ul>
            
            <h3>Practical Applications</h3>
            <ol>
                <li><strong>Web Search:</strong> PageRank algorithm</li>
                <li><strong>GPS Navigation:</strong> Shortest path algorithms</li>
                <li><strong>Data Compression:</strong> Huffman coding</li>
                <li><strong>Machine Learning:</strong> Optimization algorithms</li>
                <li><strong>Cryptography:</strong> Number theory algorithms</li>
            </ol>
            
            <h3>Tips for Learning Algorithms</h3>
            <ul>
                <li>Start with simple problems and gradually increase complexity</li>
                <li>Implement algorithms in your preferred programming language</li>
                <li>Practice on coding platforms like LeetCode, HackerRank</li>
                <li>Understand the trade-offs between time and space</li>
                <li>Learn to recognize common patterns</li>
            </ul>
        `,
        thumbnail: "code"
    },
    {
        id: 6,
        title: "Statistical Analysis Methods",
        category: "data-science",
        categoryName: "Data Science",
        date: "2025-11-18",
        duration: "55 minutes",
        description: "Master statistical techniques for data analysis including hypothesis testing, regression analysis, and statistical inference.",
        content: `
            <h2>Statistical Analysis Methods</h2>
            <p>Statistical analysis is the foundation of data science, providing tools to understand data patterns, test hypotheses, and make informed decisions based on empirical evidence.</p>
            
            <h3>What is Statistical Analysis?</h3>
            <p>Statistical analysis involves collecting, exploring, and presenting large amounts of data to discover underlying patterns and trends. It helps us make sense of uncertainty and variability in data.</p>
            
            <h3>Types of Statistics</h3>
            
            <h4>Descriptive Statistics</h4>
            <p>Summarize and describe the characteristics of a dataset:</p>
            <ul>
                <li><strong>Measures of Central Tendency:</strong> Mean, Median, Mode</li>
                <li><strong>Measures of Spread:</strong> Range, Variance, Standard Deviation</li>
                <li><strong>Measures of Shape:</strong> Skewness, Kurtosis</li>
            </ul>
            
            <h4>Inferential Statistics</h4>
            <p>Make predictions and inferences about a population based on sample data:</p>
            <ul>
                <li>Hypothesis testing</li>
                <li>Confidence intervals</li>
                <li>Regression analysis</li>
                <li>ANOVA (Analysis of Variance)</li>
            </ul>
            
            <h3>Probability Distributions</h3>
            
            <h4>Discrete Distributions</h4>
            <ul>
                <li><strong>Binomial:</strong> Success/failure scenarios</li>
                <li><strong>Poisson:</strong> Rare events over time</li>
                <li><strong>Geometric:</strong> First success in trials</li>
            </ul>
            
            <h4>Continuous Distributions</h4>
            <ul>
                <li><strong>Normal:</strong> Bell-shaped, symmetric</li>
                <li><strong>Exponential:</strong> Time between events</li>
                <li><strong>Chi-square:</strong> Goodness of fit tests</li>
                <li><strong>t-distribution:</strong> Small sample sizes</li>
            </ul>
            
            <blockquote>
                "In God we trust. All others must bring data." - W. Edwards Deming
            </blockquote>
            
            <h3>Hypothesis Testing</h3>
            <p>A systematic method for testing claims about population parameters.</p>
            
            <h4>Steps in Hypothesis Testing</h4>
            <ol>
                <li><strong>State hypotheses:</strong> Null (H₀) and alternative (H₁)</li>
                <li><strong>Choose significance level:</strong> α (typically 0.05)</li>
                <li><strong>Calculate test statistic:</strong> Based on sample data</li>
                <li><strong>Determine p-value:</strong> Probability of observing result</li>
                <li><strong>Make decision:</strong> Reject or fail to reject H₀</li>
            </ol>
            
            <h4>Common Statistical Tests</h4>
            <ul>
                <li><strong>t-test:</strong> Compare means (one sample, two sample, paired)</li>
                <li><strong>Chi-square test:</strong> Test independence or goodness of fit</li>
                <li><strong>ANOVA:</strong> Compare means across multiple groups</li>
                <li><strong>Mann-Whitney U:</strong> Non-parametric alternative to t-test</li>
            </ul>
            
            <h3>Regression Analysis</h3>
            <p>Examine relationships between variables and make predictions.</p>
            
            <h4>Simple Linear Regression</h4>
            <ul>
                <li>Relationship between two continuous variables</li>
                <li>Equation: y = β₀ + β₁x + ε</li>
                <li>Assess fit with R-squared</li>
            </ul>
            
            <h4>Multiple Linear Regression</h4>
            <ul>
                <li>Multiple predictor variables</li>
                <li>Check for multicollinearity</li>
                <li>Variable selection techniques</li>
            </ul>
            
            <h4>Logistic Regression</h4>
            <ul>
                <li>Binary or categorical outcomes</li>
                <li>Uses logit link function</li>
                <li>Interpret odds ratios</li>
            </ul>
            
            <h3>Correlation and Causation</h3>
            
            <h4>Correlation Measures</h4>
            <ul>
                <li><strong>Pearson correlation:</strong> Linear relationships</li>
                <li><strong>Spearman correlation:</strong> Monotonic relationships</li>
                <li><strong>Kendall's tau:</strong> Rank-based correlation</li>
            </ul>
            
            <h4>Important Notes</h4>
            <ul>
                <li>Correlation does not imply causation</li>
                <li>Consider confounding variables</li>
                <li>Use experimental design for causality</li>
            </ul>
            
            <h3>Confidence Intervals</h3>
            <p>Range of plausible values for population parameters.</p>
            
            <h4>Interpretation</h4>
            <ul>
                <li>95% CI: If we repeated sampling many times, 95% would contain the true parameter</li>
                <li>Wider intervals indicate more uncertainty</li>
                <li>Related to hypothesis testing</li>
            </ul>
            
            <h3>Statistical Assumptions</h3>
            
            <h4>Common Assumptions</h4>
            <ul>
                <li><strong>Normality:</strong> Data follows normal distribution</li>
                <li><strong>Independence:</strong> Observations are independent</li>
                <li><strong>Homoscedasticity:</strong> Constant variance</li>
                <li><strong>Linearity:</strong> Linear relationship (for regression)</li>
            </ul>
            
            <h4>Assumption Checking</h4>
            <ul>
                <li>Visual inspection (Q-Q plots, residual plots)</li>
                <li>Statistical tests (Shapiro-Wilk, Levene's test)</li>
                <li>Robust alternatives when assumptions violated</li>
            </ul>
            
            <h3>Effect Size and Power</h3>
            
            <h4>Effect Size</h4>
            <p>Magnitude of the difference or relationship:</p>
            <ul>
                <li>Cohen's d for mean differences</li>
                <li>Eta-squared for ANOVA</li>
                <li>Correlation coefficient for relationships</li>
            </ul>
            
            <h4>Statistical Power</h4>
            <ul>
                <li>Probability of detecting true effects</li>
                <li>Influenced by sample size, effect size, significance level</li>
                <li>Power analysis for sample size determination</li>
            </ul>
            
            <h3>Practical Applications</h3>
            
            <ol>
                <li><strong>A/B Testing:</strong> Compare website versions</li>
                <li><strong>Quality Control:</strong> Monitor manufacturing processes</li>
                <li><strong>Medical Research:</strong> Clinical trial analysis</li>
                <li><strong>Market Research:</strong> Customer behavior analysis</li>
                <li><strong>Finance:</strong> Risk assessment and modeling</li>
            </ol>
            
            <h3>Tools and Software</h3>
            <ul>
                <li><strong>R:</strong> Comprehensive statistical computing</li>
                <li><strong>Python:</strong> SciPy, statsmodels, pandas</li>
                <li><strong>SPSS:</strong> User-friendly interface</li>
                <li><strong>SAS:</strong> Enterprise statistical software</li>
                <li><strong>Excel:</strong> Basic statistical functions</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Always explore data before formal analysis</li>
                <li>Check assumptions before applying tests</li>
                <li>Report effect sizes along with p-values</li>
                <li>Consider practical significance, not just statistical</li>
                <li>Use appropriate visualizations</li>
                <li>Document analysis decisions and assumptions</li>
            </ul>
        `,
        thumbnail: "chart-line"
    }
];

// Initialize lessons page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('lessons.html')) {
        initializeLessonsPage();
    }
});

function initializeLessonsPage() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const noResults = document.getElementById('noResults');

    let filteredLessons = [...lessonsData];

    // Initial render
    renderLessons(filteredLessons);

    // Search functionality
    const performSearch = EduPortal.debounce(function() {
        filterAndSortLessons();
    }, 300);

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', filterAndSortLessons);
    categoryFilter.addEventListener('change', filterAndSortLessons);
    sortFilter.addEventListener('change', filterAndSortLessons);

    function filterAndSortLessons() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const sortBy = sortFilter.value;

        // Filter lessons
        filteredLessons = lessonsData.filter(lesson => {
            const matchesSearch = !searchTerm || 
                lesson.title.toLowerCase().includes(searchTerm) ||
                lesson.description.toLowerCase().includes(searchTerm) ||
                lesson.categoryName.toLowerCase().includes(searchTerm);
            
            const matchesCategory = !selectedCategory || lesson.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });

        // Sort lessons
        switch (sortBy) {
            case 'newest':
                filteredLessons.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                filteredLessons.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title':
                filteredLessons.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }

        renderLessons(filteredLessons);
    }

    function renderLessons(lessons) {
        if (lessons.length === 0) {
            lessonsGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        lessonsGrid.style.display = 'grid';
        noResults.style.display = 'none';

        lessonsGrid.innerHTML = lessons.map(lesson => createLessonCard(lesson)).join('');
    }

    function createLessonCard(lesson) {
        return `
            <div class="lesson-card">
                <div class="lesson-thumbnail">
                    <i class="fas fa-${lesson.thumbnail}"></i>
                </div>
                <div class="lesson-content">
                    <div class="lesson-meta">
                        <span class="lesson-category">${lesson.categoryName}</span>
                        <span class="lesson-date">${EduPortal.formatDate(lesson.date)}</span>
                    </div>
                    <h3 class="lesson-title">${lesson.title}</h3>
                    <p class="lesson-description">${lesson.description}</p>
                    <a href="lesson.html?id=${lesson.id}" class="lesson-link">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }
}

// Export for use in other files
window.lessonsData = lessonsData;
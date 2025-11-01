export const projectData = [
{
  id: "multi-agent-trading-framework",
  slug: "multi-agent-trading-framework",
  image: "/smarttrade_multiagent.png",
  category: "python",
  name: "Multi-Agent Trading Framework (SmartTrade)",
  description:
    "A multi-agent trading research platform that simulates real-world trading firms using LLM-powered agents (fundamental, sentiment, news, technical, trader, risk, portfolio) to produce coordinated trading decisions.",
  longDescription:
    "This project implements a modular multi-agent framework that models the workflows of trading firms: data ingestion, multi-round LLM debates, signal generation, strategy execution, risk overlay and portfolio construction. Agents are orchestrated with LangGraph and use the Gemini API for multi-round debates and reasoning, while Finnhub provides live and historical market data. The system exposes both a CLI and a Python API for configurable backtesting and real-time experimentation, enabling researchers to swap LLMs, tune research depth, plug-in online tools, and evaluate strategies under realistic risk constraints.",
  technologies: [
    "Python 3",
    "LangGraph",
    "langchain",
    "GenAI",
    "Agentic AI",
    "reasoning"

  ],
  features: [
    "LLM-powered agent types: Fundamental, Sentiment, News, Technical, Trader, Risk, Portfolio",
    "Multi-round debate workflow (Gemini) to aggregate and reconcile agent opinions",
    "Modular LangGraph orchestration for pluggable agent pipelines",
    "Finnhub integration for historical and live market data",
    "Risk assessment overlays (drawdown, position sizing, constraints) and portfolio construction",
    "Support for custom LLMs, research depth settings, and online tool integrations"
  ],
  challenges:
    "Coordinating asynchronous multi-agent debates while keeping latency reasonable and avoiding cascading errors; ensuring reproducible backtests and avoiding lookahead bias when combining LLM outputs with market data; handling noisy or incomplete financial data from external APIs; tuning the interface between model opinions and executable trading signals while preserving sensible risk controls.",
  learnings:
    "Designed and implemented multi-agent orchestration patterns for financial decision-making, learned to integrate LLMs (via Gemini) into iterative debate workflows, built robust data pipelines with Finnhub, and developed tools for reproducible backtesting and real-time experiment management. Gained experience balancing research flexibility (pluggable LLMs, depth) with engineering constraints (latency, reliability, risk management).",
  link: "https://github.com/kushalmandala29/SmartTrade",
  github: "https://github.com/kushalmandala29/SmartTrade"
},

  {
    id: "toxitrack-serverless-telegram-moderator",
    slug: "toxitrack-serverless-telegram-moderator",
    image: "/toxitrack.png",
    category: "front end",
    name: "🛡️ ToxiTrack – Serverless Telegram Moderator",
    description: "ToxiTrack is a fully serverless Telegram moderation bot that automatically detects and flags toxic messages in group and private chats using AWS services and the Telegram Bot API.",
    longDescription: "ToxiTrack uses Amazon Comprehend to analyze message sentiment in real time, helping keep conversations safe by alerting admins to toxic content instantly. Built with AWS Lambda, DynamoDB, SNS, and deployed via Terraform, the solution is serverless, scalable, and easy to maintain. The bot integrates seamlessly with Telegram chats to automate moderation without manual oversight.",
    technologies: ['AWS Lambda', 'Amazon Comprehend', 'DynamoDB', 'Amazon SNS', 'API Gateway', 'IAM', 'Terraform', 'Telegram Bot API'],
    features: ['Automated Toxicity Detection', 'Real-time Moderation', 'Private & Group Chat Support', 'Flagged Message Review', 'Serverless & Scalable','Infrastructure as Code'],
    challenges: "Key challenges included minimizing latency for near-instant detection in a serverless environment and fine-tuning sentiment thresholds to reduce false positives and negatives. Ensuring security for Telegram webhooks and AWS endpoints was critical, along with managing user state in stateless Lambda functions and keeping resource costs optimized.",
    learnings: "This project strengthened my understanding of building serverless systems on AWS and integrating third-party APIs. I learned practical ways to apply sentiment analysis in real-time moderation, mastered infrastructure automation with Terraform, and gained experience securing cloud-based bot deployments while balancing performance and cost.",
    link: "https://developer-purple-portfolio-vagnermengali.vercel.app/",
    github: "https://github.com/kushalmandala29/ToxiTrack-Serverless-Telegram-Moderator.git"
  },
  {
    id: "student-assistant-system",
    slug: "student-assistant-system",
    image: "/student_assistence_system.png",
    category: "front end",
    name: "Student Assistant System",
    description: "Student Assistant System is an AI-powered Retrieval-Augmented Generation (RAG) chatbot that helps students find information about colleges, courses, programs, and fee structures through a conversational interface.",
    longDescription: "The Student Assistant System is a conversational AI tool built on a RAG architecture that combines local LLM inference with real-time data retrieval. It dynamically scrapes and persists information from educational data sources, enabling students to query details about colleges, courses, and fees in an interactive way. By leveraging Ollama for large language models and embeddings, and ChromaDB for vector storage, the system provides relevant, contextual answers to student queries. It features a user-friendly Streamlit interface and uses data sourced from CollegeDunia.com solely for educational purposes, with no commercial intent.",
    technologies: ['Python 3.9+', 'Ollama', 'ChromaDB', 'Streamlit', 'Brave Search API', 'LLM Models (llama3.1)', 'Embedding Models (nomic-embed-text)'],
    features: ['Real-time College Information Retrieval', 'Course and Program Details Lookup', 'Fee Structure Information', 'Dynamic Web Scraping', 'Persistent Knowledge Base', 'Conversational UI'],
    challenges: "A key challenge was ensuring the accuracy and consistency of dynamically scraped educational data, which often varied in structure or format. Integrating Ollama’s LLMs with a vector database for retrieval-augmented answers required careful tuning for relevance and response quality. Balancing latency for real-time responses while processing large datasets posed technical hurdles as well.",
    learnings: "hrough this project, I gained hands-on experience implementing Retrieval-Augmented Generation systems, integrating LLMs with vector databases, and building conversational interfaces with Streamlit. I also learned practical approaches to dynamic web scraping and managing knowledge bases for real-time AI applications.",
    link: "https://developer-green-portfolio-vagnermengali.vercel.app/",
    github: "https://github.com/kushalmandala29/Student-Assistant-System.git"
  },
  {
    id: "interactive-projectile-motion-simulation",
    slug: "interactive-projectile-motion-simulation",
    image: "/projectile_motion.png",
    category: "front end",
    name: "Interactive Projectile Motion Simulation accross planets",
    description: "Interactive_Projectile_Motion_Simulation_accross_planets is an interactive web-based simulation that visualizes how projectiles behave under different planetary gravities, allowing users to explore the effects of varying gravity on projectile trajectories across the Solar System.",
    longDescription: "This simulation provides a hands-on way to learn about projectile motion physics by letting users launch virtual projectiles on different planets with accurate gravitational settings. It uses a real-time 3D rendering engine to display trajectories affected by each planet’s unique gravity, giving an intuitive understanding of how factors like initial velocity, angle, and planetary gravity influence projectile paths. By offering adjustable parameters and dynamic visual feedback, the tool helps students and enthusiasts deepen their understanding of classical mechanics concepts in an engaging and interactive environment.",
    technologies: ['JavaScript ES6+', 'Three.js', 'Cannon.js', 'WebGL 2.0', 'HTML5', 'CSS3','MediaPipe','TensorFlow.js'],
    features: ['Interactive Projectile Launch Controls', 'Accurate Planetary Gravity Simulation', 'Real-Time 3D Trajectory Visualization', 'Adjustable Launch Parameters', 'Planet Selection for Comparison', 'Physics-Based Motion Calculations'],
    challenges: "A key challenge was removing buffering and lag in hand gesture detection to ensure that object movements accurately matched the user’s actual hand motions in real time. Achieving smooth, jerk-free movement of simulated objects required fine-tuning the gesture recognition pipeline and optimizing the responsiveness of the system to deliver natural, fluid interactions without noticeable delays or stuttering.",
    learnings: "Through this project, I learned advanced techniques for calibrating hand gesture recognition systems to achieve smooth, real-time control of 3D objects. I gained hands-on experience minimizing latency and eliminating jerky movements in gesture-driven simulations, along with improving the responsiveness of interactive web applications that rely on continuous input from computer vision models.",
    link: "https://developer-green-portfolio-vagnermengali.vercel.app/",
    github: "https://github.com/kushalmandala29/Interactive_Projectile_Motion_Simulation_accross_planets.git"
  },
  {
    id: "employment-leave-management-system",
    slug: "employment-leave-management-system",
    image: "/employee_leave_management_system.png",
    category: "front end",
    name: "Employment Leave Management System",
    description: "Employment Leave Management System is a Django-based web application designed to streamline employee leave requests and approvals, providing an intuitive interface for employees, managers, and HR administrators to manage leave workflows effectively.",
    longDescription: "This system enables employees to register, log in securely, and submit various types of leave applications, such as annual, sick, or casual leave. Managers and HR personnel can review, approve, reject, or comment on leave requests through role-specific dashboards. The application leverages Django’s built-in authentication and admin capabilities to enforce role-based access, ensuring each user only sees the relevant features for their role (Employee, Manager, or Admin). With a responsive front end built on HTML, CSS, and Bootstrap, the system delivers a seamless experience on both desktop and mobile devices. The admin panel allows HR to manage users, leave types, and organizational settings, making the system flexible and easily adaptable for different organizations.",
    technologies: ['Python 3', 'Django ', 'SQLite', 'HTML', 'CSS', 'Bootstrap 5'],
    features: ['Employee Self-Service Registration & Login', 'Leave Application Submission', 'Manager/HR Approval Workflow', 'Role-Based Access Control', 'Responsive Dashboards', 'Admin Panel for Management'],
    challenges: "A major challenge was implementing clear, secure role-based access control to ensure each user type only accessed appropriate functionalities. Ensuring data integrity between leave applications, approvals, and user profiles required careful database design and Django model relationships. Providing responsive, intuitive dashboards that work seamlessly across devices also posed design and front-end integration challenges.",
    learnings: "This project enhanced my skills in building secure, role-based web applications with Django, designing relational data models for HR workflows, and creating responsive, user-friendly interfaces with Bootstrap. I also gained practical experience managing user authentication, session handling, and customizing Django’s admin panel for real-world organizational requirements.",
    link: "https://www.grupodogma.site/",
    github: "https://github.com/kushalmandala29/employment-leave-management-system.git"
  },

  {
    id: "dog-breed-classification",
    slug: "dog-breed-classification",
    image: "/dog_classification.png",
    category: "front end",
    name: "Dog Breed Classification",
    description: "Dog Breed Classification Project is a deep learning-based system capable of accurately identifying 120 different dog breeds with 92% accuracy, featuring a user-friendly web interface for instant breed predictions from uploaded images.",
    longDescription: "This project uses a multi-model ensemble of state-of-the-art CNN architectures, including InceptionV3, Xception, InceptionResNetV2, and NASNetLarge, trained on the Stanford Dogs Dataset. The ensemble approach ensures robust performance across diverse poses, lighting conditions, and scales. A Streamlit-based web interface allows users to upload photos of dogs and receive real-time breed predictions along with confidence scores. With an overall accuracy of 92%, the system demonstrates strong generalization across 120 breeds, making it a reliable tool for educational, veterinary, or enthusiast applications.",
    technologies: ['TensorFlow/Keras', 'Python 3.x', 'Streamlit'],
    features: [ '92% Classification Accuracy', 'Interactive Web Interface', 'Real-Time Image-Based Predictions', 'Training on Stanford Dogs Dataset'],
    challenges: "The biggest challenge was managing the complexity of training multiple deep CNN architectures on a large, diverse dataset while avoiding overfitting. Ensuring consistent performance across breeds with significant intra-class variation required careful augmentation and regularization. Integrating the ensemble into an efficient real-time prediction pipeline and building a responsive web interface also posed technical hurdle",
    learnings: "This project enhanced my understanding of training and fine-tuning large CNN models, ensemble learning strategies, and best practices for balancing accuracy and generalization. I gained experience integrating deep learning pipelines with interactive web apps using Streamlit, optimizing inference performance, and working with complex image datasets.",
    link: "https://developer-blue-portfolio-vagnermengali.vercel.app/",
    github: "https://github.com/kushalmandala29/dog_breed_classifications.git"
  },
];

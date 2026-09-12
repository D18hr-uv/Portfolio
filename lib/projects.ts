export type Project = {
  slug: string;
  title: string;
  year?: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

// Ported verbatim from the original portfolio (URLs preserved exactly).
export const projects: Project[] = [
  {
    slug: "nexthire-ai",
    title: "NextHire AI",
    image: "/projects/Nexthire_ai.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Drizzle ORM", "Clerk", "Gemini API"],
    description:
      "A full-stack mock interview platform that helps developers sharpen their skills. Google Gemini generates custom questions and gives instant, real-time feedback, with secure auth via Clerk and data persistence through Drizzle ORM.",
    github: "https://github.com/D18hr-uv/NextHire-AI",
    demo: "https://nexthire-ai.vercel.app/",
    featured: true,
  },
  {
    slug: "codeamie",
    title: "CodeAmie",
    image: "/projects/CodeAmie.png",
    tech: ["React", "Tailwind CSS", "Gemini API"],
    description:
      "An AI-powered code review tool built on Google's Gemini model. It reviews code across JavaScript, Python, C++ and more, giving real-time feedback on quality, best practices and potential bugs — with syntax highlighting and a sleek dark UI.",
    github: "https://github.com/D18hr-uv/CodeAmie",
    demo: "https://code-amie.vercel.app/",
    featured: true,
  },
  {
    slug: "stock-sathi",
    title: "Stock-Sathi",
    image: "/projects/stocksathi.png",
    tech: ["Python", "Streamlit", "yfinance", "Plotly", "Pandas", "NumPy"],
    description:
      "An end-to-end data analytics platform for real-time stock monitoring, visualization and alerting. It pulls live data via yfinance, plots interactive Plotly charts, notifies users of significant price moves and exports historical data to CSV.",
    github: "https://github.com/D18hr-uv/Stock-Sathi",
    demo: "https://stock-sathi.streamlit.app/",
    featured: true,
  },
  {
    slug: "cardioscribe",
    title: "CardioScribe",
    image: "/projects/CardioScribe.png",
    tech: ["Python", "Scikit-learn", "Pandas", "Joblib", "Streamlit"],
    description:
      "An end-to-end ML app predicting the 10-year risk of heart disease. A RandomForestClassifier is trained on a cleaned clinical dataset and deployed in a Streamlit app that gives real-time predictions from 13 interactive medical inputs.",
    github: "https://github.com/D18hr-uv/CardioScribe",
    demo: "https://cardioscribe.streamlit.app/",
    featured: true,
  },
  {
    slug: "dashcraft",
    title: "DashCraft",
    image: "/projects/dashcraft.jpg",
    tech: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
    description:
      "A Flask-based interactive data-visualization dashboard. Upload a dataset and build dynamic line, scatter and pie charts with customizable axes, a light/dark toggle and a responsive design for effortless data exploration.",
    github: "https://github.com/D18hr-uv/DashCraft",
    demo: "https://dashcraft.onrender.com/",
  },
  {
    slug: "dragonfly",
    title: "DragonFly",
    image: "/projects/dragonfly.png",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
    description:
      "A web platform for an autonomous drone-based real-time pollution monitoring system, built for SIH'24. Uses the Google Maps API to display live and searched locations with atmospheric data over an intuitive, interactive interface.",
    github: "https://github.com/D18hr-uv/DragonFly",
    demo: "https://dragon-fly-nine.vercel.app/",
  },
  {
    slug: "chai-shai",
    title: "Chai-Shai",
    image: "/projects/chai_shai.png",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive snacks-ordering website where you can browse and order a range of snacks. Fully responsive across screen sizes, with a responsive navigation bar and a footer of social links.",
    github: "https://github.com/D18hr-uv/Chai_Shai",
    demo: "https://d18hr-uv.github.io/Chai_Shai/",
  },
  {
    slug: "harry-potter",
    title: "Harry Potter Theme Page",
    image: "/projects/1712517375480.jpg",
    tech: ["HTML", "CSS"],
    description:
      "A Harry Potter themed page using a range of CSS styling techniques to build a colorful, responsive layout — complete with a simple navigation bar and a social-links footer.",
    github: "https://github.com/D18hr-uv/HarryPotter",
    demo: "https://d18hr-uv.github.io/HarryPotter/",
  },
  {
    slug: "credit-eda",
    title: "Credit EDA",
    image: "/projects/ml.jpg",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    description:
      "A data-science project analyzing credit history across the application and previous-application datasets — handling missing values and running univariate, bivariate and multivariate analysis to surface patterns for better decisions.",
    github: "https://github.com/D18hr-uv/CreditEDA",
  },
  {
    slug: "sms-spam-detection",
    title: "SMS Spam Detection",
    image: "/projects/ml.jpg",
    tech: ["Python", "Scikit-learn", "NLTK", "Pandas"],
    description:
      "An ML project that flags spam in a labeled SMS dataset. Handles class imbalance with oversampling, cleans text with an NLTK lemmatizer, vectorizes with TF-IDF and trains a Naive Bayes classifier, then evaluates performance.",
    github: "https://github.com/D18hr-uv/SMS_Spam_Detection",
  },
  {
    slug: "hate-speech-detection",
    title: "Hate Speech Detection",
    image: "/projects/ml.jpg",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    description:
      "An ML project to detect hate speech on social media. The data is cleaned and prepared, a model is trained on the cleaned data and evaluated for performance.",
    github: "https://github.com/D18hr-uv/Hate_Speech_Detection",
  },
];

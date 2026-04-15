import Blog from "../assets/image/blog.png";
import Chat from "../assets/image/chat.png";
import Ecom from "../assets/image/e-commerce.png";
import Employee from "../assets/image/Employee_Management.png";
import Movie3 from "../assets/image/movie3.png";
import Nile from "../assets/image/Nile.png";
import Resturant from "../assets/image/resturant.png";
import Tenawo from "../assets/image/Tenawo.png";

export const projects = [
  { 
    id: 1, 
    title: "Life Hack Blog", 
    description: "A comprehensive blogging platform built with Laravel framework, featuring user authentication, content management, and responsive design for optimal reading experience.", 
    image: Blog, 
    category: "fullstack", 
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"], 
    github: "https://github.com/AbdulqaderAhmed/life-hack-blog", 
    live: null, 
    features: ["User Authentication", "Content Management", "Responsive Design", "SEO Optimized"] 
  },
  { 
    id: 2, 
    title: "Let's Chat", 
    description: "Real-time chat application with social media authentication, enabling seamless communication between users with modern UI/UX design.", 
    image: Chat, 
    category: "fullstack", 
    technologies: ["Laravel", "PHP", "WebSocket", "MySQL"], 
    github: "https://github.com/AbdulqaderAhmed/laravel-chat-2", 
    live: null, 
    features: ["Real-time Messaging", "Social Auth", "User Presence", "File Sharing"] 
  },
  { 
    id: 3, 
    title: "E-Commerce Platform", 
    description: "Full-featured e-commerce solution with admin dashboard, inventory management, payment integration, and customer portal.", 
    image: Ecom, 
    category: "fullstack", 
    technologies: ["Laravel", "PHP", "MySQL", "Stripe API"], 
    github: "https://github.com/AbdulqaderAhmed/laravel-ecommerce", 
    live: null, 
    features: ["Admin Dashboard", "Payment Gateway", "Inventory Management", "Order Tracking"] 
  },
  { 
    id: 4, 
    title: "Employee Management System", 
    description: "Comprehensive HR management system with employee tracking, payroll management, and performance analytics built with Laravel API and React frontend.", 
    image: Employee, 
    category: "fullstack", 
    technologies: ["Laravel", "React", "MySQL", "REST API"], 
    github: "https://github.com/AbdulqaderAhmed/employee-laravel", 
    live: null, 
    features: ["Employee Tracking", "Payroll System", "Performance Analytics", "Role Management"] 
  },
  { 
    id: 5, 
    title: "Ocean Of Movies", 
    description: "Entertainment hub for discovering latest movies, TV series, and shows. Built with React and Redux, integrated with TMDB API for real-time data.", 
    image: Movie3, 
    category: "frontend", 
    technologies: ["React", "Redux", "TMDB API", "CSS3"], 
    github: "https://github.com/AbdulqaderAhmed/Ocean-of-movies-react", 
    live: null, 
    features: ["Movie Discovery", "Search & Filter", "Watchlist", "Responsive Design"] 
  },
  { 
    id: 6, 
    title: "Nile Insurance System", 
    description: "Car insurance price calculation system with dynamic pricing algorithms, policy management, and customer portal.", 
    image: Nile, 
    category: "fullstack", 
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"], 
    github: "https://github.com/AbdulqaderAhmed/nile-insurance-laravel", 
    live: null, 
    features: ["Price Calculator", "Policy Management", "Customer Portal", "Claims Processing"] 
  },
  { 
    id: 7, 
    title: "Side-hustle Restaurant", 
    description: "Modern restaurant website with online ordering system, menu management, and reservation booking built with React and Material-UI.", 
    image: Resturant, 
    category: "frontend", 
    technologies: ["React", "Material-UI", "JavaScript", "CSS3"], 
    github: "https://github.com/AbdulqaderAhmed/SideHustle-Restaurant", 
    live: null, 
    features: ["Online Ordering", "Menu Management", "Reservation System", "Mobile Responsive"] 
  },
  { 
    id: 8, 
    title: "Tenawo - Location Services", 
    description: "Location-based service finder helping users discover nearby pharmacies and medical services within 500 meters radius using geolocation APIs.", 
    image: Tenawo, 
    category: "frontend", 
    technologies: ["React", "Geolocation API", "Maps API", "Tailwind CSS"], 
    github: "https://github.com/AbdulqaderAhmed/Tenawo", 
    live: null, 
    features: ["Location Services", "Radius Search", "Maps Integration", "Service Directory"] 
  },
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack" },
  { id: "frontend", name: "Frontend" },
];

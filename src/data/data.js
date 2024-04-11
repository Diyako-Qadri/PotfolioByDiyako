function Skills(name, image, descriptions) {
  (this.name = name), (this.image = image), (this.descriptions = descriptions);
}

export const MySkills = [
  new Skills(
    'CSS',
    'css-3.png',
    'CSS: I have a solid understanding of Cascading Style Sheets (CSS), allowing me to style and design web pages effectively. I can create visually appealing layouts and responsive designs using CSS flexbox, grid, and other modern techniques.'
  ),
  new Skills(
    'HTML',
    'html.png',
    "HTML: I'm proficient in HyperText Markup Language (HTML), which forms the foundation of web development. I use HTML to structure content, define semantic elements, and ensure accessibility and compatibility across different browsers."
  ),
  new Skills(
    'Javascripts',
    'js.png',
    "JavaScript: JavaScript is my go-to language for adding interactivity and functionality to web applications. I'm experienced in using JavaScript to manipulate the DOM, handle events, fetch data asynchronously, and implement complex client-side logic."
  ),
  new Skills(
    'React',
    'physics.jpg',
    'React: I specialize in React, a powerful library for building user interfaces. With React, I can create reusable components, manage application state efficiently, and build dynamic and interactive web applications that provide a seamless user experience.'
  ),
  new Skills(
    'Next JS',
    'next-js.png',
    "Next.js: I'm skilled in Next.js, a framework built on top of React that simplifies server-side rendering and static site generation. I leverage Next.js to optimize performance, improve SEO, and enhance the overall performance of web applications."
  ),
  new Skills(
    'Node',
    'node-js.png',
    'Node.js: Node.js is my preferred runtime environment for server-side development. I utilize Node.js to build scalable and high-performance web servers, APIs, and microservices, leveraging its event-driven architecture and non-blocking I/O model.'
  ),
  new Skills(
    'Express',
    'programing.png',
    'Express: I have extensive experience with Express, a minimalist web application framework for Node.js. I use Express to create robust APIs, handle routing and middleware, and structure server-side code effectively, ensuring maintainability and scalability.'
  ),

  new Skills(
    'Tailwind',
    'tailwind.png',
    "Tailwind CSS: I'm proficient in Tailwind CSS, a utility-first CSS framework that streamlines the process of styling web applications. I leverage Tailwind CSS to build custom and responsive user interfaces quickly, utilizing its extensive set of utility classes."
  ),

  new Skills(
    'Mongo DB',
    'mongodb.png',
    "MongoDB: MongoDB is my database of choice for storing and managing data in web applications. I use MongoDB's flexible document-based model to design scalable and performant databases, enabling efficient data storage and retrieval."
  ),
  new Skills(
    'Figma',
    'figma.png',
    "Figma: I'm proficient in Figma, a collaborative interface design tool used for creating, prototyping, and sharing UI/UX designs. I leverage Figma to design intuitive user interfaces, collaborate with team members, and streamline the design-to-development workflow."
  ),
  new Skills(
    'Git',
    'Git.png',
    'Git: Git is my preferred version control system for managing code repositories and collaborating with team members. I use Git to track changes, manage branches, and coordinate with other developers, ensuring a smooth and efficient development process.'
  ),
  new Skills(
    'GitHub',
    'github.png',
    "GitHub: GitHub is my go-to platform for hosting Git repositories and collaborating on open-source projects. I utilize GitHub's features for code review, issue tracking, and continuous integration, facilitating seamless collaboration and project management."
  ),
];

export const allSkills = [...MySkills];

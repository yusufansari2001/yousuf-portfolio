const Projects = () => {
  const projectData = [
    {
      name: 'AI Resume Generator',
      description:
        'A web-based application that leverages AI to generate professional resumes and calculate ATS (Applicant Tracking System) scores from user input. The project integrates with local and external LLMs for intelligent content generation and optimization feedback.',
      tech: ['Java','Spring Boot', 'Spring AI','React', 'OpenAI API(Ollama)', 'Tailwind CSS'],
      github: 'https://github.com/yusufansari2001/ai-resume-generator',
    },
    {
      name: 'Blog Application',
      description:
        'A blog platform with user authentication, CRUD operations, and role-based access where users can register, login, create posts, delete post, add comment, delete comment, update comment etc.',
      tech: ['Java','Spring Boot', 'Spring Security','JWT', 'MySQL'],
      github: 'https://github.com/yusufansari2001/Blog-Application',
    },
    {
      name: 'URL Shortener',
      description:
        'A secure URL shortening service with user registration and login using JWT. Users can view their shortened URLs and track analytics including click count.',
      tech: ['Java', 'Spring Boot', 'Spring Security','MySQL'],
      github: 'https://github.com/yusufansari2001/url-shortener-sb',
    },
    {
      name: 'Facial Recognition Attendance System',
      description:
        'An automatic attendance system using OpenCV and Raspberry Pi for real-time facial recognition.',
      tech: ['Python', 'OpenCV', 'Raspberry Pi'],
      github: 'https://github.com/yusufansari2001/Facial-Recognition-using-opencv',
    },
    {
      name: 'Spring Boot JWT Authentication',
      description:
        'Implements JWT-based authentication and authorization in a Spring Boot application.',
      tech: ['Java', 'Spring Boot', 'Spring Security','JWT'],
      github: 'https://github.com/yusufansari2001/Springboot-jwt',
    },
    {
      name: 'Search REST API',
      description:
        'A RESTful API that performs search operations using JPQL and native SQL queries.',
      tech: ['Java', 'Spring Boot', 'JPQL', 'SQL'],
      github: 'https://github.com/yusufansari2001/Search-Rest-Api',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-400 mb-1">Tech Used:</h4>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-lg border border-blue-500/30"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

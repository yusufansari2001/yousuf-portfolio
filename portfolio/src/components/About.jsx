import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalInfo = {
    name: "Mohammed Yousuf",
    title: "Software Engineer",
    location: "Hyderabad, Telangana, India",
    email: "yousuf89786@gmail.com",
    description:
      "Passionate Software Engineer with expertise in Java development and modern web technologies. I specialize in building scalable applications using Spring Boot and have a strong foundation in backend development.",
  };

  const educationDetails = [
    {
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "JNTUH College of Engineering",
      year: "2020 - 2023",
      location: "Hyderabad, Telangana",
      grade: "CGPA: 9.04/10",
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Government Polytechnic College",
      year: "2017 - 2020",
      location: "Hyderabad, Telangana",
      grade: "CGPA: 9.00/10",
    },
  ];

  const workExperience = [
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      period: "Dec 2023 - Present",
      location: "Hyderabad, Telangana",
      responsibilities: [
        "Owned the lifecycle of RESTful web services from design and development using Java and Spring Boot",
        "Refactored legacy codebase, improving code maintainability by 40% through creation of reusable service methods and utility classes",
        "Proposed and implemented a solution for the same recurring requirement",
        "Optimized Oracle database queries, reducing average response time by 35% and improving application performance",
        "Implemented comprehensive JUnit test cases achieving 85%+ code coverage and maintained SonarQube quality gate standards",
        "Collaborated closely with cross-functional teams including testers, DevOps, and product owners to deliver features on schedule",
      ],
      techStack: "Java, Spring Boot, Oracle SQL, JUnit, SonarQube, Jenkins",
    },
    {
      title: "iOS Development Intern",
      company: "Tata Consultancy Services",
      period: "Feb 2023 – May 2023",
      location: "Hyderabad, Telangana",
      responsibilities: [
        "Developed UI components and custom icons for enterprise banking application using Swift and Xcode",
        "Created intuitive user interfaces following iOS design guidelines and accessibility standards",
        "Collaborated with UX designers and backend developers to ensure seamless integration",
      ],
      techStack: "Swift, Xcode, iOS SDK",
    },
  ];

  const skillsData = {
    Languages: ["Java", "C", "C++"],
    "Frameworks & Technologies": [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Microservices",
      "REST APIs",
      "JUnit",
      "Mockito",
      "SonarQube",
      "Code Coverage Analysis",
    ],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "JSP", "React"],
    "Database Management": ["MySQL", "Oracle SQL"],
    "Developer Tools": ["Git", "GitLab", "Maven", "Eclipse", "IntelliJ IDEA"],
    Others: ["Jenkins", "CI/CD pipelines", "Agile/Scrum"],
  };

  const skillColors = {
    Languages: "from-blue-500 to-blue-600",
    "Frameworks & Technologies": "from-green-500 to-green-600",
    "Web Technologies": "from-purple-500 to-purple-600",
    "Database Management": "from-red-500 to-red-600",
    "Developer Tools": "from-yellow-500 to-yellow-600",
    Others: "from-teal-500 to-teal-600",
  };

  return (
    <div id="about" className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, experience, and the skills I
            bring to every project.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className="h-full bg-gray-800 p-6 rounded-xl border border-gray-700 h-full">
              {/* TABS */}
              <div className="flex space-x-1 mb-6 bg-gray-700 rounded-lg p-1">
                {["personal", "experience"].map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                      activeTab === tabKey
                        ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-600"
                    }`}
                  >
                    {tabKey === "personal"
                      ? "👤 Personal & Education"
                      : "💼 Work Experience"}
                  </button>
                ))}
              </div>

              {activeTab === "personal" && (
                <div className="space-y-8">
                  {/* Personal Info Section */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold">
                        MY
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          {personalInfo.name}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {personalInfo.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {personalInfo.description}
                    </p>
                    <div className="space-y-3">
                      <div className="text-gray-300">
                        {personalInfo.location}
                      </div>
                      <div className="text-gray-300">{personalInfo.email}</div>
                    </div>
                  </div>

                  {/* Education Section */}
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🎓</span>
                      Education Background
                    </h3>
                    <div className="space-y-6">
                      {educationDetails.map((edu, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-500 pl-4 space-y-2"
                        >
                          <h4 className="text-lg font-semibold">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                          <div className="text-sm text-gray-300">
                            <span>{edu.year}</span> |{" "}
                            <span>{edu.location}</span>
                          </div>
                          <p className="text-green-400 font-medium">
                            {edu.grade}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-3">💼</span>
                    Work Experience
                  </h3>
                  {workExperience.map((job, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-green-500 pl-4 space-y-3"
                    >
                      <div>
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <p className="text-green-400 font-medium">
                          {job.company}
                        </p>
                        <div className="text-sm text-gray-300">
                          <span>{job.period}</span> |{" "}
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        {job.responsibilities.map((resp, idx2) => (
                          <li key={idx2} className="flex items-start space-x-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">
                          Tech Stack:
                        </p>
                        <p className="text-sm text-blue-300 font-medium">
                          {job.techStack}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2">
            <div className="h-full bg-gray-800 p-6 rounded-xl border border-gray-700 h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">🚀</span>
                Technical Skills
              </h3>
              <div className="space-y-8">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-lg font-semibold text-white relative inline-block">
                      {category}
                      <span
                        className={`block h-1 mt-1 w-24 bg-gradient-to-r ${skillColors[category]} rounded-full`}
                      ></span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-full text-sm font-medium text-gray-200 hover:border-white transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

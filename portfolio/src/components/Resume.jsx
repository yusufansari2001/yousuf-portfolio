import { useState } from "react";

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const resumePdfPath = "/Mohammed_Yousuf_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfPath;
    link.download = "Mohammed_Yousuf_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfError = () => {
    setPdfError(true);
    setIsLoading(false);
  };

  return (
    <div
      id="resume"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              My Resume
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            View my complete resume below or download it to learn more about my
            experience and skills.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl max-w-5xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Resume</h3>
            <div className="flex gap-2">
              
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* PDF Display */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative min-h-[300px]">
            {!pdfError ? (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}
                <iframe
                  src={`${resumePdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                  width="100%"
                  height="100%"
                  title="Resume PDF Preview"
                  className={`border-0 h-[50vh] md:h-[70vh] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  onError={handlePdfError}
                  onLoad={() => setIsLoading(false)}
                />
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  PDF Preview Not Available
                </h4>
                <p className="text-gray-600 mb-4">
                  The PDF preview couldn't be loaded. This might be due to
                  browser restrictions or the file path.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>To fix this:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Make sure your resume.pdf is in the public folder</li>
                    <li>
                      Update the resumePdfPath variable with the correct path
                    </li>
                    <li>
                      Some browsers block PDF preview for security reasons
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleDownload}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Download Resume Instead
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-300 text-sm">
              1.5+ years in software development
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Specialization</h3>
            <p className="text-gray-300 text-sm">
              Java, Spring Boot, Backend Development
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Focus</h3>
            <p className="text-gray-300 text-sm">
              Clean Code, Problem Solving, APIs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
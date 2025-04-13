"use client";
import { useState } from "react";
import Spinner from "./Spinner";

function ResumeFeedback() {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);

  // Handle resume feedback submission
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    setIsLoadingFeedback(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setFeedback(
        `Here are some suggestions for your resume:\n\n` +
          `1. Your resume is ${
            resumeText.length > 500 ? "detailed" : "concise"
          }.\n` +
          `2. Consider adding more ${
            resumeText.includes("skills") ? "" : "skills"
          }.\n` +
          `3. The structure could be ${
            resumeText.includes("Experience") ? "improved" : "better organized"
          }.\n\n` +
          `These are mock suggestions. In a real app, this would be AI-generated feedback.`
      );
      setIsLoadingFeedback(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">AI Resume Feedback</h2>
      <form onSubmit={handleSubmitFeedback} className="mb-6">
        <textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
          className="w-full p-4 border rounded-lg h-64 mb-4 text-sm"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoadingFeedback}
        >
          {isLoadingFeedback ? <Spinner /> : "Get Feedback"}
        </button>
      </form>

      {feedback && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">AI Feedback:</h3>
          <div className="whitespace-pre-line text-sm">{feedback}</div>
        </div>
      )}
    </div>
  );
}

export default ResumeFeedback;

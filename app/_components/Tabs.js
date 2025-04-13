import { useState } from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap border-b border-gray-200 mb-6">
      <button
        onClick={() => setActiveTab("tracker")}
        className={`px-4 py-2 font-medium cursor-pointer ${
          activeTab === "tracker"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
      >
        Tracked Jobs
      </button>
      <button
        onClick={() => setActiveTab("feedback")}
        className={`px-4 py-2 font-medium cursor-pointer ${
          activeTab === "feedback"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
      >
        Resume Feedback
      </button>
      <button
        onClick={() => setActiveTab("recommendations")}
        className={`px-4 py-2 font-medium cursor-pointer ${
          activeTab === "recommendations"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
      >
        Job Recommendations
      </button>
    </div>
  );
}

export default Tabs;

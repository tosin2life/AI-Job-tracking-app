"use client";
import { useState } from "react";
import Header from "../_components/Header";
import Tabs from "../_components/Tabs";
import TrackedJobs from "../_components/TrackedJobs";
import ResumeFeedback from "../_components/ResumeFeedback";
import JobRecommendation from "../_components/JobRecommendation";

export default function JobTracker() {
  const [activeTab, setActiveTab] = useState("tracker");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* {Header} */}
        <Header />
        {/* Navigation Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          {/* Tracked Jobs Tab */}
          {activeTab === "tracker" && <TrackedJobs />}

          {/* Resume Feedback Tab */}
          {activeTab === "feedback" && <ResumeFeedback />}

          {/* Job Recommendations Tab */}
          {activeTab === "recommendations" && <JobRecommendation />}
        </div>
      </div>
    </div>
  );
}

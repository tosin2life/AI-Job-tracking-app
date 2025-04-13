"use client";

import { useState } from "react";
import MatchScore from "./MatchScore";

// Mock data for job recommendations
const initialRecommendations = [
  {
    id: "r1",
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$70,000 – $90,000",
    requiredSkills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    matchScore: 85,
  },
  {
    id: "r2",
    title: "UI Engineer",
    company: "DesignPro",
    location: "New York, USA",
    salary: "$80,000 – $100,000",
    requiredSkills: ["Figma", "React", "CSS"],
    matchScore: 70,
  },
];
function JobRecommendation() {
  const [recommendations] = useState(initialRecommendations);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Job Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg mb-1">{job.title}</h3>
            <p className="text-gray-600 text-sm mb-1">{job.company}</p>
            <p className="text-gray-600 text-sm mb-1">{job.location}</p>
            <p className="text-gray-600 text-sm mb-3">{job.salary}</p>
            <div className="mb-3">
              <MatchScore score={job.matchScore} />
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobRecommendation;

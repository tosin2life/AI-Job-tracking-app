import { useState } from "react";

function TrackedJobs() {
  // Mock data for job applications
  const initialApplications = [
    {
      id: "1",
      jobTitle: "Software Engineer",
      company: "Innovatech",
      status: "Applied",
      appliedDate: "2024-04-01",
      notes: "Submitted online.",
    },
  ];

  const [applications, setApplications] = useState(initialApplications);
  const [newApplication, setNewApplication] = useState({
    jobTitle: "",
    company: "",
    status: "Applied",
    appliedDate: new Date().toISOString().split("T")[0],
    notes: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApplication({ ...newApplication, [name]: value });
  };

  // Handle application submission
  const handleSubmitApplication = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing application
      setApplications(
        applications.map((app) =>
          app.id === editingId ? { ...app, ...newApplication } : app
        )
      );
      setEditingId(null);
    } else {
      // Add new application
      const newApp = {
        id: Date.now().toString(),
        ...newApplication,
      };
      setApplications([...applications, newApp]);
    }

    // Reset form
    setNewApplication({
      jobTitle: "",
      company: "",
      status: "Applied",
      appliedDate: new Date().toISOString().split("T")[0],
      notes: "",
    });
  };

  // Handle edit action
  const handleEdit = (app) => {
    setNewApplication(app);
    setEditingId(app.id);
  };

  // Handle delete action
  const handleDelete = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tracked Job Applications</h2>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmitApplication}
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
      >
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={newApplication.jobTitle}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={newApplication.company}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm"
          required
        />
        <select
          name="status"
          value={newApplication.status}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="date"
          name="appliedDate"
          value={newApplication.appliedDate}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm"
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={newApplication.notes}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm col-span-full"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded text-sm hover:bg-blue-600"
        >
          {editingId ? "Update" : "Add"} Job
        </button>
      </form>

      {/* Applications List */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Job Title
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Company
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Status
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Date
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Notes
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="px-3 py-3 whitespace-nowrap">{app.jobTitle}</td>
                <td className="px-3 py-3 whitespace-nowrap">{app.company}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              app.status === "Applied"
                                ? "bg-blue-100 text-blue-800"
                                : app.status === "Interview"
                                ? "bg-yellow-100 text-yellow-800"
                                : app.status === "Offer"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  {app.appliedDate}
                </td>
                <td className="px-3 py-3 max-w-xs truncate">{app.notes}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(app)}
                    className="text-blue-600 hover:text-blue-900 mr-3 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="text-red-600 hover:text-red-900 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrackedJobs;

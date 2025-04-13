import { logout } from "../login/actions";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600">
          AI-Powered Job Application Tracker
        </h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => {
            logout();
            alert("Logging out...");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;

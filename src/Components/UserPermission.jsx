import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserPermission = () => {
  // Define roles and permissions
  const roles = ["Administration", "Super Admin", "User"];
  const permissionsList = [
    "Full access all feature",
    "Manage user role",
    "View and edit all data",
    "Edit content",
    "Manage categories",
    "Access analytics",
    "View content",
    "Access public data",
    "Download report",
  ];

  // State to manage permissions
  const [permissions, setPermissions] = useState(
    roles.reduce((acc, role) => {
      acc[role] = permissionsList.reduce((perms, permission) => {
        perms[permission] = false;
        return perms;
      }, {});
      return acc;
    }, {})
  );

  // Handle checkbox change
  const handleCheckboxChange = (role, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role][permission],
      },
    }));
  };

  // Handle save action
  const handleSaveChanges = () => {
    alert("✅ Permissions saved successfully!");
    console.log("Saved Permissions:", permissions);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold">User Permission</h2>

      {/* Permission Table */}
      <div className="table-responsive">
        <table className="table table-bordered mt-3 text-center">
          <thead className="table-dark">
            <tr>
              <th>Permission Type</th>
              {roles.map((role) => (
                <th key={role}>{role}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissionsList.map((permission) => (
              <tr key={permission}>
                <td>{permission}</td>
                {roles.map((role) => (
                  <td key={role}>
                    <input
                      type="checkbox"
                      checked={permissions[role][permission]}
                      onChange={() => handleCheckboxChange(role, permission)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserPermission;

import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const permissionsData = [
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

const roles = ["Admin", "Super admin", "User"];

export default function PermissionPage() {
  const [activeTab, setActiveTab] = useState("userRole");
  const [permissions, setPermissions] = useState(
    Array.from({ length: permissionsData.length }, () => [false, false, false])
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Created:", data);
  };

  const handleCheckboxChange = (permIndex, roleIndex) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((perm, i) =>
        i === permIndex
          ? perm.map((val, j) => (j === roleIndex ? !val : val))
          : perm
      )
    );
  };

  return (
    <div className="container py-4">
      {/* Buttons to toggle sections */}
      <div className="d-flex gap-3 mb-3">
        {["userRole", "applyType"].map((tab) => (
          <button
            key={tab}
            className={`btn ${
              activeTab === tab ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "userRole" ? "User Role" : "Apply Type"}
          </button>
        ))}
      </div>

      {/* User Role Section */}
      {activeTab === "userRole" && (
        <div>
          <h4>Create Company Account</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3" style={{ width: "60%" }}>
              <label htmlFor="name">Company Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                {...register("name", { required: "Company Name is required" })}
              />
              {errors.name && (
                <div className="text-danger">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-3" style={{ width: "60%" }}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-3" style={{ width: "60%" }}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>

            <div className="mb-3" style={{ width: "25%" }}>
              <label htmlFor="role">Role</label>
              <select
                className="form-select"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role.toLowerCase()}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <div className="text-danger">{errors.role.message}</div>
              )}
            </div>
            <button type="submit" className="btn btn-success">
              Create User
            </button>
          </form>
        </div>
      )}

      {/* Apply Type Section */}
      {activeTab === "applyType" && (
        <div>
          <h4>Apply Type</h4>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Permission Type</th>
                  {roles.map((role, index) => (
                    <th key={index}>{role}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissionsData.map((perm, permIndex) => (
                  <tr key={permIndex}>
                    <td>{perm}</td>
                    {roles.map((_, roleIndex) => (
                      <td key={roleIndex} className="text-center">
                        <input
                          type="checkbox"
                          checked={permissions[permIndex][roleIndex]}
                          onChange={() =>
                            handleCheckboxChange(permIndex, roleIndex)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Save Change</button>
          </div>
        </div>
      )}
    </div>
  );
}

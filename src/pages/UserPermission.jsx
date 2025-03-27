import { useState } from "react";
import { useForm } from "react-hook-form";

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

const roles = ["Administration", "Super admin", "User"];

export default function PermissionPage() {
  const [activeTab, setActiveTab] = useState("userRole"); // Track active section
  const [permissions, setPermissions] = useState(
    Array.from({ length: permissionsData.length }, () => [false, false, false])
  );

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("User Created:", data);
    // You can send the data to your server here
  };

  const handleCheckboxChange = (permIndex, roleIndex) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((perm, i) =>
        i === permIndex ? perm.map((val, j) => (j === roleIndex ? !val : val)) : perm
      )
    );
  };

  return (
    <div style={{ padding: "16px", maxWidth: "900px", margin: "auto" }}>
      {/* Buttons to toggle sections */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        {["userRole", "applyType"].map((tab) => (
          <button
            key={tab}
            style={{
              padding: "8px 16px",
              backgroundColor: activeTab === tab ? "#008080" : "#ccc",
              color: "#fff",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "userRole" ? "User Role" : "Apply Type"}
          </button>
        ))}
      </div>

      {/* User Role Section */}
      <div className="shadow-sm p-4 fw-medium mt-3">
      {activeTab === "userRole" && (
        <div>
          <h4>Create company account</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
                <label htmlFor="name">Company Name</label>
                <input type="name"
                id="name"
                className="form-control border-primary shadow-sm"
                style={{"width": "50%"}}
                {...register("name", {required: "Company Name is required"})}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                className="form-control border-primary shadow-sm"
                style={{ "width" : "50%"}}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="mt-3">
              <label htmlFor="password" >Password:</label>
              <input
                id="password"
                type="password"
                className="form-control border-primary shadow-sm"
                style={{ "width" : "50%"}}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
              <label htmlFor="role" className="mt-4 ">Role:</label>
              <select {...register("role", { required: "Role is required" })} className="py-2 m-4">
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role.toLowerCase()}>
                    {role}
                  </option>
                ))}
                
              </select>
              {errors.role && <span>{errors.role.message}</span>}
            </div>

            <button type="submit" className="btn btn-success">Create User</button>
          </form>
        </div>
      )}
      </div>

      {/* Apply Type Section with Permission Table */}
      {activeTab === "applyType" && (
        <div>
          <h2>Apply Type Section</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
            <thead>
              <tr style={{ backgroundColor: "#008080", color: "#fff" }}>
                <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
                  Permission Type
                </th>
                {roles.map((role, index) => (
                  <th key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissionsData.map((perm, permIndex) => (
                <tr key={permIndex}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{perm}</td>
                  {roles.map((_, roleIndex) => (
                    <td key={roleIndex} style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                      <input
                        type="checkbox"
                        checked={permissions[permIndex][roleIndex]}
                        onChange={() => handleCheckboxChange(permIndex, roleIndex)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button style={{ padding: "8px 16px", backgroundColor: "#444", color: "#fff", borderRadius: "4px", cursor: "pointer" }}>
              Cancel
            </button>
            <button style={{ padding: "8px 16px", backgroundColor: "#008080", color: "#fff", borderRadius: "4px", cursor: "pointer" }}>
              Save Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
}









// import { useState } from "react";
// import { useForm } from "react-hook-form";


// const permissionsData = [
//   "Full access all feature",
//   "Manage user role",
//   "View and edit all data",
//   "Edit content",
//   "Manage categories",
//   "Access analytics",
//   "View content",
//   "Access public data",
//   "Download report",
// ];
// const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log('User Created:', data);
//     // You can send the data to your server here
//   };

// const roles = ["Administration", "Super admin", "User"];

// export default function PermissionPage() {
//   const [activeTab, setActiveTab] = useState("userRole"); // Track active section
//   const [permissions, setPermissions] = useState(
//     Array(permissionsData.length).fill([false, false, false])
//   );

//   const handleCheckboxChange = (permIndex, roleIndex) => {
//     setPermissions((prevPermissions) =>
//       prevPermissions.map((perm, i) =>
//         i === permIndex
//           ? perm.map((val, j) => (j === roleIndex ? !val : val))
//           : perm
//       )
//     );
//   };

//   return (
//     <div style={{ padding: "16px", maxWidth: "900px", margin: "auto" }}>
//       {/* Buttons to toggle sections */}
//       <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
//         <button
//           style={{
//             padding: "8px 16px",
//             backgroundColor: activeTab === "userRole" ? "#008080" : "#ccc",
//             color: "#fff",
//             borderRadius: "4px",
//             border: "none",
//             cursor: "pointer",
//           }}
//           onClick={() => setActiveTab("userRole")}
//         >
//           User Role
//         </button>
//         <button
//           style={{
//             padding: "8px 16px",
//             backgroundColor: activeTab === "applyType" ? "#008080" : "#ccc",
//             color: "#fff",
//             borderRadius: "4px",
//             border: "none",
//             cursor: "pointer",
//           }}
//           onClick={() => setActiveTab("applyType")}
//         >
//           Apply Type
//         </button>
//       </div>

//       {/* User Role Section */}
//       {activeTab === "userRole" && (
//         <div>
//           <h2>User Role Section</h2>
//           <p>This is the User Role content.</p>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors.email && <span>{errors.email.message}</span>}
//             </div>

//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 id="password"
//                 type="password"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && <span>{errors.password.message}</span>}
//             </div>

//             <div>
//               <label htmlFor="role">Role:</label>
//               <select {...register("role", { required: "Role is required" })}>
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="user">User</option>
//                 <option value="moderator">Moderator</option>
//               </select>
//               {errors.role && <span>{errors.role.message}</span>}
//             </div>

//             <button type="submit">Create User</button>
//           </form>
//         </div>
//       )}

//       {/* Apply Type Section with Permission Table */}
//       {activeTab === "applyType" && (
//         <div>
//           <h2>Apply Type Section</h2>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               border: "1px solid #ccc",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#008080", color: "#fff" }}>
//                 <th
//                   style={{
//                     border: "1px solid #ccc",
//                     padding: "8px",
//                     textAlign: "left",
//                   }}
//                 >
//                   Permission Type
//                 </th>
//                 {roles.map((role, index) => (
//                   <th
//                     key={index}
//                     style={{ border: "1px solid #ccc", padding: "8px" }}
//                   >
//                     {role}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {permissionsData.map((perm, permIndex) => (
//                 <tr key={permIndex}>
//                   <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                     {perm}
//                   </td>
//                   {roles.map((_, roleIndex) => (
//                     <td
//                       key={roleIndex}
//                       style={{
//                         border: "1px solid #ccc",
//                         padding: "8px",
//                         textAlign: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={permissions[permIndex][roleIndex]}
//                         onChange={() =>
//                           handleCheckboxChange(permIndex, roleIndex)
//                         }
//                       />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div
//             style={{
//               marginTop: "16px",
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: "8px",
//             }}
//           >
//             <button
//               style={{
//                 padding: "8px 16px",
//                 backgroundColor: "#444",
//                 color: "#fff",
//                 borderRadius: "4px",
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               style={{
//                 padding: "8px 16px",
//                 backgroundColor: "#008080",
//                 color: "#fff",
//                 borderRadius: "4px",
//               }}
//             >
//               Save Change
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

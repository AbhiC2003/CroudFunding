import React, { useEffect, useState } from "react";
import { getPendingStartups, approveStartup } from "../utils/api";

const AdminDashboard = () => {
  const [pendingStartups, setPendingStartups] = useState([]);

  useEffect(() => {
    const fetchPendingStartups = async () => {
      const data = await getPendingStartups();
      setPendingStartups(data);
    };
    fetchPendingStartups();
  }, []);

  const handleApprove = async (id) => {
    await approveStartup(id);
    setPendingStartups(pendingStartups.filter((startup) => startup._id !== id));
  };

  return (
    <div>
      <h1>Pending Startups</h1>
      <ul>
        {pendingStartups.map((startup) => (
          <li key={startup._id}>
            {startup.name}
            <button onClick={() => handleApprove(startup._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

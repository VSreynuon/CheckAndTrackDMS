import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const usersData = [
  { name: "Alice", avatar: "https://i.pravatar.cc/50?img=1", isActive: true },
  { name: "Bob", avatar: "https://i.pravatar.cc/50?img=2", isActive: false },
  { name: "Charlie", avatar: "https://i.pravatar.cc/50?img=5", isActive: true },
  { name: "David", avatar: "https://i.pravatar.cc/50?img=4", isActive: false },
  { name: "Eve", avatar: "https://i.pravatar.cc/50?img=5", isActive: true },
  { name: "Frank", avatar: "https://i.pravatar.cc/50?img=4", isActive: false },
];

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState(usersData);
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chats, setChats] = useState({});
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) =>
        prevUsers.map((user) => ({
          ...user,
          isActive: Math.random() > 0.5,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!newMessage.trim()) return;

    setChats((prevChats) => {
      const updatedChats = { ...prevChats };
      updatedChats[selectedUser.name] = [
        ...(updatedChats[selectedUser.name] || []),
        { sender: "You", text: newMessage },
        { sender: selectedUser.name, text: `Reply: ${newMessage}` },
      ];
      return updatedChats;
    });
    setNewMessage("");
  };

  return (
    // justify-content-center
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3 border-end">
          <h5 className="mb-3">Message</h5>
          {/* search button */}
          <div className="d-flex  mb-3">
            <div
              className="input-group shadow-sm w-40"
              style={{ maxWidth: "400px" }}
            >
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
              />
            </div>
          </div>
          <ul className="list-group">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex align-items-center p-2 ${
                    selectedUser?.name === user.name ? "active bg-light" : ""
                  }`}
                  onClick={() => setSelectedUser(user)}
                  style={{ cursor: "pointer", borderRadius: "4px" }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="rounded-circle me-3"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="d-flex flex-column">
                    <span className="fw-bold">{user.name}</span>
                    <small className="text-muted">
                      {user.isActive ? "Online" : "Offline"}
                    </small>
                  </div>
                  <span
                    className="ms-auto"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: user.isActive ? "green" : "gray",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
                </li>
              ))
            ) : (
              <li className="list-group-item text-muted">No users found</li>
            )}
          </ul>
        </div>

        <div className="col-md-9">
          {selectedUser ? (
            <div className="chat-container border rounded p-3 shadow-sm">
              <div className="d-flex align-items-center mb-3 p-2 border-bottom">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h5 className="me-2">{selectedUser.name}</h5>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: selectedUser.isActive ? "green" : "gray",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <small className="ms-2 text-muted">
                  {selectedUser.isActive ? "Online" : "Offline"}
                </small>
              </div>

              <div
                className="chat-messages border rounded p-3 bg-light"
                style={{ height: "300px", overflowY: "auto" }}
              >
                {chats[selectedUser.name]?.length > 0 ? (
                  chats[selectedUser.name].map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded ${
                        msg.sender === "You"
                          ? "bg-primary text-white text-end"
                          : "bg-white"
                      }`}
                    >
                      {msg.sender}: {msg.text}
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No messages yet</p>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="mt-3 w-75 mx-auto">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <button type="submit" className="btn btn-success">
                    <i className="fas fa-paper-plane"></i> Send
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <p className="text-muted">Select a user to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;

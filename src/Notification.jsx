import React from "react";
import { useGlobalContext } from "./Components/AppContext";


function Notification() {
  const { notification } = useGlobalContext();
  console.log(notification);
  

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {notification.map((note) => (
        <div
          key={note.id}
          className={`alert alert-${note.type} alert-dismissible fade show`}
          role="alert"
        >
          {note.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ))}
    </div>
  );
}

export default Notification;
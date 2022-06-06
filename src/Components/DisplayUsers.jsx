import React from "react";

function DisplayUsers({users}) {
  return (
    <div className="container-fluid mt-4 " style={{maxWidth:'640px'}}>
      <ul className="list-group bg-light">
        {users.map((user, index)=>{
            return(
                <li key={index} className="list-group-item border border-rgb(27, 26, 26) list-group-item fw-bold ">{`${user.name} (${user.age} years old)`}</li>
            )
        })}
      </ul>
    </div>
  );
}

export default DisplayUsers;

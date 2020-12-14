import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PeoplePage(props) {
  const [name, setName] = useState("Sergey");
  const { id } = useParams();

  useEffect(() => console.log("Update"), [name]);

  return (
    <div className="people-page">
      Hi, {name}
      {id && (
        <React.Fragment>
          <br />
          Your id is {id}
        </React.Fragment>
      )}
    </div>
  );
}

export default PeoplePage;

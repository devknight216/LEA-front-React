import React, { useEffect } from "react";
import { Banner } from "components/basicui/basicui";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Messagespage() {
  const authToken = useSelector((state) => state.auth.token);
  const history = useHistory();
  useEffect(() => {
    if (!authToken) {
      history.push("/signin");
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-3 md:py-10">
        <span className="font-semibold text-3xl">Messages</span>
      </div>
      <Banner />
    </div>
  );
}

export default Messagespage;

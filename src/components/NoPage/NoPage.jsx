import React from "react";

function NoPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        404 Page Not Found (ไม่พบหน้าเว็บ)
      </h1>
      <img
        src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
        alt="404 Page Not Found"
        style={{
          width: "100%",
          height: "100%",
          padding: "10px",
          borderRadius: "15px",
        }}
      />
    </>
  );
}

export default NoPage;

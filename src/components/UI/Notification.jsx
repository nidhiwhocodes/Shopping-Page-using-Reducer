
function Notification({ status, title, message }) {
  let backgroundColor = "#258ac0";

  if (status === "success") {
    backgroundColor = "#43a047";
  }

  if (status === "error") {
    backgroundColor = "#d32f2f";
  }

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor,
        color: "white",
        padding: "16px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <strong>{title}</strong>
      <span>{message}</span>
    </div>
  );
}

export default Notification;
const DetailsMessage = ({ message }) => {
  return (
    <div style={{ flexDirection: "column" }}>
      {message.text && (
        <p
          style={{
            backgroundColor: "#F48444",
            width: "500px",
            height: "100px",
            borderRadius: "5%",
            position: "unset",
            // left: "70%",
            padding: "5%",
            paddingLeft: "10%",
            paddingBottom: "6%",
            marginLeft: "50%",
            marginTop: "2%",
          }}
        >
          {message.text}
        </p>
      )}
      {message.image ? (
        <img
          src={message.image}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10%",
            marginLeft: "55%",
            padding: "1%",
          }}
          
        />
      ) : (
        <img style={{ display: "none" }} />
      )}

    </div>
  );
};
export default DetailsMessage;

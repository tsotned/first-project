import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;

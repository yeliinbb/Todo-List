const Header = () => {
  return (
    <header style={styleHeader}>
      <h1>My Todo List</h1>
      <span>React</span>
    </header>
  );
};

export default Header;

// 스타일
const styleHeader = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

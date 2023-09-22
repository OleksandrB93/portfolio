import NavList from "./Navlist";

const Sidebar = () => {
  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 50 }}
      className=""
    >
      <div className="">
        <NavList />
      </div>
    </div>
  );
};

export default Sidebar;

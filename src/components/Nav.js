function Nav() {
  return (
    <div className="nav-bar">
      <img
        src={process.env.PUBLIC_URL + "images/airbnb-logo.svg"}
        alt="logo"
        width="100px"
      />
    </div>
  );
}

export default Nav;

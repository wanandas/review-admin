const myTheme = {
  global: {
    // changes here will affect more than one component at a time
    font: "Titillium Web"
  },
  anchor: {
    hover: {
      textDecoration: "none",
      extend: {
        color: "#dfe"
      }
    }
    // changes here will affect Anchor component only
  },
  button: {
    color: "#eee",
    hover: { color: "#111", primary: { color: "#111" } }
  }
};

export default myTheme;

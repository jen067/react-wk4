import { NavLink } from "react-router";

function Navbar() {
  const navBarContent = [
    { to: "/books/category/classic", label: "Classic" },
    { to: "/books/category/science-fiction", label: "Science-Fiction" },
    { to: "/books/category/romance", label: "Romance" },
    { to: "/books/category/adventure", label: "Adventure" },
    { to: "/books/category/horror", label: "Horror" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `mx-6 text-slate-400 text-xl font-medium transition-all duration-500 ease-in-out relative z-0 ${
              isActive ? "opacity-100 font-normal" : "opacity-60"
            } hover:opacity-100 hover:text-slate-800`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;

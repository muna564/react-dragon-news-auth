import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">All Categories</h2>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          key={category.id}
          className="block text-center text-xl font-semibold"
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;

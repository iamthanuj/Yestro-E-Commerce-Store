import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="container mx-auto mt-20 px-5 ">
      <h1 className="text-center text-5xl font-bold">Product Categories</h1>
      <div className="grid grid-cols-3 gap-3 max-w-[924px] mx-auto mt-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default Categories;

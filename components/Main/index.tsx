import React, { Suspense } from "react";
import { Room } from "@/types/ListDataTypes";
import Card from "../ui/Card";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://127.0.0.1:8000/api/getrooms", {
    next: {
      revalidate: 3000,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }

  const json = await res?.json();
  if (json.status == "success") {
    return json.data;
  } else {
    return console.error(json.message);
  }
}

const ListMenu = async () => {
  const data: Room[] = await getData();
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
};

export default ListMenu;

"use client";

import { CreateForm } from "./_components/create-form";
import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
interface CreateGigProps {
  params: {
    username: string;
  };
}

const CreateGig = ({ params }: CreateGigProps) => {
  const insertCategories = useMutation(api.seedCategories.create);
  useEffect(() => {
    insertCategories({});
  });

  return (
    <div className="flex justify-center">
      <CreateForm username={params.username} />
    </div>
  );
};
export default CreateGig;

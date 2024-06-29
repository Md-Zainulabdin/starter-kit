import React from "react";
import { redirect } from "next/navigation";

import { getAuth } from "@/lib/auth";
import BackButton from "@/components/static/BackButton";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = async ({ children }) => {
  const auth = await getAuth();

  if (!auth?.user) {
    redirect("/auth/login");
  }
  return (
    <div className="relative">
      <div className="absolute left-20 top-16 flex items-center justify-center">
        <BackButton />
      </div>
      <div className="flex min-h-screen w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

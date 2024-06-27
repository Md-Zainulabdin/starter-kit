import React from "react";

import BackButton from "@/components/static/BackButton";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = async ({ children }) => {
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

export default AuthLayout;

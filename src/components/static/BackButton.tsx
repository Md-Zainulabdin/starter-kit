"use client";

import { useRouter } from "next/navigation";
import { CornerUpLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          router.back();
        }}
      >
        <CornerUpLeft className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
  );
};

export default BackButton;

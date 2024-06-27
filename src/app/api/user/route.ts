import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    if (!email && !name && !password) {
      return new NextResponse("Email is required", { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    return NextResponse.json(user, {
      status: 201,
      statusText: "Registration Successfull",
    });
  } catch (error) {
    console.error("[USER-POST] Error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

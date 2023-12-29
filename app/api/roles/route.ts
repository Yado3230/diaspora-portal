import { NextResponse } from "next/server";
import fs from "fs";

const ROLES_FILE = "roles.json";

const readRoles = async (): Promise<{
  [key: string]: { permissions: { [key: string]: string[] } };
}> => {
  try {
    const data = await fs.promises.readFile(ROLES_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return {};
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { roleName, createdAt } = body;

    if (!roleName) {
      return new NextResponse("Role name is required", {
        status: 400,
      });
    }
    if (!createdAt) {
      return new NextResponse("Date is required", {
        status: 400,
      });
    }

    const roles = await readRoles();

    if (roles[roleName]) {
      return new NextResponse(`Role '${roleName}' already exists`, {
        status: 400,
      });
    }

    roles[roleName] = {
      permissions: body.permissions || {},
    };

    await fs.promises.writeFile(ROLES_FILE, JSON.stringify(roles));

    return NextResponse.json("Success");
  } catch (error) {
    console.log("[role_post]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const roles = await readRoles();
    return NextResponse.json(roles);
  } catch (error) {
    console.log("[roles_get]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const roles = await readRoles();

    if (roles[body.roleName]) {
      roles[body.roleName] = {
        permissions: body.permissions || {},
      };
      await fs.promises.writeFile(ROLES_FILE, JSON.stringify(roles));
      return NextResponse.json("Success");
    } else {
      return new NextResponse(`Role '${body.roleName}' not found`, {
        status: 404,
      });
    }
  } catch (error) {
    console.error("[roles_patch]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

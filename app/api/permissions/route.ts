import { NextResponse } from "next/server";
import fs from "fs";
import { PermissionTemplate } from "@/types/types";

const readTemplates = async (): Promise<PermissionTemplate[]> => {
  try {
    const data = await fs.promises.readFile("permissions.json", "utf8");
    return JSON.parse(data) as PermissionTemplate[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function POST(
  req: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const body = await req.json();

    const { permissionName, createdAt } = body;

    if (!permissionName) {
      return new NextResponse("permission name is required", {
        status: 400,
      });
    }
    if (!createdAt) {
      return new NextResponse("date is required", {
        status: 400,
      });
    }

    const templates = await readTemplates();
    body.permissionId = Math.random().toString(); // Generate unique ID
    templates.push(body);
    await fs.promises.writeFile("permissions.json", JSON.stringify(templates));

    return NextResponse.json("success");
  } catch (error) {
    console.log("[permission_post]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const templates = await readTemplates();

    return NextResponse.json(templates);
  } catch (error) {
    console.log("[permission_get]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const templates = await readTemplates();
    const index = templates.findIndex(
      (template) => template.id === body.id
    );
    if (index > -1) {
      templates[index] = body;
      await fs.promises.writeFile(
        "permissions.json",
        JSON.stringify(templates)
      );
    } else {
      console.error(`Template with ID ${body.id} not found`);
    }

    return NextResponse.json("success");
  } catch (error) {
    console.error("[permission_patch]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

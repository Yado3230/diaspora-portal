import { NextResponse } from "next/server";
import fs from "fs";
import { EmailTemplate } from "@/types/types";

const readTemplates = async (): Promise<EmailTemplate[]> => {
  try {
    const data = await fs.promises.readFile("email.json", "utf8");
    return JSON.parse(data) as EmailTemplate[];
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

    const { id, title, body: emailBody, subject } = body;

    if (!title) {
      return new NextResponse("title is required", {
        status: 400,
      });
    }
    if (!emailBody) {
      return new NextResponse("email body is required", {
        status: 400,
      });
    }

    if (!subject) {
      return new NextResponse("subject is required", { status: 400 });
    }

    const templates = await readTemplates();
    body.id = Math.random().toString(); // Generate unique ID
    templates.push(body);
    await fs.promises.writeFile("email.json", JSON.stringify(templates));

    return NextResponse.json("success");
  } catch (error) {
    console.log("[email_post]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const templates = await readTemplates();

    return NextResponse.json(templates);
  } catch (error) {
    console.log("[email_get]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    console.log("body", body);

    const templates = await readTemplates();
    const index = templates.findIndex((template) => template.id === body.id);
    if (index > -1) {
      templates[index] = body;
      await fs.promises.writeFile("email.json", JSON.stringify(templates));
    } else {
      console.error(`Template with ID ${body.id} not found`);
    }

    return NextResponse.json("success");
  } catch (error) {
    console.error("[email_patch]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { BuilderWebhook } from "./types";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const rawBody = await req.text();
  const data = JSON.parse(rawBody) as BuilderWebhook;

  if (!data) {
    return NextResponse.json({ status: 401 });
  }

  // pages and section models
  if (data.modelName === "page") {
    const pageUrl = data.newValue.query.find(
      (item) => item.property === "urlPath"
    )?.value;
    if (pageUrl) {
      revalidateTag(pageUrl);
    }
  }

  return NextResponse.json({
    status: 200,
    message: "Webhook received and processed",
  });
}

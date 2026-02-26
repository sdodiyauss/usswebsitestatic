import { NextResponse } from "next/server";
import { processDemoCareerForm } from "../../api/sendCareerContactFormDemo/shared";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const result = await processDemoCareerForm(formData);

    const redirectUrl = new URL(
      result.success
        ? "/demo-career-form/success"
        : "/demo-career-form/error",
      request.url
    );

    if (!result.success && result.message) {
      redirectUrl.searchParams.set("message", result.message);
    }

    return NextResponse.redirect(redirectUrl, {
      status: result.success ? 303 : 302,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Demo form submit route error:", error);
    const redirectUrl = new URL("/demo-career-form/error", request.url);
    redirectUrl.searchParams.set(
      "message",
      "We could not submit your request. Please try again."
    );
    return NextResponse.redirect(redirectUrl, {
      status: 302,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}


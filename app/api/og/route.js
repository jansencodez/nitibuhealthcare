import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "Medical Product";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#f3f4f6",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          {name}
        </div>
      ),
      {
        width: 600,
        height: 400,
      }
    );
  } catch (error) {
    console.error("OG Image Error:", error);
    return new Response(JSON.stringify({ error: "Image generation failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

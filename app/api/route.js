import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const urlValue = url.searchParams.get("url");

  console.log(`Fetching API with URL: ${urlValue}`);

  try {
    const apiUrl = `https://ulvis.net/API/write/get?url=${encodeURIComponent(
      `https://www.${urlValue}`
    )}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return new NextResponse("Failed to fetch from API", {
        status: response.status,
      });
    }

    const data = await response.text(); // or response.json() if JSON
    console.log(`API Response: ${data}`);
    return new NextResponse(data);
  } catch (error) {
    console.error("Error fetching API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

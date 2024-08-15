import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const urlValue = url.searchParams.get("url");

  console.log(`Fetching API with URL: ${urlValue}`);

  try {
    const apiUrl = "https://api.t.ly/api/v1/link/shorten";

    const headers = {
      Authorization:
        "Bearer OUljwKkUtqQDMH2ubfXGDCLoi6m0KAvdnmFnok8OEV5gNOCxn10AqY0jDdIq",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      long_url: `https://www.${urlValue}`,
      domain: "https://t.ly/",
      expire_at_datetime: "2035-01-17 15:00:00",
      description: "Shortened Link",
      public_stats: true,
      meta: {
        smart_urls: [
          {
            type: "US",
            url: "usa.com",
          },
          {
            type: "iPhone",
            url: "apple.com",
          },
        ],
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return new NextResponse("Failed to fetch from API", {
        status: response.status,
      });
    }

    const data = await response.text();
    return new NextResponse(data);
  } catch (error) {
    console.error("Error fetching API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

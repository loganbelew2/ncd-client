import { NextResponse } from "next/server";
import { Client, Environment } from "square";

// Initialize Square Client
const client = new Client({
  bearerAuthCredentials: {
    accessToken: process.env.SQUARE_ACCESS_TOKEN as string,
  },
  environment: Environment.Production,
});

export async function POST() {
  try {
    const today = new Date().toISOString();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    const endDate = oneMonthLater.toISOString();

    console.log("Calling Square API...");

    const response = await client.bookingsApi.searchAvailability({
      query: {
        filter: {
          startAtRange: {
            startAt: today,
            endAt: endDate,
          },
          segmentFilters: [
            {
              serviceVariationId: "EO7KNGBWZVWV3KP5JOOV7EAA",
            },
          ],
          locationId: process.env.SQUARE_LOCATION_ID as string,
        },
      },
    });

    console.log("Square API response received");
    
    // Function to handle BigInt serialization
    const serializeBigInt = (obj: any) => {
      return JSON.parse(
        JSON.stringify(obj, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );
    };

    // Use the function to serialize the response data
    const serializedData = serializeBigInt(response.result);

    return NextResponse.json(serializedData);
  } catch (error: any) {
    console.error("Error fetching availability:", error.message);
    console.error("Full error details:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

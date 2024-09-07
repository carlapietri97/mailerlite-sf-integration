import { serve } from "https://deno.land/std@0.222.1/http/server.ts";

const handleRequest = async (req) => {
  if (req.method === "POST") {
    try {
      const jsonData = await req.json();
      console.log("Received Data:", jsonData);

      const response = {
        message: "Webhook received",
        receivedData: jsonData,
      };

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
};

serve(handleRequest, { port: 8000 });
console.log("HTTP server is running on http://localhost:8000");

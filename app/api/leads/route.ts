export async function POST(request: any) {
  const body = await request.json();

  console.log("Lead received:", body);

  return Response.json({
    success: true,
    message: "Thank you! We'll be in touch.",
  });
}

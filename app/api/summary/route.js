export async function POST(req) {
  const { id } = await req.json();
  const url = "https://flaskdata.ngrok.app/receive_id";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  };
  const res = await fetch(url, requestOptions);

  const data = await res.json();

  return Response.json(data);
}

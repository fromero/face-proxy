async function handleRequest(request) {
    const response = await fetch("https://face.gob.es/api/v2/relaciones?cif=P0200300B", {
    headers: {
      accept: "application/json",
    },
  });
  if (response.ok) {
    const res = await response.json();
    return new Response(JSON.stringify(res), {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin":  "*",
        "Access-Control-Allow-Methods": "*",
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

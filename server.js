async function handleRequest(request) {
    const cif = new URL(request.url).searchParams.get("cif");
    console.debug("Buscando para el cif: ", cif);
    const response = await fetch(`https://face.gob.es/api/v2/relaciones?cif=${cif}` , {
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

  return new Response(
    JSON.stringify({ message: "couldn't process your request" }),
    {
      status: 500,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

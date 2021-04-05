import {ServerRequest} from 'https://deno.land/std@0.53.0/http/server.ts'
async function handleRequest(request: ServerRequest) {
    const response = await fetch("https://https://face.gob.es/api/v2/relaciones?cif=P0200300B", {
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

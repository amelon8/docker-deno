import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import { yoga } from "./yoga-server.ts";

serve(yoga, {
  hostname: "0.0.0.0",
  port: 8009,
  onListen({ hostname, port }) {
    console.log(
      `Listening on http://${hostname}:${port}/${yoga.graphqlEndpoint}`,
    );
  },
});

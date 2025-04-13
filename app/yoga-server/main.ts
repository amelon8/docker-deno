import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import { yoga } from "./yoga-schema.ts";

serve(yoga, {
  port: 8009,
  onListen({ hostname, port }) {
    console.log(
      `Listening on http://${hostname}:${port}/${yoga.graphqlEndpoint}`,
    );
  },
});

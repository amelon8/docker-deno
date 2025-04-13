import { createYoga } from "graphql-yoga";
import { schema } from "./yoga-schema.ts";

export const yoga = createYoga({ schema });

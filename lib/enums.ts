import * as z from "zod";

const MPARating = z.enum(["G", "PG", "PG-13", "R", "NC-17"]);
type MPARating = z.infer<typeof MPARating>;

export { MPARating };

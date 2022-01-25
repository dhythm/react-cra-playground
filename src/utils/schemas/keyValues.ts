import { z } from "zod";

const KeyValue = z.object({
  key: z.string(),
  value: z.string().optional(),
});

export const KeyValues = z.array(KeyValue).refine((data) => {
  return data.every((e, i, a) => a.findIndex((v) => v.key === e.key) === i);
}, "duplicated key is detected!");

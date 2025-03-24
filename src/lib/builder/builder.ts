import { fetchOneEntry, GetContentOptions } from "@builder.io/sdk-react-nextjs";
import { cache } from "react";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "";

export const builderFetchOneEntry = cache(
  ({
    model,
    options,
    userAttributes,
    query,
    fields,
  }: Omit<GetContentOptions, "apiKey">) => {
    return fetchOneEntry({
      cacheSeconds: 0,
      staleCacheSeconds: 0,
      apiKey,
      model,
      options: { ...options, cachebust: "true", noCache: "true" },
      userAttributes,
      query,
      fields,
      fetchOptions: {
        cache: "no-cache",
      },
    });
  }
);

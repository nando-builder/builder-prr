import { ExampleComponentInfo } from "@/components";
import { builderFetchOneEntry } from "@/lib/builder/builder";
import { Content } from "@builder.io/sdk-react-nextjs";
import { unstable_cache } from "next/cache";
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "";
export const dynamicParams = true;
export const experimental_ppr = true;

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
  searchParams: Promise<Record<string, string>>;
}

type BuilderPage = {
  urlPath: string;
};

const builderPage = ({ urlPath }: BuilderPage) => {
  const cachePage = unstable_cache(
    async ({ urlPath }: BuilderPage) =>
      builderFetchOneEntry({
        model: "page",
        userAttributes: {
          urlPath,
        },
      }),
    [],
    {
      tags: [urlPath],
    }
  );
  return cachePage({ urlPath });
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const urlPath = `/${params.slug?.join("/") ?? ""}`;

  const contentPage = await builderPage({
    urlPath,
  });

  return (
    <Content
      apiKey={apiKey}
      content={contentPage}
      customComponents={[ExampleComponentInfo]}
      model="page"
    />
  );
}

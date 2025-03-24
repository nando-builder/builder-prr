import { ExampleComponentInfo } from "@/components";
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-react-nextjs";
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const urlPath = `/${params.slug?.join("/") ?? ""}`;
  const options = getBuilderSearchParams(searchParams);

  const contentPage = await fetchOneEntry({
    model: "page",
    apiKey,
    options,
    userAttributes: { urlPath },
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

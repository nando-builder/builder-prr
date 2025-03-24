import type { BuilderFields, GenerateItems } from "@/lib/builder/helper";
import type {
  ComponentInfo,
  RegisteredComponent,
} from "@builder.io/sdk-react-nextjs";
import { createRegisterComponentMessage } from "@builder.io/sdk-react-nextjs";

export type ExampleComponentProps = BuilderFields<
  GenerateItems<(typeof inputData)["inputs"]>
>;

export const inputData = {
  name: "Example component",
  isRSC: true,
  inputs: [
    {
      name: "content",
      type: "string",
      friendlyName: "Content",
      defaultValue:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, fugit.",
    },
  ],
} as const satisfies ComponentInfo;

const ExampleComponent = (props: ExampleComponentProps) => {
  return (
    <section className="bg-green-300">
      <div className="container mx-auto py-10">
        <h1>{props.content}</h1>
      </div>
    </section>
  );
};

export { ExampleComponent };

export const ExampleComponentInfo = {
  component: ExampleComponent,
  ...createRegisterComponentMessage(inputData).data,
} satisfies RegisteredComponent;

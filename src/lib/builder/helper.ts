/* eslint-disable @typescript-eslint/no-explicit-any -- file is a type definition file */
// Type definitions for builderio-type-extensions
// Project: https://github.com/davedbase/builderio-field-types#readme
// Definitions by: David Di Biase <https://github.com/davedbase>
// TypeScript Version: 4.0

/**
 * Builder Type Extensions is a set of helpful extension definitions for writing
 * powerful well structured TypeScript codebases. The current library contains
 * support for input field extraction.
 */

import type {
  BuilderBlock,
  ComponentInfo as BuilderInput,
} from "@builder.io/sdk-react-nextjs";

export type BuilderFields<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: BuilderFields<O[K]> }
    : never
  : T;

type NotWrappable =
  | string
  | number
  | bigint
  | symbol
  | boolean
  | Function
  | null
  | undefined;

type DeepReadonly<T> = 0 extends 1 & T
  ? T
  : T extends NotWrappable
  ? T
  : {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    };

export type Input = DeepReadonly<BuilderInput>;

export type GenerateItem<T> = T extends {
  type: "list";
  subFields: infer S extends readonly any[];
}
  ? GenerateItems<S>[]
  : T extends { type: "object"; subFields: infer S extends readonly any[] }
  ? GenerateItems<S>
  : T extends { type: infer Type extends string }
  ? Type extends "string"
    ? T extends { enum: infer SE extends readonly string[] }
      ? SE[number]
      : string
    : Type extends
        | "file"
        | "date"
        | "richText"
        | "color"
        | "email"
        | "longText"
        | "url"
    ? string
    : Type extends "boolean"
    ? boolean
    : Type extends "number"
    ? number
    : Type extends "reference"
    ? object
    : Type extends "uiBlocks"
    ? BuilderBlock[]
    : never
  : never;

export type GenerateItems<T extends readonly any[]> = {
  [K in keyof T & `${bigint}` as T[K] extends {
    name: infer N extends string;
    required?: false;
  }
    ? N
    : never]?: GenerateItem<T[K]>;
} & {
  [K in keyof T & `${bigint}` as T[K] extends {
    name: infer N extends string;
    required: true;
  }
    ? N
    : never]: GenerateItem<T[K]>;
};

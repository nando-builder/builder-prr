/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface BuilderWebhook {
  newValue: NewValue;
  previousValue: PreviousValue;
  modelName: string;
  operation: string;
}

export interface NewValue {
  "@version": number;
  createdBy: string;
  createdDate: number;
  data: Record<string, any>;
  firstPublished: number;
  folders: any[];
  id: string;
  lastUpdateBy: string;
  lastUpdated: number;
  lastUpdatedBy: string;
  meta: Meta;
  metrics: Metrics;
  modelId: string;
  name: string;
  ownerId: string;
  priority: number;
  published: string;
  query: Query[];
  testRatio: number;
  variations: Variations;
}

export interface Query {
  "@type": string;
  operator: string;
  property: string;
  value: string;
}

export interface Meta {
  breakpoints: Breakpoints;
  kind: string;
  lastPreviewUrl: string;
  shopifyDomain: string;
}

export interface Breakpoints {
  medium: number;
  small: number;
}

export interface Metrics {
  clicks: number;
  impressions: number;
}

export interface PreviousValue {
  "@version": number;
  createdBy: string;
  createdDate: number;
  data: Record<string, any>;
  firstPublished: number;
  folders: any[];
  id: string;
  lastUpdateBy: string;
  lastUpdated: number;
  lastUpdatedBy: string;
  meta: Meta2;
  metrics: Metrics2;
  modelId: string;
  name: string;
  ownerId: string;
  priority: number;
  published: string;
  query: any[];
  testRatio: number;
  variations: Variations2;
}

export interface Meta2 {
  breakpoints: Breakpoints2;
  kind: string;
  lastPreviewUrl: string;
  shopifyDomain: string;
}

export interface Breakpoints2 {
  medium: number;
  small: number;
}

export interface Metrics2 {
  clicks: number;
  impressions: number;
}

export interface Variations {}

export interface Variations2 {}

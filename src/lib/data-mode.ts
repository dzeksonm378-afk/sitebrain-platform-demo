import type { DataMode } from "@/types/sitebrain";

const dataModes = ["mock", "hybrid", "live"] satisfies DataMode[];

function isDataMode(value: string | undefined): value is DataMode {
  return dataModes.some((mode) => mode === value);
}

export function getDataMode(): DataMode {
  const value = process.env.NEXT_PUBLIC_SITEBRAIN_DATA_MODE;

  if (isDataMode(value)) {
    return value;
  }

  return "mock";
}

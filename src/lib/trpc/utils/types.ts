import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import type { AppRouter } from "~/lib/trpc/root"

export type ProcedureInput = inferRouterInputs<AppRouter>
export type ProcedureOutput = inferRouterOutputs<AppRouter>

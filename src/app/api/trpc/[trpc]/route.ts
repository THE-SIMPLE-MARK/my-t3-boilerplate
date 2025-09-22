import "server-only"

import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { type NextRequest } from "next/server"

import env from "~/env"
import { appRouter } from "~/lib/api/trpc/root"
import { createTRPCContext } from "~/lib/api/trpc"

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
function createContext() {
	return createTRPCContext()
}

function handler(req: NextRequest) {
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext,
		onError:
			env.NODE_ENV === "development"
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
						)
					}
				: undefined,
	})
}

export { handler as GET, handler as POST }

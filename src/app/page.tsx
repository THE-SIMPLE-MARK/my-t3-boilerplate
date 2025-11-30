import { LatestPost } from "~/components/post"
import { api, getQueryClient } from "~/lib/trpc/server"
import { HydrateClient, prefetch } from "~/lib/trpc/utils/prefetch"

export default async function Home() {
	const queryClient = getQueryClient()
	await prefetch(api.post.hello.queryOptions({ text: "from tRPC" }))
	const hello = queryClient.getQueryData(
		api.post.hello.queryKey({ text: "from tRPC" }),
	)

	void prefetch(api.post.getLatest.queryOptions())

	return (
		<HydrateClient>
			<main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-gray-950 to-gray-900 text-gray-200">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
					<div className="text-center space-y-2">
						<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
							Create{" "}
							<span className="text-[hsl(280,100%,70%)] line-through">T3</span>{" "}
							<span className="bg-clip-text text-transparent bg-linear-to-br from-cyan-600 to-cyan-700">
								Mark's
							</span>{" "}
							App
						</h1>

						<p className="text-lg">
							Next.js + Tailwind CSS + tRPC + Drizzle ORM
						</p>
					</div>

					<div className="w-full max-w-md rounded-lg flex flex-col gap-2 p-4 bg-gray-900 shadow-xl border border-gray-800">
						<h2 className="text-2xl font-bold">TRPC tests</h2>
						<h3 className="text-lg font-medium">Query</h3>

						<p className="text-2xl text-white text-center">
							{hello ? hello.greeting : "Loading..."}
						</p>

						<h3 className="text-lg font-medium">Mutation + query</h3>

						<LatestPost />
					</div>
				</div>
			</main>
		</HydrateClient>
	)
}

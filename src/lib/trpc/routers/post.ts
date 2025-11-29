import { desc } from "drizzle-orm"
import { z } from "zod"
import { db } from "~/lib/db"
import { posts } from "~/lib/db/schema"
import { createTRPCRouter } from "~/lib/trpc"
import { publicProcedure } from "~/lib/trpc/procedures/public"

export const postRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			}
		}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ input }) => {
			const newPosts = await db
				.insert(posts)
				.values({ name: input.name })
				.returning()

			return newPosts[0]
		}),

	getLatest: publicProcedure.query(async () => {
		const latestPost = await db.query.posts.findFirst({
			orderBy: desc(posts.createdAt),
		})

		return latestPost ?? null
	}),
})

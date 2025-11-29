import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const posts = pgTable(
	"Post",
	{
		id: serial("id").primaryKey(),
		name: text("name").notNull(),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.defaultNow()
			.notNull()
			.$onUpdate(() => new Date()),
	},
	posts => [
		{
			nameIndex: index("nameIndex").on(posts.name),
		},
	],
)

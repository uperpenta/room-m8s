import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { conversations, likes } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const conversationRouter = createTRPCRouter({
  getOwnConversations: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.conversations.findMany({
      where: (c, { or, eq }) =>
        or(
          eq(c.userAId, ctx.session.user.id),
          eq(c.userBId, ctx.session.user.id),
        ),
      orderBy: (c, { desc }) => [desc(c.createdAt)],
    });
  }),
  deleteConversation: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(conversations).where(eq(conversations.id, input.id));
    }),
});

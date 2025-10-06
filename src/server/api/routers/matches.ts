import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { likes, conversations } from "~/server/db/schema";
import { logger } from "~/server/logger/logger";

export const matchRouter = createTRPCRouter({
  likeUser: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const currentUserId = ctx.session.user.id;

      await ctx.db.insert(likes).values({
        likerId: ctx.session.user.id,
        likedId: input.id,
      });

      const mutual = await ctx.db.query.likes.findFirst({
        where: (l, { and, eq }) =>
          and(eq(l.likerId, input.id), eq(l.likedId, currentUserId)),
      });

      if (mutual) {
        const [userAId, userBId] =
          currentUserId < input.id
            ? [currentUserId, input.id]
            : [input.id, currentUserId];

        await ctx.db.insert(conversations).values({
          userAId,
          userBId,
        });

        logger.info("Conversation created between matched users", {
          userAId,
          userBId,
        });
      } else {
        logger.info("User already liked", {
          likerId: ctx.session.user.id,
          likedId: input.id,
        });
      }
    }),
});

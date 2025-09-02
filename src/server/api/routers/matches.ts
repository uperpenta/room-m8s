import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { likes, conversations } from "~/server/db/schema";

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
      }

      
    }),
});

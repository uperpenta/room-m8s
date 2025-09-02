import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { conversations } from "~/server/db/schema";


export const conversationRouter = createTRPCRouter({
  


});
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const pollValidationSchema = z.object({
  title: z.string().max(40),
  content: z.string(),
  options: z.array(z.string()),
  creatorId: z.string(),
  privacy: z.enum(["public", "private"]),
});

export const topicsRouter = createTRPCRouter({
  getallPublic: publicProcedure.query(async ({ ctx }) => {
    const publicPolls = await ctx.prisma.topic.findMany({
      where: {
        privacy: "public",
      },
    });

    return {
      polls: publicPolls,
    };
  }),

  create: protectedProcedure
    .input(pollValidationSchema)
    .mutation(async ({ ctx, input }) => {
      const prisma = ctx.prisma;
      try {
        await prisma.topic.create({
          data: input,
        });
        return {
          status: "success",
        };
      } catch (error) {
        return {
          status: "fail",
          error: error,
        };
      }
    }),
});

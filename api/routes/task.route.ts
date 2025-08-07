import { Router } from "express";
import { db } from "../prisma/db";
import { z } from "zod";
import { Task } from "../generated/prisma";

const taskRouter = Router()

taskRouter.get('/', async (_req, res) => {
  const tasks = await db.task.findMany()

  return res.status(200).json({ tasks });
})

taskRouter.post('/', async (req, res) => {
  const createTaskSchema = z.object({
    title: z.string(),
    completed: z.boolean().default(false).optional(),
  })

  const parsedData = createTaskSchema.safeParse(req.body)

  if(!parsedData.success) {
    return res.status(400).json({
      error: "Invalid data",
      issues: parsedData.error.issues,
    })
  }

  let  newTask: Task
  try {
    newTask = await db.task.create({
      data: parsedData.data
    })
  } catch (error) {
    console.log("🚀 ~ error:", error)
    return res.status(500).json({ error: "Failed to create task" });
  }

  return res.status(201).json({ message: "Task created successfully!", data: newTask });
})

export { taskRouter }
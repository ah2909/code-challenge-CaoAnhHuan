
import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client'

export const postRouter = Router();
const prisma = new PrismaClient()

postRouter.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

postRouter.get(`/post`, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await prisma.post.findMany()
        if(post.length === 0) {
            res.json({ message: 'No post found' })
            return
        }
        res.json(post)
    } catch (error) {
       next(error) 
    }
})

postRouter.get(`/post/:id`, async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
        })
        if(!post) {
            res.json({ message: `No post found with id ${id}` })
            return
        }
        res.json(post)
    } catch (error) {
        next(error)
    }
})

postRouter.post(`/post`, async (req: Request, res: Response, next: NextFunction) => {
    const { title, author } = req.body
    try {
        const result = await prisma.post.create({
            data: {
                title,
                author 
            },
        })
        res.status(201).json(result)
    } catch (error) {
        next(error);
    }
})

postRouter.put('/post/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { title, author } = req.body

    try {
        const postData = await prisma.post.findUnique({
            where: { id: Number(id) },
        })
        if (!postData) {
            res.json({ message: `No post found with id ${id}` })
            return
        }
        const updatedPost = await prisma.post.update({
            where: { id: Number(id) },
            data: { 
                title: title || postData?.title, 
                author: author || postData?.author 
            },
        })
        res.json(updatedPost)
    } catch (error) {
        next(error)
    }
})

postRouter.delete(`/post/:id`, async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const post = await prisma.post.delete({
            where: {
                id: Number(id),
            },
        })
        if(!post) {
            res.json({ message: `No post found with id ${id}` })
            return
        }
        res.json(post)
    } catch (error) {
        next(error)
    }
})
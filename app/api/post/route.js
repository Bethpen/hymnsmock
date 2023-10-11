// url: "http://localhost:3000/api/post"


import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const prisma = new PrismaClient()
    const {title, description, published} = await request.json();

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                description,
                published
            }
        })

        return NextResponse.json(newPost)
    } catch (error) {
        NextResponse.json({
            message: "Post not created",
            err
        },
        {
            status: 500
        })

    }
}


export const GET = async () => {
    const prisma = new PrismaClient()
    try {
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts)
    } catch (error) {
        NextResponse.json({
            message: "Get Error",
            err
        },
        {
            status: 500
        })

    }
}
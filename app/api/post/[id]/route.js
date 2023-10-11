// url: "http://localhost:3000/api/post/123"


import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export const PATCH = async (request, {params}) => {
    const prisma = new PrismaClient()
    const {title, description} = await request.json();
    const {id} = params;
    

    try {

        const updatePost = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })

        if(!updatePost){
            return NextResponse({
                message: "Post not found"
            }, {status: 404})
        }

        return NextResponse.json(updatePost)
    } catch (error) {
        NextResponse.json({
            message: "Post not updates",
            err
        },
        {
            status: 500
        })

    }
}


export const GET = async (request, {params}) => {
    const prisma = new PrismaClient()

    const {id} = params
    
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });

        if(!post){
            return NextResponse({
                message: "Post not found"
            }, {status: 404})
        }

        return NextResponse.json(post)
    } catch (error) {
        NextResponse.json({
            message: "Get Error",
        },
        {
            status: 500
        })

    }
}


export const DELETE = async (request, {params}) => {
    const prisma = new PrismaClient()

    const {id} = params
    
    try {
        await prisma.post.delete({
            where: {
                id
            }
        });

        return NextResponse.json("post deleted")
    } catch (error) {
        NextResponse.json({
            message: "Delete Error",
        },
        {
            status: 500
        })

    }
}
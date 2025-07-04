
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import { prisma } from "@/prisma/client";

const CreateissueSchema=z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1)
})

export async function POST(request:NextRequest){
    const body=await request.json()
    const validation=CreateissueSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400}) //bad request ,client set invalid data
    }
    const newIssue=await prisma.issue.create({
        data:{title:body.title,description:body.description}
    })

    return NextResponse.json(newIssue,{status:201})//object is created

}
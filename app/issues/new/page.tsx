'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useForm} from 'react-hook-form'

interface IssueForm{
    title:String,
    description:String
}

const NewIssuepage = () => {
    const router=useRouter()
    const {register,handleSubmit}=useForm<IssueForm>()

    const onsubmit=async(data:IssueForm)=>{
        try{
            const response=await fetch('/api/issues',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
                
            })
            if(!response.ok){
                const errorData=await response.json()
                throw new Error(errorData.message || 'Failed to create issue');
            }
            const result=await response.json()
            console.log('Issue created successfully:', result);
            router.push('/issues')
        }
        catch(error){
            console.error('Error submitting issue:', error);

        }
    }

    

  return (
    <form className='max-w-xl space-y-4' onSubmit={handleSubmit(onsubmit)}>
      <TextField.Root placeholder='Title' {...register('title')} ></TextField.Root>
      <TextArea placeholder="Description"  {...register('description')}/>
      <Button>Add new Issue</Button>
    </form>
  )
}

export default NewIssuepage

'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuepage = () => {
  return (
    <div className='max-w-xl space-y-4'>
      <TextField.Root placeholder='Title'></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Add new Issue</Button>
    </div>
  )
}

export default NewIssuepage

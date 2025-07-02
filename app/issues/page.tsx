import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
const IssuesPage = () => {
  return (
    <div>
      Issues Page
      <br/><Button><Link href={'/issues/new'}>Add Issue</Link></Button>
    </div>
  )
}

export default IssuesPage

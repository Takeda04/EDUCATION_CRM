import React from 'react'
import { Section } from '../static/tags'
import { Box } from '@mui/material'
import Header from '../components/Header/Header'

const Layout = ({children}) => {
  return (
    <Section className='flex justify-center'>
        <Section className='w-full h-screen flex flex-col items-center justify-start'>
            <Header/>
            <Box className="w-full h-full flex items-center justify-center px-[10em] bg-blue-100">
                {children}
            </Box>
        </Section>
    </Section>
  )
}

export default Layout
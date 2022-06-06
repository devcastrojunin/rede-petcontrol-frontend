import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function TemplateAuth() {

  return (
    <>
      <Box bg='#EDFDFD'>
        <Outlet />
      </Box>
    </>
  )
}
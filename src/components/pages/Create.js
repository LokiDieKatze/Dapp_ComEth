import { Box } from "@chakra-ui/layout"
import CreateTemplate from "../templates/CreateTemplate"
const Create = () => {
  return (
    <>
    {/* TODO : faire la page front joulie */}
    <Box h="100vh" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
      <CreateTemplate />
      </Box>
    </>
  )
}
export default Create

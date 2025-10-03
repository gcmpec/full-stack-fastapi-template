import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()
  const fallbackEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("last_login_email")
      : null
  const welcomeEmail = currentUser?.email ?? fallbackEmail ?? ""

  return (
    <Container maxW="full">
      <Box pt={12} m={4}>
        <Text fontSize="2xl" truncate maxW="sm">
          {welcomeEmail ? `Bem-vindo, ${welcomeEmail}!` : "Bem-vindo!"}
        </Text>
        <Text>O login foi efetuado com sucesso.</Text>
      </Box>
    </Container>
  )
}

export default Dashboard

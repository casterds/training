import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function LoginPrompt({ signIn }: { signIn: any }) {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box
        p={8}
        bg="pink.400"
        borderRadius="lg"
        mx={8}
        boxShadow="md"
        textAlign="center"
      >
        <Image
          src="/metamask.png"
          alt="Metamask Logo"
          width={200}
          height={200}
          mx="auto"
          mb={4}
        />
        <Button
          onClick={signIn}
          fontSize="lg"
          fontWeight="bold"
          mb={2}
          whiteSpace="initial"
        >
          Sign In With Ethereum
        </Button>
      </Box>
    </Flex>
  );
}

export default LoginPrompt;

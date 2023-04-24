import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function WalletNotConnected() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box
        p={8}
        bg="gray.500"
        borderRadius="lg"
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
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Connect your wallet to continue
        </Text>
        <Text fontSize="md">
          Don't have a wallet yet?{' '}
          <a
            href="https://metamask.io/download.html"
            target="_blank"
            rel="noreferrer"
          >
            Download Metamask
          </a>{' '}
          to get started.
        </Text>
      </Box>
    </Flex>
  );
}

export default WalletNotConnected;

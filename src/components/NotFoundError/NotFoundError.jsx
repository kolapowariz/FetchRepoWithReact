import React from 'react';
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function NotFoundError() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" textAlign="center" bg="gray.100" p={5}>
      <Heading color="red.500" size="2xl" mb={4}>404: Page Not Found</Heading>
      <Text color="gray.500" fontSize="xl" mb={4}>The page you are looking for does not exist.</Text>
      <Text mb={4}>Please try refreshing the page or go back to the homepage.</Text>
      <Link to="/">
        <Button colorScheme="teal" variant="outline">
          Go to Homepage
        </Button>
      </Link>
    </Box>
  );
}

export default NotFoundError;
"use client";

import { Stack, Heading, Text, Button } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const LandingPage = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="3xl">
        Welcome to Networthy! 🤑
      </Heading>

      <Text fontSize="2xl" align="center">
        {
          "You work 1/3rd of your life for money. Find out how much that's worth."
        }
      </Text>

      <Button
        alignSelf="center"
        colorScheme="teal"
        variant="solid"
        rightIcon={<FaExternalLinkAlt />}
      >
        <a
          href="https://airtable.com/shrwFNj5967PcQfzh"
          target="_blank"
          rel="noreferrer"
        >
          Get Notified
        </a>
      </Button>
    </Stack>
  );
};

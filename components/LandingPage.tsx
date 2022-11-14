"use client";

import { Stack, Heading, Text } from "@chakra-ui/react";

interface LandingPageProps {
  heading: string;
  subHeading: string;
  cta: React.ReactNode;
}

export const LandingPage = ({ heading, subHeading, cta }: LandingPageProps) => {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="3xl">
        {heading}
      </Heading>

      <Text fontSize="2xl" align="center">
        {subHeading}
      </Text>

      {cta}
    </Stack>
  );
};

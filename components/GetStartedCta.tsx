"use client";

import { Button } from "@chakra-ui/react";
import { MagicLink } from "components/MagicLink";

export const GetStartedCta = () => {
  return (
    <Button alignSelf="center" colorScheme="teal" variant="solid" size="lg">
      <MagicLink href="/assets">{"Let's get started!"}</MagicLink>
    </Button>
  );
};

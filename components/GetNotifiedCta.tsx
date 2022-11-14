"use client";

import { Button } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const GetNotifiedCta = () => {
  return (
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
  );
};

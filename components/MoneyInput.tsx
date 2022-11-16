/* eslint-disable react/no-children-prop */
"use client";
import { useField } from "formik";

import { InputHTMLAttributes } from "react";
import {
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Tooltip,
  Flex,
  InputProps,
} from "@chakra-ui/react";
import { numWords } from "utils/numWords";

import { FaCheck, FaInfoCircle } from "react-icons/fa";

interface MoneyInputProps extends InputProps {
  name: string;
  label?: string;
}

const maxAmount: number = 999999999;

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

const sentenceToUpperCase = (words: string) => {
  return words
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const numberInWords = (value: number) => {
  if (value > maxAmount) {
    return "Mr. Ambani this isn't the app for you 🙇🏻‍♂️";
  }
  return sentenceToUpperCase(numWords(value));
};

export const MoneyInput = ({ value, label, ...props }: MoneyInputProps) => {
  return (
    <Stack>
      <FormControl>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="INR"
          />
          <Input value={value} {...props} variant="flushed" />
        </InputGroup>
      </FormControl>
      <Flex align="center">
        <Tooltip label={numberInWords(Math.floor(Number(value)))} fontSize="md">
          <span>
            <FaInfoCircle />
          </span>
        </Tooltip>
        <Text fontSize="sm" ml={2}>
          {formatAmount(Number(value))}
        </Text>
      </Flex>
    </Stack>
  );
};

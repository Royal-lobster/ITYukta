import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";

export type NextChakraImageProps = Omit<BoxProps, "as"> & ImageProps;

export const Image = ({ src, alt, ...rest }: NextChakraImageProps) => (
  <Box {...rest} position="relative">
    <NextImage
      objectFit="cover"
      layout="fill"
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
    />
  </Box>
);

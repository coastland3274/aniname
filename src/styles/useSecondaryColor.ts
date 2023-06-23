import { useColorModeValue } from '@chakra-ui/react';

const useSecondaryColor = () => {
  return useColorModeValue('blackAlpha.700', 'whiteAlpha.700');
};

export default useSecondaryColor;

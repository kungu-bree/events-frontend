import { Box, Flex, HStack } from '@chakra-ui/react'


export const Navbar = () => {
    return <Box>
        <Flex justifyContent={'space-between'}>
            <HStack>
                <div>Logo</div>
            </HStack>
        </Flex>
    </Box>
};

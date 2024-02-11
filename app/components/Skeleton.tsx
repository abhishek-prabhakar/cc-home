import { Box, Skeleton as MantineSkeleton } from "@mantine/core";

function Skeleton() {
    return <Box>
        <MantineSkeleton height={8} />
        <MantineSkeleton height={8} mt={6} />
        <MantineSkeleton height={8} mt={6} width="70%" />
    </Box>
}

export default Skeleton;
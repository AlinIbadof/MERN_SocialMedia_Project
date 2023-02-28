import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.pallete.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Society of Alin
        </Typography>
      </Box>

      {/* the form box */}
      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.pallete.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Join the Society of Alin and connect with a world of limitless
          possibilities.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

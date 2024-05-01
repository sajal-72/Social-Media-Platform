import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
    <Box>
   <Box
     width="100%"
     height="77px"
     backgroundColor={theme.palette.background.alt}
     p="1rem 6%"
     textAlign="center"
   >
     <Typography fontWeight="bold" fontSize="32px" color="#3e8914">
       SocialSurge
     </Typography>
   </Box>
     
   <Box
  width={isNonMobileScreens ? "27%" : "70%"}
  height="auto"
  p="1rem"
  m="6% auto"  
  borderRadius="1.5rem"
  backgroundColor={theme.palette.background.alt}
  textAlign="center"  
>
  <Typography fontWeight="500" variant="h3" sx={{ mb: "1.5rem" }}>
    Welcome to SocialSurge!
  </Typography>
  <Form />
</Box>

 </Box>
 </div>
  );
};

export default LoginPage;

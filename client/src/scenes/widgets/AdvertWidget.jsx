import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { pallete } = useTheme();
  const dark = pallete.neutral.dark;
  const main = pallete.neutral.main;
  const medium = pallete.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info1.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween color={main}>
        <Typography color={main}>Mickey-Lu</Typography>
        <Typography color={medium}>mlu.com</Typography>
      </FlexBetween>

      <Typography color={medium} m="0.5rem 0">
        Best Bar-B-Q in town! Come and try our new menu!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

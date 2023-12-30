"use client";
import { useState, useEffect } from "react";
import { Typography, Button, Box, TextField } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";
type Router = ReturnType<typeof useNextRouter>;

const Banner = () => {
  const router: Router = useNextRouter();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);
  const arrayImage: number[] = [1, 2, 3];
  const [search, setSearch] = useState<string>("")

  function updateBackgroundImage() {
    backgroundImageIndex > 1
      ? setBackgroundImageIndex(0)
      : setBackgroundImageIndex(backgroundImageIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 4000);
    return () => clearInterval(interval);
  });

  const scroller = (value: number) => {
    window.scrollTo({
      top: value,
      behavior: "smooth",
    });
  };

  const mystyle = {
    backgroundImage: `url(/images/image${arrayImage[backgroundImageIndex]}.webp)`,
    margin: "0px",
    height: "100vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "all 0.2s linear",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    color: "#fff",
  };

  console.log(search)

  return (
    <>
      <div style={mystyle}>
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          color="white"
          mx={1}
        >
          Arranged by Aryn
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          color="white"
          mx={1}
        >
          Surrender by Music
        </Typography>
        <Box mb={10} mt={1}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="search music ..."
            variant="filled"
            color="error"
            sx={{ background: "white", borderRadius: "5px" }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(2,2fr)",
          }}
          mt={10}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(1500);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              آلبوم ها
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(650);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              درباره من
            </Typography>
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Banner;

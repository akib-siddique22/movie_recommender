import { Button } from "@chakra-ui/react";

const Home = () => {
  const toInput = () => {
    window.location.href = "/movies/input";
  };

  return (
    <Button onClick={toInput}>
      Recommendation System
    </Button>
  );
}

export default Home
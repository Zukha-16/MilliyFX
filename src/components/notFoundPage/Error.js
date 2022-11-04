import Container from "../container/Container";
import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  return (
    <Container>
      <div className="w-full h-[50vh] flex items-center justify-center">
        <p className="text-white text-2xl">
          The page <span className="fx_effect">{location.pathname}</span>{" "}
          doesn't exist...
        </p>
      </div>
    </Container>
  );
}

export default Error;

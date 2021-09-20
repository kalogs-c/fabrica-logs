import { Container, TextWrapper } from "./styles";

import Typical from "react-typical";

function Bio() {
  return (
    <Container>
      <TextWrapper>
        <h1>
          <span>
            <Typical
              className="typing-effect"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Kalogs.tsx",
                700,
                "Developer.env",
                700,
                "Front-end-dev.js",
                700,
                "Carlos.html",
                700,
                "Happy.json",
                700,
                "Brazilian.css",
                700,
                "Curious.ts",
                700,
              ]}
            />
          </span>
        </h1>
        <span>
          A developer that loves front-end
        </span>
        <span>and cares deeply about user experience and performance.</span>
      </TextWrapper>
    </Container>
  );
}

export default Bio;

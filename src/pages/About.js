import React from "react";
import { Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" gutterBottom>
        The ChatGPT Clone Project is an innovative initiative to replicate the
        capabilities of OpenAI's GPT-3.5 language model and create an
        open-source, accessible alternative for language processing tasks. Our
        mission is to democratize AI technology and empower developers,
        students, and businesses to build intelligent conversational agents
        without significant cost barriers.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Our Vision:
      </Typography>
      <Typography variant="h5" gutterBottom>
        We envision a future where language-based AI technology is freely
        accessible to all, fostering innovation and creativity across diverse
        industries. With our ChatGPT Clone, we seek to create a collaborative
        community that can actively contribute, improve, and customize the
        language model according to specific use cases and preferences.
      </Typography>
      <Typography variant="h3" gutterBottom>
        How It Works:
      </Typography>
      <Typography variant="h5" gutterBottom>
        The ChatGPT Clone is built using open-source frameworks and leverages
        pre-existing language model architectures as a starting point. By
        utilizing various publicly available data and tools, we aim to replicate
        the essential functionalities of the original GPT-3.5 while adhering to
        ethical considerations and privacy standards.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Contact us at: 12345@example.com
      </Typography>
    </Container>
  );
};

export default About;

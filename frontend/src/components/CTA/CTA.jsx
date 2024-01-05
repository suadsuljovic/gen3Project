import { Button, Typography } from "antd";
import Container from "../Container/Container";

import styles from "./cta.module.css";

const { Title } = Typography;

function CTA() {
  return (
    <Container>
      <section className={styles.cta}>
        <Title className={styles.title}>
          I have the best blog in the world
        </Title>
        <Button type="primary" size="large" shape="round">
          Read Now
        </Button>
      </section>
    </Container>
  );
}

export default CTA;

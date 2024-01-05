import { Image, Typography } from "antd";
import styles from "./hero.module.css";
import Container from "../Container/Container";
const { Title, Text } = Typography;
function Hero() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.leftDiv}>
          <Title>I am Suad Suljovic</Title>
          <Text>The best frontend developer</Text>
        </div>
        <div className={styles.rightDiv}>
          <Image
            width="100%"
            preview={false}
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?cs=srgb&dl=pexels-kevin-ku-577585.jpg&fm=jpg"
          />
        </div>
      </section>
    </Container>
  );
}

export default Hero;

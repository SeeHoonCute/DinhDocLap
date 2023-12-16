import { Carousel } from "@mantine/carousel";
import { Center, Flex, Grid, Image, Space, Text } from "@mantine/core";
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Slider1 from "../../assets/images/image6.png";
import Slider2 from "../../assets/images/image7.png";
import Slider3 from "../../assets/images/image6.png";
import Slider4 from "../../assets/images/image6.png";

const assets = [
  {
    src: Slider1,
    title: "Xin chào mọi người!",
    text: "Cách tốt nhất để cổ vũ bản thân là cố gắng cổ vũ người khác",
    sunText: "Chúng ta có thể gặp nhiều thất bại nhưng chúng ta không được bị đánh bại",
    id: 1,
  },
  {
    src: Slider2,
    title: "Nhớ mình hong dị!",
    text: "Cách tốt nhất để cổ vũ bản thân là cố gắng cổ vũ người khác",
    sunText: "Chúng ta có thể gặp nhiều thất bại nhưng chúng ta không được bị đánh bại",
    id: 2,
  },
  {
    src: Slider3,
    title: "Còn mình thì hong ó!",
    text: "Cách tốt nhất để cổ vũ bản thân là cố gắng cổ vũ người khác",
    sunText: "Chúng ta có thể gặp nhiều thất bại nhưng chúng ta không được bị đánh bại",
    id: 3,
  },
  {
    src: Slider4,
    title: "Đừng bùn nhó!",
    text: "Cách tốt nhất để cổ vũ bản thân là cố gắng cổ vũ người khác",
    sunText: "Chúng ta có thể gặp nhiều thất bại nhưng chúng ta không được bị đánh bại",
    id: 4,
  },
];

function SliderLogin() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Grid display={Flex} justify="center" mt={40}>
        <Carousel
          slideGap="md"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          h={650} w={500} mt={10}
          draggable={false}
          withIndicators>
          {
            assets.map((item) => (
              <Carousel.Slide key={item.id}><Image src={item.src} h={500}/>
                <Center>
                  <div>
                    <Text size="lg" w={"bold"}>
                      {item.title}
                    </Text>
                    <Space h="xs" />
                    <Text size="sm" c="dimmed" w={"normal"}>
                      {item.text}
                    </Text>
                    <Text size="xs" c="dimmed" w={"normal"}>
                      {item.sunText}
                    </Text>
                  </div>
              </Center>
            </Carousel.Slide>
            ))
          }
        </Carousel>
      </Grid>
    </>
  );
};

export default SliderLogin;
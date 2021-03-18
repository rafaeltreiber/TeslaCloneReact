import { useTransform } from 'framer-motion';
import React  from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () => {
    const { scrollYprogress } = useWrapperScroll()
    const opacity = useTransform(scrollYprogress, [0.9, 1], [0 , 1])


  return (
    <Container>
        <Header>
            <Logo />
            <Burger />
        </Header>

        <Footer style = {{ opacity }}>
            <ul>
                <li>
                    <a href = "#">UI Clone</a>
                </li>
                <li>
                    <a href = "#">made with 💜</a>
                </li>
                <li>
                    <a href = "#">by Rafael Treiber</a>
                </li>
            </ul>
        </Footer>
      
    </Container>
  );
};

export default UniqueOverlay;

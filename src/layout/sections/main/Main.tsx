import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { Greeting } from "./greeting/Greeting";
import { MyPhoto } from "./my-photo/MyPhoto";

export function Main() {
     
    return (
      <MainStyled>
        <Container>
          <FlexWrapper justify="space-between" wrap="wrap">
            <Greeting />
            <MyPhoto />
          </FlexWrapper>
        </Container>
      </MainStyled>
    );
}

const MainStyled = styled.main`
    margin-top: 280px;
`
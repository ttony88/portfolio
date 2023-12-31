import styled from "styled-components"
import { Icon } from "../../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../../components/flex-wrapper/FlexWrapper"

type LinkPriviewPropstype = {
    link: string
    iconId: string
    nameLink: string
}

export function LinkProject(props: LinkPriviewPropstype) {

    return (
      <LinkPriviewStyled href={props.link}>
        <FlexWrapper align="center" gap="7px">
          <Icon
            iconId={props.iconId}
            width="20"
            height="20"
            viewBox="0 0 20 20"
          />
          <span>{props.nameLink}</span>
        </FlexWrapper>
      </LinkPriviewStyled>
    );
}

const LinkPriviewStyled = styled.a`
    font-size: 16px;
    font-weight: 400; 
    text-decoration-line: underline;
    color: #000;
`
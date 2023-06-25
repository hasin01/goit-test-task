import { HeaderTextStyled, HomePageStyled, NavBarStyled, NavLinkStyled, } from "./Home.styled";

const Home = () => {
    return (<HomePageStyled>
        <NavBarStyled>
            <div></div>
            <HeaderTextStyled>HOME</HeaderTextStyled>
            <NavLinkStyled to="/tweets" >Tweets</NavLinkStyled>
        </NavBarStyled>
    </HomePageStyled>);
};

export default Home;
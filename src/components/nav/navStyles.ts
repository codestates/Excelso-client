import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5.2rem;
  z-index: 50;
  background-color: #262223;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
    z-index: 50;
  }
`;

export const LogoDiv = styled.div`
  width: 6rem;
  height: 2.5rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.button`
  background: transparent;
  font-weight: 500;
  font-size: 1.5rem;
  border: none;
  color: #ddc6b6;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;

export const BeanDiv = styled.div`
  width: 5rem;
  height: 2.5rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  margin-right: 0;
  background-color: #262223;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const MenuDiv = styled.div`
  width: 5rem;
  height: 2.5rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
  margin-left: 0;
  background-color: #262223;
  border-radius: 0.5rem;
  @media screen and (max-width: 600px) {
    margin-top: 0.3rem;
    font-size: 1.05rem;
    margin: 0;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  font-weight: 500;
  font-size: 1.5rem;
  border: none;
  color: #ddc6b6;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-top: 0.3rem;
    font-size: 1.05rem;
  }
`;

export const NavDiv = styled.div`
  width: 8rem;
  height: 4rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: transparent;
  color: #ddc6b6;
  border: 0;
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const LoginDiv = styled.div`
  width: 6rem;
  height: 2.5rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  background-color: #262223;
  border-radius: 0.5rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SignUpDiv = styled.div`
  width: 8rem;
  height: 2.5rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  background-color: #262223;
  border-radius: 0.5rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menubar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  right: 0;
  div {
    width: 1.5rem;
    height: 1.5rem;
    color: #ddc6b6;
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const MenuBarCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: transparent;
  margin-right: 2rem;
  width: 5rem;
  height: 3rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const MenuHidden = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 5rem;
  right: 0;
  background-color: #262223;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const MenuLoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
`;

export const MenuSignupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
`;

export const MenuHideButton = styled.div`
  background: transparent;
  color: #ddc6b6;
  border: 0;
  font-size: 1rem;
`;

export const MypageButton = styled.button`
  background: transparent;
  width: 10rem;
  color: #ddc6b6;
  border: 0;
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;
`;

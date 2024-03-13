import styled from "styled-components";

export const NavigationContainer = styled.div
`height: 200px;
width: 100%;
display: flex;
justify-content: space-between;`

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .nav-links-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .centered-links {
      display: flex;
      align-items: center;
    }

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
}

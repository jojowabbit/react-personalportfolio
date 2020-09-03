import { createGlobalStyle } from "styled-components";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary: {
    s1: "#E6FFFA",
    s2: "#B2F5EA",
    s3: "#81E6D9",
    s4: "#4FD1C5",
    s5: "#38B2AC",
    s6: "#319795",
    s7: "#2C7A7B",
    s8: "#285E61",
    s9: "#234E52",
  },
  gray: {
    s1: "#f5f5f5",
    s2: "#eeeeee",
    s3: "#e0e0e0",
    s4: "#bdbdbd",
    s5: "#9e9e9e",
    s6: "#757575",
    s7: "#616161",
    s8: "#424242",
    s9: "#212121",
  },
};

const shadows = {
  s1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  s2: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  s3: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
};

export const defaultTheme = {
  body: colors.gray.s1,
  text: colors.gray.s9,
  primary: colors.primary.s7,
};

export const darkTheme = {
  body: colors.gray.s9,
  text: colors.gray.s1,
  primary: colors.primary.s9,
};

export const GlobalStyles = createGlobalStyle`
*, *::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.50%;
}

body {
    font-family: 'Montserrat', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

   
}

ol,
ul {
  list-style: none;
}

a {
    text-decoration: none;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;

}

.btn {
  padding: .75rem 1.25rem;
  border: none;
  text-transform: uppercase;
  letter-spacing: .3rem;

  box-shadow: ${shadows.s2};
  transition: all .25s ;
  border-radius: .25rem;
  font-size: 1.6rem;
  cursor: pointer;
}

.btn-primary {
  background-color: ${colors.primary.s6};
  color: ${colors.primary.s1};
  
  &:hover {
    background-color: ${colors.primary.s7};
  }
}

`;

import {style} from "@vanilla-extract/css";

export const appLandingLayout = style({
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  position: 'sticky',
  top: '0px',
  height: '100vh',
  width: "auth",

  '@media': {
    "screen and (max-width: 1024px)": {
      display: "none",
    },
    "screen and (min-width: 1025px)": {
      display: "flex",
    }
  }
});

export const appLandingContainer = style({
  width: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
})
export const bannerWrapper = style({
  width: '100%',
  marginBottom: '2em'
})
export const bannerImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 4
})

export const contentsBoxDownloadGuid = style({
  borderRadius: 4,
  backgroundColor: "rgba(222,222,222,0.95)",
  height: 90,
  width: '100%',
  color: '#222',
  padding: '0.8em 1em',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

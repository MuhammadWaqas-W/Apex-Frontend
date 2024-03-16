export const topStyles = {
  topIssuesTitle: {
    color: "#344054",
    fontWeight: 600,
    marginLeft: "20px",
    padding: "15px 0 20px",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },
  toIssuesData: {
    padding: "6px 12px 6px 0px",
  },
  topIssuesitem: {
    borderTop: "1px solid #eaecf0",
    display:"flex",
    alignItems:"center",
    padding:"16px 0",
    justifyContent:"space-between",
    "&:hover": {
      backgroundColor: "#f9fafb",
    },
    "@media screen and (max-width:767px)":{
      flexDirection:"column",
      alignItems:"flex-start"
    }
  },
  TopIssuesDesc: {
    margin: "12px",
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
  },
  arrowIcon: {
    marginRight: "10px",
  },
  topIssuesBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: { sm: "30px", xs: "unset" },
  },
  topIssuesValue: {
    display: "block",
    color: "#344054",
    fontSize: "14px",
    fontWeight: 500,
    marginInline: "4px",
  },
  arrowImg: {
    color: "#027a48",
    fontSize: "15px",
  },
  chipsBox: {
    marginLeft: "20px",
  },
  codeChip: {
    marginLeft: "8px",
    borderRadius: "4px",
  },
  buttonGrid: {
    alignItems: "center",
    borderTop: "1px solid #eaecf0",
    padding: "13px 3px 3px",
  },
  topIssuesBtns: {
    margin: "8px",
    padding: "0px",
    paddingInline: " 8px",
    textTransform: "inherit",
    color: "#667085",
    fontSize: "14px",
    border: "1px solid #d0d5dd",
  },
  overviewLevel : {
    borderRadius : "5px",
    padding : "0px 10px",
    border:'none',
    color:"#344054",
    fontSize:"14px",
    "& .MuiChip-avatar":{
      marginRight : "0px"
    },
    "@media screen and (max-width:767px)" : {
      fontSize:"12px",
      marginLeft:"10px"
    }
  },
  countRow : {
    display:"flex",
    alignItems:"center",
    gap:"15px",
    marginRight:"20px",
    "@media screen and (max-width:1100px)" : {
      gap:"7px"
    }
  },
  countText : {
    color:"#344054",
    fontSize:"14px",
    fontWeight:700
  },
  "@media screen and (max-width:1100px)" : {
    countRow :{
      gap:"7px"
    }
  }
};

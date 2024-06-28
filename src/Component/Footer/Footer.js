import React from 'react';
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footercontainer">
        <div className="footercontainer__logo"> 
          <Link to="/"><InstagramIcon style={{fontSize:"35px"}}/></Link> 
          <Link to="/"><FacebookIcon style={{fontSize:"35px"}}/></Link>  
          <Link to="/"><TwitterIcon style={{fontSize:"35px"}}/></Link>  
          <Link to="/"><LanguageIcon style={{fontSize:"35px"}}/></Link>
        </div>
        <div>
            <CopyrightIcon />Copyright 2024 prefectThread.in
        </div>
    </footer>
  )
}

export default Footer
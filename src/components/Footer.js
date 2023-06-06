import React from 'react'
import '../styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/Facebook'
import FacebookIcon from '@mui/icons-material/LinkedIn'
function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
        {" "}
        <InstagramIcon /><TwitterIcon /><FacebookIcon /><LinkedInIcon />
        </div>
        <p> &copy; 2021 edinglas.com</p>
        </div>
  )
}

export default Footer
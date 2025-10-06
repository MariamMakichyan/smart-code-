function SocialLinks({socialLinks}) {
    return(
         <ul className="social-links">
             {socialLinks.map(({href,target,className}, index)=>(
              <li key={index}>
                 <a href={href} target={target}><i className={className}></i></a>
              </li>  
             ))}           
        </ul>
    )
}


export default SocialLinks
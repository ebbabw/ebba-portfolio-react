import React from 'react'
import styled from 'styled-components'


export const Header = () => {

    return (
    
       <Headercontainer>

           <IconsContainer>

           </IconsContainer>

        
       </Headercontainer>
    
    
    
    )
    }
    
  
  
    export const Headercontainer = styled.header`

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      background-color: blue;
      height: 400px;
  
    `;

     
    export const IconsContainer = styled.section`

      padding-top: 80px;  
      padding-right: 300px;
      backgorund-color: red;
    `;







    // .title_redbackground {
    //     text-align: center;
    //     font: Bold 15px/27px Montserrat;
    //     text-transform: uppercase;
    //     color: #FFFFFF;
    // }
    
    // .title_redbackground span {
    //     background-color: #8559FF;
    //     padding-top: 2px;
    //     padding-bottom: 2px;
    //     padding-left: 8px;
    //     padding-right: 8px;
    // }



// .icons-container {
//     padding-top: 80px;  
//     padding-right: 300px;
// }

// .icon-boarder { 
//     border-radius: 50%;
//     border: 1px solid #FFFFFF;
//     width: 40px;
//     height: 40px;
//     padding-top: 15px;
//     padding-bottom: 5px;
//     padding-right: 10px;
//     padding-left: 10px;
// }

// .icon-img {
//     width: 15px;
//     height: 15px;
// }
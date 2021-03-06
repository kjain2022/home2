import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,
SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About Us
                </SidebarLink>

                <SidebarLink to="hellosmile">
                    Hello Smile
                </SidebarLink>

                <SidebarLink to="steps">
                    Steps
                </SidebarLink>

                <SidebarLink to="contact">
                    Contact Us
                </SidebarLink>

                <SidebarLink to="contact">
                    Help
                </SidebarLink>

                <SidebarLink to="steps2">
                Social Awareness
                </SidebarLink>

                <SidebarLink to="/volunteer">
                    Volunteer
                </SidebarLink>



            
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Donate Food!</SidebarRoute>
            </SideBtnWrap>

        </SidebarWrapper>
        </SidebarContainer>
      
  )
}

export default Sidebar

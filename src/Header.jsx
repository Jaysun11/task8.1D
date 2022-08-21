import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Header extends React.Component {


  render() {

    return (

      <Menu>

        <Menu.Item><h1>Dev @ Deakin</h1></Menu.Item>

        <Input className="headerSearch" icon='search' placeholder='Search...' />
             

        <Menu.Menu position="right">

        <Menu.Item 
          name='findQuestion'
        >
          <a href='/find_question'>Find Question</a>
        </Menu.Item>

        <Menu.Item 
          name='post'
        >
          <a href='/post'>Post</a>
        </Menu.Item>

        <Menu.Item 
          name='login'
        >
         <a href='/login'>Log in</a>
          
        </Menu.Item>

        </Menu.Menu>
      </Menu>

    )
  }
} export default Header

import {FunctionComponent} from 'react';
interface HeaderProps {
    title?: string;
}
const Header:FunctionComponent<HeaderProps> = ({title}) => {
  return (
    <header>
        <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: "Collaboration"
}

const headingStyle = {
    color: "blue", 
    backgroundColor:"steelblue"
}
export default Header
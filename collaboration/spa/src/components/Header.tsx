interface HeaderProps {
    title?: string;
}
const Header = (props: HeaderProps) => {
  return (
    <header>
        <h1 style={headingStyle}>{props.title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: "Collaboration"
}

const headingStyle = {
    color: "red", 
    backgroundColor:"green"
}
export default Header
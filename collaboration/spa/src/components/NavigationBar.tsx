import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react"
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap"

import { loginRequest } from '../authConfig';

const NavigationBar = () => {
  const { instance } = useMsal();

  let activeAccount;
  if (instance) {
    activeAccount = instance.getActiveAccount();
  }

  const handleLoginPopup = () => {
    /**
     * When using popup and silent APIs, we recommend setting the redirectUri to a blank page or a page
     * that does not implement MSAL. Keep in mind that all redirect routes must be registered with the application
     * For more information, please follow this link: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/login-user.md#redirecturi-considerations
     */
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: '/redirect',
      })
      .catch((error) => console.log(error));
  };

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutPopup = () => {
    instance
      .logoutPopup({
        mainWindowRedirectUri: '/', // redirects the top level app after logout
        account: instance.getActiveAccount(),
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/">
          My Company
        </a>
        <AuthenticatedTemplate>
          <div className="collapse navbar-collapse justify-content-end">
            <DropdownButton
              variant="warning"
              drop="start"
              title={activeAccount ? activeAccount.name : 'Unknown'}
            >
              <Dropdown.Item as="button" onClick={handleLogoutPopup}>
                Sign out using Popup
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                Sign out using Redirect
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div className="collapse navbar-collapse justify-content-end">
            <DropdownButton
              variant="secondary"
              className="justify-content-end ml-auto"
              title="Sign In"
              drop="start"
            >
              <Dropdown.Item as="button" onClick={handleLoginPopup}>
                Sign in using Popup
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={handleLoginRedirect}>
                Sign in using Redirect
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </UnauthenticatedTemplate>
      </Navbar>
    </>
  )
}
export default NavigationBar
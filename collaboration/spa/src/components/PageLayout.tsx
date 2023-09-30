import { FC, PropsWithChildren } from 'react';

import NavigationBar from './NavigationBar';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}
export default PageLayout

import { useRouter } from 'next/router'

const auth = (Page) => {

    return (props) => {

        if (typeof window !== "undefined") {
            const Router = useRouter();

            if (!localStorage.getItem('login')) {
                Router.replace("/login");
                return null;
            }
            
            if (Router.pathname === '/dashboard') {
                Router.replace("/login");
                return null;
            }
        }

        return <Page {...props} />
    }

}

export default auth;
import { Button, Input } from "@material-ui/core"
import { useRouter } from 'next/router'

const Login = () => {

    const Router = useRouter();

    const entrar = () => {
        localStorage.setItem('login', 'true');
        Router.push('/');
    }

    return (
        <div>
            <Input placeholder="Login" /><br/>
            <Input placeholder="*******" type="password" /><br/>
            <Button onClick={() => entrar()}>Entrar</Button>
        </div>
    )
}

export default Login;
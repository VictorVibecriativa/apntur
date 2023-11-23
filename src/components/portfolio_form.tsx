import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface formtypes {
    title: string,
    description?: string
}

export function Form(props: formtypes) {
    return (
        <form className="space-y-4 w-[40%] p-8 shadow-lg" action="submit">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Input
                placeholder="Digite seu Email"
                label="Login"
                helperText="exp: test@gmail.com"
            />

            <Input
                label="Senha"
                className=""
                placeholder="Digitar Senha"
                type="password"
            />

            <Button className="w-full">Entrar</Button>
        </form>
    )
}


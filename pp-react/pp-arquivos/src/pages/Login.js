import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import api from '../services/api';

import ControlButtons from '../components/ControlButtons';
import LoginFailedMessage from '../components/LoginFailedMessage';

import './Login.css';
import './Caixas.css';

const validLogin = yup.object().shape({
    email: yup.string().required("O email é um campo obrigatório").email("Digite um email válido"),
    password: yup.string().required("A senha é um campo obrigatório")
});

function Login() {

    const navigate = useNavigate();

    const [ loginStatus, setLoginStatus ] = useState(false);
    const [ loginDenied, setLoginDenied ] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validLogin)
    });

    const sendLogin = data => {
        api.post('/login', data)
        .then(() => 
        {
            setLoginStatus(true);
            localStorage.setItem('refreshToken', 'guilherme');
        })
        .catch(() => {
            setLoginDenied(true);
        });
    };

    return (
        <>
            <form className="bigBox" onSubmit={handleSubmit(sendLogin)}>
                <h2 className="tituloCaixa">Faça seu login</h2>

                <div className="field">

                    <label>Email</label>
                    <input type="text" {...register("email")} />

                    <p className="errorMessage">{errors.email?.message}</p>

                </div>

                <div className="field">

                    <label>Senha</label>
                    <input type="password" {...register("password")} />

                    <p className="errorMessage">{errors.password?.message}</p>

                    {loginStatus && navigate('/logged')}
                    {loginDenied && <LoginFailedMessage />}

                </div>

                <ControlButtons retorno="" />
            </form>

            <p className="rodapeCadastro">Ainda não tem uma conta? <Link to="/cadastro" className="linkCadastro">Cadastre-se</Link>.</p>
        </>
    );
};

export default Login;
import React, {Fragment} from 'react';
import {css} from '@emotion/react';
import Layout from '../Components/Layouts/Layout';
import {Formulario, Campo, InputSubmit, Error} from '../Components/UserInterface/Formulario';

//Validaciones
import useValidacion from '../Hooks/useValidacion';
import validarCrearCuenta from '../Validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password:'',
  passwordConfirmar:''
}

export default function CrearCuenta() {

  const { valores, errores, submitForm, handleChange, handleSubmit, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const {nombre, email, password, passwordConfirmar} = valores;

  function crearCuenta() {
      console.log('Creando cuenta...');
  }

  return (
    <div>
        <Layout>
            <Fragment>
              <h1
                css={css`
                  text-align:center;
                  margin-top:5rem;
                `}
              >Crear Cuenta</h1>

              <Formulario
                onSubmit={handleSubmit}
                noValidate
              >
                <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.nombre && <Error>{errores.nombre}</Error>}

                <Campo>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.email && <Error>{errores.email}</Error>}

                <Campo>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Tu Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.password && <Error>{errores.password}</Error>}

                <Campo>
                  <label htmlFor="passwordConfirmar">Confirma tu Contraseña</label>
                  <input
                    type="password"
                    id="passwordConfirmar"
                    placeholder="Confirma tu Contraseña"
                    name="passwordConfirmar"
                    value={passwordConfirmar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.passwordConfirmar && <Error>{errores.passwordConfirmar}</Error>}

                <InputSubmit
                  type="submit"
                  value="Crear Cuenta"
                />
              </Formulario>
            </Fragment>
        </Layout>
    </div>
  )
}

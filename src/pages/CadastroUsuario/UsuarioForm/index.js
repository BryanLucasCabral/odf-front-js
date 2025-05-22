import React, { useState } from 'react';
import Cabecalho from '../../../componentes/Cabecalho';
import UsuarioForm from '../../../componentes/Formularios/UsuarioForm';
import Rodape from '../../../componentes/Rodape';

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    sexo: "",
    email: "",
    telefone: "",
    celular: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    dataNascimento: "",
    administrador: false,
    colaborador: false,
    desenvolvedor: false,
    usuarioExterno: false
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
  };

  return (
    <>
      <Cabecalho />
      <div className="container mt-4">
        <h2 className="mb-4">Cadastro de Usuário</h2>
        <UsuarioForm
          formData={formData}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
      <Rodape/>
    </>
  );
}

export default CadastroUsuario;
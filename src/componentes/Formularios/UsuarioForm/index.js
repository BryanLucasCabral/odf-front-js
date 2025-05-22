import React from 'react';
import PropTypes from 'prop-types';

function UsuarioForm({
  formData,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  isEditing = false,
  loading = false
}) {
  const {
    nome,
    cpf,
    sexo,
    email,
    telefone,
    celular,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    dataNascimento,
    administrador,
    colaborador,
    desenvolvedor,
    usuarioExterno
  } = formData;

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <fieldset className="card mb-4">
        <div className="card-body">
          <legend className="card-title border-bottom pb-2">Dados Pessoais</legend>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Nome Completo:</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={nome}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">CPF:</label>
              <input
                type="text"
                className="form-control"
                name="cpf"
                value={cpf}
                onChange={onInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Sexo:</label>
              <select
                className="form-select"
                name="sexo"
                value={sexo}
                onChange={onInputChange}
                required
              >
                <option value="">Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Data de Nascimento:</label>
              <input
                type="date"
                className="form-control"
                name="dataNascimento"
                value={dataNascimento}
                onChange={onInputChange}
                required
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Contato */}
      <fieldset className="card mb-4">
        <div className="card-body">
          <legend className="card-title border-bottom pb-2">Contato</legend>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Telefone:</label>
              <input
                type="tel"
                className="form-control"
                name="telefone"
                value={telefone}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Celular:</label>
              <input
                type="tel"
                className="form-control"
                name="celular"
                value={celular}
                onChange={onInputChange}
                required
              />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="card mb-4">
        <div className="card-body">
          <legend className="card-title border-bottom pb-2">Endereço</legend>
          
          <div className="row">
            <div className="col-md-8 mb-3">
              <label className="form-label">Logradouro:</label>
              <input
                type="text"
                className="form-control"
                name="logradouro"
                value={logradouro}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Número:</label>
              <input
                type="text"
                className="form-control"
                name="numero"
                value={numero}
                onChange={onInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Complemento:</label>
              <input
                type="text"
                className="form-control"
                name="complemento"
                value={complemento}
                onChange={onInputChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Bairro:</label>
              <input
                type="text"
                className="form-control"
                name="bairro"
                value={bairro}
                onChange={onInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Cidade:</label>
              <input
                type="text"
                className="form-control"
                name="cidade"
                value={cidade}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label">Estado:</label>
              <input
                type="text"
                className="form-control"
                name="estado"
                value={estado}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label">CEP:</label>
              <input
                type="text"
                className="form-control"
                name="cep"
                value={cep}
                onChange={onInputChange}
                required
              />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="card mb-4">
        <div className="card-body">
          <legend className="card-title border-bottom pb-2">Tipo de Usuário</legend>
          
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="administrador"
                  checked={administrador}
                  onChange={onCheckboxChange}
                  id="administrador"
                />
                <label className="form-check-label" htmlFor="administrador">Administrador</label>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="colaborador"
                  checked={colaborador}
                  onChange={onCheckboxChange}
                  id="colaborador"
                />
                <label className="form-check-label" htmlFor="colaborador">Colaborador</label>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="desenvolvedor"
                  checked={desenvolvedor}
                  onChange={onCheckboxChange}
                  id="desenvolvedor"
                />
                <label className="form-check-label" htmlFor="desenvolvedor">Desenvolvedor</label>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="usuarioExterno"
                  checked={usuarioExterno}
                  onChange={onCheckboxChange}
                  id="usuarioExterno"
                />
                <label className="form-check-label" htmlFor="usuarioExterno">Usuário Externo</label>
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="submit"
          className="btn btn-primary me-md-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {isEditing ? 'Atualizando...' : 'Cadastrando...'}
            </>
          ) : (
            isEditing ? 'Atualizar' : 'Cadastrar'
          )}
        </button>
      </div>
    </form>
  );
}

UsuarioForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  loading: PropTypes.bool
};

export default UsuarioForm;
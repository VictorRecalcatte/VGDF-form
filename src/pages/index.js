
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function Home() {
  const [formData, setFormData] = useState({
    nome_completo: '',
    data_de_nascimento: '',
    genero: '',
    ocupacao: '',
    telefone: '',
    instagram: '',
    email: '',
    regiao_onde_mora: '',
    orgao: '',
    comunidade: '',
    origem: ''
  });

  // Função para lidar com a mudança dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Regiões DF
  const regioesDF = [
    { value: 'Água Quente (RA XXXV)', label: 'Água Quente (RA XXXV)' },
    { value: 'Arapoanga (RA XXXIV)', label: 'Arapoanga (RA XXXIV)' },
    { value: 'Águas Claras (RA XX)', label: 'Águas Claras (RA XX)' },
    { value: 'Arniqueira (RA XXXIII)', label: 'Arniqueira (RA XXXIII)' },
    { value: 'Brazlândia (RA IV)', label: 'Brazlândia (RA IV)' },
    { value: 'Candangolândia (RA XIX)', label: 'Candangolândia (RA XIX)' },
    { value: 'Ceilândia (RA IX)', label: 'Ceilândia (RA IX)' },
    { value: 'Cruzeiro (RA XI)', label: 'Cruzeiro (RA XI)' },
    { value: 'Fercal (RA XXXI)', label: 'Fercal (RA XXXI)' },
    { value: 'Gama (RA II)', label: 'Gama (RA II)' },
    { value: 'Guará (RA X)', label: 'Guará (RA X)' },
    { value: 'Itapoã (RA XXVIII)', label: 'Itapoã (RA XXVIII)' },
    { value: 'Jardim Botânico (RA XXVII)', label: 'Jardim Botânico (RA XXVII)' },
    { value: 'Lago Norte (RA XVIII)', label: 'Lago Norte (RA XVIII)' },
    { value: 'Lago Sul (RA XVI)', label: 'Lago Sul (RA XVI)' },
    { value: 'Núcleo Bandeirante (RA VIII)', label: 'Núcleo Bandeirante (RA VIII)' },
    { value: 'Paranoá (RA VII)', label: 'Paranoá (RA VII)' },
    { value: 'Park Way (RA XXIV)', label: 'Park Way (RA XXIV)' },
    { value: 'Planaltina (RA VI)', label: 'Planaltina (RA VI)' },
    { value: 'Plano Piloto (RA I)', label: 'Plano Piloto (RA I)' },
    { value: 'Recanto das Emas (XV)', label: 'Recanto das Emas (XV)' },
    { value: 'Riacho Fundo (RA XVII)', label: 'Riacho Fundo (RA XVII)' },
    { value: 'Riacho Fundo II (RA XXI)', label: 'Riacho Fundo II (RA XXI)' },
    { value: 'Samambaia (RA XII)', label: 'Samambaia (RA XII)' },
    { value: 'Santa Maria (RA XIII)', label: 'Santa Maria (RA XIII)' },
    { value: 'São Sebastião (RA XIV)', label: 'São Sebastião (RA XIV)' },
    { value: 'SCIA/Estrutural (RA XXV)', label: 'SCIA/Estrutural (RA XXV)' },
    { value: 'SIA (RA XXIX)', label: 'SIA (RA XXIX)' },
    { value: 'Sobradinho (RA V)', label: 'Sobradinho (RA V)' },
    { value: 'Sobradinho II (RA XXVI)', label: 'Sobradinho II (RA XXVI)' },
    { value: 'Sol Nascente e Pôr do Sol (RA XXXII)', label: 'Sol Nascente e Pôr do Sol (RA XXXII)' },
    { value: 'Sudoeste/Octogonal (RA XXII)', label: 'Sudoeste/Octogonal (RA XXII)' },
    { value: 'Taguatinga (RA III)', label: 'Taguatinga (RA III)' },
    { value: 'Varjão (RA XXIII)', label: 'Varjão (RA XXIII)' },
    { value: 'Vicente Pires (RA XXX)', label: 'Vicente Pires (RA XXX)' }
];

// Metodo para setar região
const setregiao = (selectedOption) => {
  setFormData({
    ...formData,
    regiao_onde_mora: selectedOption ? selectedOption.value : '',
  });
};

// Ocupações
const ocupacaoDF = [
  { value: 'ADMINISTRADOR', label: 'ADMINISTRADOR' },
  { value: 'ADMINISTRADOR(A)', label: 'ADMINISTRADOR(A)' },
  { value: 'ADVOGADO(A)', label: 'ADVOGADO(A)' },
  { value: 'ASSISTENTE SOCIAL', label: 'ASSISTENTE SOCIAL' },
  { value: 'AUTONOMO', label: 'AUTONOMO' },
  { value: 'DONA DE CASA', label: 'DONA DE CASA' },
  { value: 'EMPRESÁRIO(A)', label: 'EMPRESÁRIO(A)' },
  { value: 'ENFERMEIRO(A)', label: 'ENFERMEIRO(A)' },
  { value: 'ENGENHEIRO(A)', label: 'ENGENHEIRO(A)' },
  { value: 'ESTUDANTE', label: 'ESTUDANTE' },
  { value: 'LÍDER COMUNITÁRIO(A)', label: 'LÍDER COMUNITÁRIO(A)' },
  { value: 'LÍDER ESPORTIVO', label: 'LÍDER ESPORTIVO' },
  { value: 'MÉDICO(A)', label: 'MÉDICO(A)' },

  { value: 'OUTRO', label: 'OUTRO' },
  { value: 'PADRE', label: 'PADRE' },
  { value: 'PASTOR(A)', label: 'PASTOR(A)' },
  { value: 'PROFESSOR(A)', label: 'PROFESSOR(A)' },
  { value: 'SERVIDOR(A) PÚBLICO(A)', label: 'SERVIDOR(A) PÚBLICO(A)' },
  { value: 'VENDEDOR(A)', label: 'VENDEDOR(A)' }
];

// Metodo para setar ocupação
const setocupacao = (selectedOption) => {
  setFormData({
    ...formData,
    ocupacao: selectedOption ? selectedOption.value : '',
  });
};

const [outraOcupacao, setOutraOcupacao] = useState('');
// Método para setar outraocupação
const setoutraocupacao = (event) => {
  setOutraOcupacao(event.target.value);
};

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    //formata data de nascimento para o padrao brasileiro
    const dataParts = formData.data_de_nascimento.split('-');
        if (dataParts.length === 3) {
            formData.data_de_nascimento = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
        }

    //manipula ocupacao
    if(formData.ocupacao == "OUTRO"){
      formData.ocupacao = outraOcupacao.toUpperCase()
    }

    console.log(formData)
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Dados enviados com sucesso!');
         // Limpa o formulário redefinindo o estado
         setFormData({
          nome_completo: '',
          data_de_nascimento: '',
          genero: '',
          ocupacao: '',
          telefone: '',
          instagram: '',
          email: '',
          regiao_onde_mora: '',
          orgao: '',
          comunidade: '',
          origem: ''
      });
      setOutraOcupacao(''); // Limpa o campo "outra ocupação"

      } else {
        const errorData = await response.json();
        console.error('Erro:', errorData);
        alert('Erro ao enviar os dados: ' + errorData.error);
      }
    } catch (error) {
      console.log(error)
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao enviar os dados!');
    }
  };

  const isBrowser = typeof window !== 'undefined';

  return (
    <>
      <Head>
        <title>Formulário Base De Dados</title>
      </Head>
      <main>
        <h2>FORMULÁRIO DE DADOS</h2>
        <h3>Os campos marcados com um asterisco (*) são obrigatórios.</h3>
        <form onSubmit={handleSubmit}>

          <div class="form-group">
            <input type="text" name="nome_completo" value={formData.nome_completo} onChange={handleChange} /> 
            <label>Nome completo*:</label>
            
          </div>

          <div class="form-group"> 
            <input type="date" name="data_de_nascimento" value={formData.data_de_nascimento} onChange={handleChange} />
            <label>Data de nascimento*:</label>
          </div>

          <div class = "form-group">
            <select name="genero" value={formData.genero} onChange={handleChange}>
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <label>Gênero*:</label>
          </div>

          <div class='form-group'>
          
          <Select
          id="ocupacao"
          value={ocupacaoDF.find(option => option.value === formData.ocupacao)}
          onChange={setocupacao}
          options={ocupacaoDF}
          placeholder="Selecione uma opção"
          isClearable
          menuPlacement="auto" 
          menuPortalTarget={isBrowser ? document.body : null} 
          menuPosition="fixed"
        /> <label>Ocupação*:</label>
        {
          formData.ocupacao === 'OUTRO' && (
                <div>
                  <br></br>
                    <input
                        type="text"
                        id="outraOcupacao"
                        value={outraOcupacao}
                        onChange={setoutraocupacao}
                        placeholder='Especifique a ocupação'
                    />
                </div>
            )}
          </div>

          <div class = 'form-group'>
            <input 
            type="text" 
            name="telefone" 
            value={formData.telefone} 
            onChange={handleChange} 
            placeholder="XX XXXXXXXX" 
            style={{ opacity: 0.7 }}/>
            <label>Telefone*:</label>
          </div>

          <div class="form-group">
            <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} /> 
            <label>Instagram:</label>
          </div>

          <div class='form-group'>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <label>Email*:</label>
          </div>

          <div class="form-group">
            
            <Select
            id="regiao_onde_mora"
            value={regioesDF.find(option => option.value === formData.regiao_onde_mora)}
            onChange={setregiao}
            options={regioesDF}
            placeholder="Selecione uma opção"
            isClearable
            menuPlacement="auto" 
            menuPortalTarget={isBrowser ? document.body : null} //sem isso não funciona
            menuPosition="fixed"
          />
            <label>Região onde mora*:</label>
          </div>

          <div class="form-group">
            
            <input type="text" name="orgao" value={formData.orgao} onChange={handleChange} />
            <label>Órgão:</label>
          </div>

          <div class = "form-group">
            <input type="text" name="comunidade" value={formData.comunidade} onChange={handleChange} />
            <label>Comunidade:</label>
          </div>

          <div class = "form-group">
            <input type="text" name="origem" value={formData.origem} onChange={handleChange} />
            <label>Origem:</label>
          </div>

          <button type="submit">Enviar formulário</button> 
         
        </form>
      </main>
    </>
  );
}

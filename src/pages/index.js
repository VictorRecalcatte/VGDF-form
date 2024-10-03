import Head from 'next/head';
import { useState } from 'react';
import InputMask from 'react-input-mask'; // Importar a biblioteca de máscara

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

  const ocupacaoList = [
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
    { value: 'VENDEDOR(A)', label: 'VENDEDOR(A)' },
    { value: 'DESEMPREGADO(A)', label: 'DESEMPREGADO(A)' }

  ];

  const regiaoList = [
    "Água Quente (RA XXXV)",
    "Arapoanga (RA XXXIV)",
    "Águas Claras (RA XX)",
    "Arniqueira (RA XXXIII)",
    "Brazlândia (RA IV)",
    "Candangolândia (RA XIX)",
    "Ceilândia (RA IX)",
    "Cruzeiro (RA XI)",
    "Fercal (RA XXXI)",
    "Gama (RA II)",
    "Guará (RA X)",
    "Itapoã (RA XXVIII)",
    "Jardim Botânico (RA XXVII)",
    "Lago Norte (RA XVIII)",
    "Lago Sul (RA XVI)",
    "Núcleo Bandeirante (RA VIII)",
    "Paranoá (RA VII)",
    "Park Way (RA XXIV)",
    "Planaltina (RA VI)",
    "Plano Piloto (RA I)",
    "Recanto das Emas (RA XV)",
    "Riacho Fundo (RA XVII)",
    "Riacho Fundo II (RA XXI)",
    "Samambaia (RA XII)",
    "Santa Maria (RA XIII)",
    "São Sebastião (RA XIV)",
    "SCIA/Estrutural (RA XXV)",
    "SIA (RA XXIX)",
    "Sobradinho (RA V)",
    "Sobradinho II (RA XXVI)",
    "Sol Nascente e Pôr do Sol (RA XXXII)",
    "Sudoeste/Octogonal (RA XXII)",
    "Taguatinga (RA III)",
    "Varjão (RA XXIII)",
    "Vicente Pires (RA XXX)"
  ];

  const [filteredOcupacoes, setFilteredOcupacoes] = useState([]);
  const [filteredRegioes, setFilteredRegioes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (name === 'ocupacao') {
      const filtered = ocupacaoList.filter(ocupacao =>
        ocupacao.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOcupacoes(filtered);
    }

    if (name === 'regiao_onde_mora') {
      const filtered = regiaoList.filter(regiao =>
        regiao.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRegioes(filtered);
    }
  };

  const selectOcupacao = (value) => {
    setFormData(prevData => ({
      ...prevData,
      ocupacao: value,
    }));
    setFilteredOcupacoes([]);
  };

  const selectRegiao = (value) => {
    setFormData(prevData => ({
      ...prevData,
      regiao_onde_mora: value,
    }));
    setFilteredRegioes([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const formDataToSend = {
      ...formData,
      email: formData.email === '' ? null : formData.email,  // Garantir que email vazio seja enviado como null
    };

    // Exibir um indicador de carregamento
    const botaoEnviar = e.target.querySelector('button[type="submit"]');
    botaoEnviar.disabled = true;  // Desabilita o botão para evitar múltiplos envios
    botaoEnviar.innerText = 'Enviando...';

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend), // Usar formData modificado
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Sucesso:', result);

      // Exibir mensagem de sucesso
      alert('Formulário enviado com sucesso!');

      // Resetar o formulário após envio bem-sucedido
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

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);

      // Exibir mensagem de erro
      alert('Erro ao enviar o formulário. Tente novamente.');
    } finally {
      // Resetar o estado do botão após o término da requisição
      botaoEnviar.disabled = false;
      botaoEnviar.innerText = 'Enviar';
    }
  };


  return (
    <>
      <Head>
        <title>Formulário Base De Dados</title>
      </Head>
      <main>
        <h2>FORMULÁRIO DE DADOS</h2>
        <h3>Os campos marcados com um asterisco (*) são obrigatórios.</h3>
        <form onSubmit={handleSubmit}>
          <label>Nome completo *:</label>
          <input type="text" name="nome_completo" value={formData.nome_completo} onChange={handleChange} /> <br /><br />

          <label>Data de nascimento *:</label>
          <input type="date" name="data_de_nascimento" value={formData.data_de_nascimento} onChange={handleChange} /> <br /><br />

          <label>Gênero*:</label>
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Selecione o gênero</option>
            <option value="Homem">Homem</option>
            <option value="Mulher">Mulher</option>
          </select> <br /><br />

          <label>Ocupação*:</label>
          <input type="text" name="ocupacao" value={formData.ocupacao} onChange={handleChange} /> <br /><br />
          {filteredOcupacoes.length > 0 && (
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {filteredOcupacoes.map((ocupacao) => (
                <li
                  key={ocupacao.value}
                  onClick={() => selectOcupacao(ocupacao.label)}
                  style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', marginBottom: '5px' }}
                >
                  {ocupacao.label}
                </li>
              ))}
            </ul>
          )}

          <label>Região onde mora*:</label>
          <input type="text" name="regiao_onde_mora" value={formData.regiao_onde_mora} onChange={handleChange} /> <br /><br />
          {filteredRegioes.length > 0 && (
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {filteredRegioes.map((regiao) => (
                <li
                  key={regiao}
                  onClick={() => selectRegiao(regiao)}
                  style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', marginBottom: '5px' }}
                >
                  {regiao}
                </li>
              ))}
            </ul>
          )}

          <label>Celular*:</label>
          <InputMask
            mask="(99) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
            name="telefone"
            placeholder="(XX) XXXXX-XXXX"
          />
          <br /><br />

          <label>Instagram:</label>
          <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} /> <br /><br />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} /> <br /><br />

          <label>Órgão:</label>
          <input type="text" name="orgao" value={formData.orgao} onChange={handleChange} /> <br /><br />

          <label>Comunidade:</label>
          <input type="text" name="comunidade" value={formData.comunidade} onChange={handleChange} /> <br /><br />

          <label>Origem:</label>
          <input type="text" name="origem" value={formData.origem} onChange={handleChange} /> <br /><br />

          <button type="submit" style={{ cursor: 'pointer' }}>Enviar</button>
          </form>
      </main>
    </>
  );
}
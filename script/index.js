async function buscarCEP() {
  const cep = document.getElementById("cep").value;
  const resultadoDiv = document.getElementById("resultado");

  if (!cep) {
    resultadoDiv.innerHTML = "Por favor, digite um CEP. ";
    return;
  }
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      resultadoDiv.innerHTML = "CEP nao encontrado.";
      return;
    }
    resultadoDiv.innerHTML = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
        `;
  } catch (error) {
    resultadoDiv.innerHTML = "Erro ao buscar CEP.";
  }
}

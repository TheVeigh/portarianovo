document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mainSection").style.display = "block";
});

function mudarTela(categoria) {
  document.querySelector('.card-container').style.display = 'none';
  const formHTML = `
    <form id="${categoria.toLowerCase()}Form" style="position: relative;">
      <h2>Registro de ${categoria}</h2>
      <label for="${categoria}Nome">Nome:</label>
      <input type="text" id="${categoria}Nome" name="${categoria}Nome" required>
      
      <label for="${categoria}CPF">CPF:</label>
      <input type="text" id="${categoria}CPF" name="${categoria}CPF" required maxlength="11" onkeypress="return apenasNumeros(event)" oninput="validarCPF(this)">
      
      ${categoria === 'Morador' || categoria === 'Entrega' ? `
      <label for="${categoria}Apto">Número do Apartamento:</label>
      <input type="text" id="${categoria}Apto" name="${categoria}Apto" required>` : ''}
      
      ${categoria === 'Morador' ? `
      <label for="${categoria}Bloco">Bloco:</label>
      <input type="text" id="${categoria}Bloco" name="${categoria}Bloco" required>
      <label for="${categoria}Placa">Placa do Carro:</label>
      <input type="text" id="${categoria}Placa" name="${categoria}Placa" required oninput="validarPlaca(this)">
      <label for="${categoria}Carro">Modelo do Veículo:</label>
      <input type="text" id="${categoria}Carro" name="${categoria}Carro" required>
      <label for="${categoria}FaceID">Face ID (Câmera):</label>
      <video id="${categoria}Camera" autoplay playsinline></video>
      <button type="button" onclick="capturarFace()">Capturar Face</button>` : ''}
      
      ${categoria === 'Funcionário' ? `
      <label for="${categoria}Endereco">Endereço:</label>
      <input type="text" id="${categoria}Endereco" name="${categoria}Endereco" required oninput="validarEndereco(this)">
      <label for="${categoria}Placa">Placa do Veículo:</label>
      <input type="text" id="${categoria}Placa" name="${categoria}Placa" required oninput="validarPlaca(this)">` : ''}
      
      ${categoria === 'Entrega' ? `
      <label for="${categoria}LocalTrabalho">Local de Trabalho:</label>
      <input type="text" id="${categoria}LocalTrabalho" name="${categoria}LocalTrabalho" required>
      <label for="${categoria}Placa">Placa do Veículo:</label>
      <input type="text" id="${categoria}Placa" name="${categoria}Placa" required oninput="validarPlaca(this)">` : ''}
      
      <label for="${categoria}Telefone">Número de Telefone:</label>
      <input type="text" id="${categoria}Telefone" name="${categoria}Telefone" required maxlength="15" oninput="formatarTelefone(this)">
      
      <button id="registrarButton" type="button">Registrar</button>
    </form>
    <div id="log${categoria}" class="log">
      <h2>Log de ${categoria}s</h2>
      <p>Nenhum registro disponível.</p>
    </div>
    <button onclick="voltar()">Voltar</button>
  `;
  
  document.getElementById("categoriaFormContainer").innerHTML = formHTML;
  
  if (categoria === "Morador") iniciarCamera();
  
  document.getElementById("registrarButton").addEventListener("click", function (e) {
    registrarMovimento(categoria, 'registrado');
  });
}

// Outras funções como iniciarCamera, capturarFace, validarCPF, etc., permanecem iguais.
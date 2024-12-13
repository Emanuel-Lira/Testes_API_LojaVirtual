# Passo a Passo para Instalar o K6

## 1. Requisitos

Antes de começar, certifique-se de que você tem:

- Acesso ao terminal ou linha de comando.
- Permissões para instalar software no sistema.
- Conexão à internet.

---

## 2. Instalação no Linux

### Usando o Gerenciador de Pacotes APT (Distribuições Debian/Ubuntu)

1. Atualize a lista de pacotes:
    
    ```bash
    bash
    Copy code
    sudo apt update
    
    ```
    

1. Instale as dependências necessárias:
    
    ```bash
    bash
    Copy code
    sudo apt install -y ca-certificates curl gnupg
    
    ```
    
2. Adicione a chave GPG para o repositório oficial do K6:
    
    ```bash
    bash
    Copy code
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://dl.k6.io/key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/k6-archive-keyring.gpg
    
    ```
    
3. Adicione o repositório do K6 à lista de fontes do APT:
    
    ```bash
    bash
    Copy code
    echo "deb [signed-by=/etc/apt/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
    
    ```
    
4. Atualize os pacotes e instale o K6:
    
    ```bash
    bash
    Copy code
    sudo apt update
    sudo apt install k6
    
    ```
    

---

## 3. Instalação no macOS

### Usando Homebrew

1. Verifique se o Homebrew está instalado executando:
    
    ```bash
    bash
    Copy code
    brew --version
    
    ```
    
    Caso não esteja instalado, siga o guia em [brew.sh](https://brew.sh/).
    
2. Instale o K6 com o Homebrew:
    
    ```bash
    bash
    Copy code
    brew install k6
    
    ```
    

---

## 4. Instalação no Windows

### Usando o Chocolatey

1. Verifique se o Chocolatey está instalado executando:
    
    ```powershell
    powershell
    Copy code
    choco --version
    
    ```
    
    Caso não esteja instalado, siga o guia em chocolatey.org.
    
2. Instale o K6 com o Chocolatey:
    
    ```powershell
    powershell
    Copy code
    choco install k6
    
    ```
    

### Usando o Scoop

1. Verifique se o Scoop está instalado executando:
    
    ```powershell
    powershell
    Copy code
    scoop --version
    
    ```
    
    Caso não esteja instalado, siga o guia em [scoop.sh](https://scoop.sh/).
    
2. Instale o K6 com o Scoop:
    
    ```powershell
    powershell
    Copy code
    scoop install k6
    
    ```
    

---

## 5. Verificação da Instalação

Após instalar o K6, verifique se ele foi instalado corretamente executando o comando:

```bash
bash
Copy code
k6 version

```

Se o K6 estiver instalado, o terminal exibirá a versão instalada.
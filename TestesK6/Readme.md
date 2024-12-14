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

   ```sudo apt update```

Instale as dependências necessárias:

sudo apt install -y ca-certificates curl gnupg
Adicione a chave GPG para o repositório oficial do K6:
```sudo mkdir -p /etc/apt/keyrings```
```curl -fsSL https://dl.k6.io/key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/k6-archive-keyring.gpg```

Adicione o repositório do K6 à lista de fontes do APT:

```echo "deb [signed-by=/etc/apt/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list```

Atualizar os pacotes e instalar o K6:

```sudo apt update```
```sudo apt install k6```
3. Instalação no macOS
Usando Homebrew
Verifique se o Homebrew está instalado executando:

```brew --version```
Caso não esteja instalado, siga o guia em brew .sh .

Instale o K6 com o Homebrew:

```brew install k6```

4. Instalação no Windows
Usando o Chocolatey
Verifique se o Chocolatey está instalado:

```choco --version```

Caso não esteja instalado, siga o guia em chocolatey .org .

Instale o K6 com o Chocolatey:


```choco install k6```

Usando o Scoop
Verifique se o Scoop está instalado executando:


```scoop --version```

Caso não esteja instalado, siga o guia em scoop .sh .

Instale o K6 com o Scoop:

```scoop install k6```

5. Verificação da Instalação
Após instalar o K6, verifique se ele foi instalado corretamente executando o comando:

```k6 version```

Se o K6 estiver instalado, o terminal exibirá a versão instalada.

6. Navegação para os Cenários de Teste
Abra o Visual Studio Code (VS Code).

Navegue até a pasta do projeto:

No VS Code, clique em Arquivo > Abrir Pasta .

Navegue até a pasta chamada ```Compass 2``` selecione-a.

Navegue ate a pasta Sprints

```cd Sprints```

Dentro da pasta Sprints, localize e abra a pasta testesK6.

Em seguida, abra a pasta scenarios.´

```cd scenarios```

No terminal do VS Code, escolha qual pasta você deseja acessar usando o comando cd:

```cd nome_da_pasta```

Substitua nome_da_pastapelo nome da pasta que deseja acessar dentro de scenarios. Por exemplo:

```cd usuarios```

Para rodar o teste, execute o seguinte comando no terminal:

```k6 run nome_do_arquivo.js```

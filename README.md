🗺️ App de Geolocalização - React Native com Expo
Uma aplicação móvel completa desenvolvida em React Native com TypeScript que demonstra o uso de geolocalização, geocodificação e integração com APIs de mapas.

📱 Sobre o Projeto
Este aplicativo oferece funcionalidades avançadas de localização, permitindo aos usuários obter sua posição atual, converter coordenadas em endereços legíveis, salvar localizações e visualizar pontos de interesse em mapas.

🚀 Funcionalidades
🌟 Principais
📍 Geolocalização em Tempo Real: Obtenha coordenadas precisas via GPS

🔄 Geocodificação Reversa: Converta coordenadas em endereços legíveis

💾 Armazenamento Cloud: Salve localizações no Supabase

🗺️ Integração com Mapas: Abra localizações no Google Maps/Apple Maps nativo

📊 Dashboard Interativo: Visualize estatísticas e histórico de localizações

🛠️ Técnicas
Permissões de Localização: Gerenciamento nativo para Android e iOS

API REST: Integração com OpenStreetMap Nominatim para geocodificação

Banco de Dados: Armazenamento seguro com Supabase

Interface Responsiva: Design moderno e intuitivo

🏗️ Arquitetura do Projeto
text
GeolocationApp/
├── app/
│   └── index.tsx                 # Tela principal da aplicação
├── config/
│   └── supabase.ts              # Configuração do cliente Supabase
├── assets/                      # Recursos estáticos (ícones, imagens)
└── package.json                 # Dependências do projeto
📦 Tecnologias Utilizadas
Frontend
React Native - Framework mobile

TypeScript - Tipagem estática

Expo - Desenvolvimento e build

Expo Location - Geolocalização nativa

Backend & APIs
Supabase - Banco de dados em tempo real

OpenStreetMap Nominatim - Geocodificação gratuita

Google Maps/Apple Maps - Visualização de mapas

Desenvolvimento
Axios - Cliente HTTP

React Navigation - Navegação entre telas

🛠️ Configuração e Instalação
Pré-requisitos
Node.js 16+

Expo CLI

Conta no Supabase

Passo a Passo
Clone o repositório

bash
git clone <repository-url>
cd GeolocationApp
Instale as dependências

bash
npm install
Configure o Supabase

bash
# Crie um arquivo config/supabase.ts
export const supabase = createClient(
  'SUA_URL_SUPABASE',
  'SUA_CHAVE_PUBLICA'
);
Execute a aplicação

bash
npx expo start
⚙️ Configuração do Supabase
1. Crie uma tabela locations:
sql
CREATE TABLE locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Habilitar RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Política para permitir todas as operações
CREATE POLICY "Allow all operations" ON locations FOR ALL USING (true);
2. Configure as variáveis de ambiente:
typescript
// config/supabase.ts
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-public-anon-key'
📱 Como Usar o App
🎯 Fluxo Principal
Permissão de Localização

Ao abrir o app, conceda acesso à localização

Permissão necessária para funcionalidades de GPS

Obter Localização Atual

Clique em "📍 Buscar Minha Localização"

Aguarde a busca das coordenadas

Endereço é automaticamente convertido

Salvar Localização

Clique em "💾 Salvar Local"

Dados são armazenados no Supabase

Aparece no histórico de localizações

Visualizar no Mapa

Clique em "🗺️ Abrir no Maps"

Abre no app de mapas nativo do dispositivo

🔧 Estrutura do Código
Componentes Principais
App (index.tsx)
Estado global da aplicação

Gerenciamento de permissões

Integração com APIs externas

Serviços
Location Service: Geolocalização com Expo Location

Geocoding Service: Conversão coordenadas↔endereço

Supabase Service: Operações de banco de dados

Interfaces TypeScript
typescript
interface Location {
  latitude: number;
  longitude: number;
}

interface SavedLocation {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  created_at: string;
}
🌐 APIs Integradas
OpenStreetMap Nominatim
Geocodificação Reversa: reverse?format=json&lat={lat}&lon={lng}

Limite: 1 requisição/segundo (gratuito)

Dados: OpenStreetMap community

Supabase
Banco: PostgreSQL

Auth: Row Level Security

Real-time: WebSockets para atualizações

🎨 Interface do Usuário
Seções Principais
Localização Atual

Coordenadas GPS

Endereço formatado

Status de permissão

Controles

Buscar localização

Salvar local

Abrir no maps

Histórico

Lista de locais salvos

Datas e horários

Ação rápida para abrir no mapa

Estatísticas

Contador de locais salvos

Status do GPS

Status de permissão

🔒 Gerenciamento de Permissões
Android
typescript
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
iOS
xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Este app precisa da sua localização para mostrar mapas</string>
🚨 Tratamento de Erros
Cenários Cobertos
Permissão de localização negada

Serviço de GPS desativado

Falha de conexão com APIs

Timeout na busca de localização

Mensagens Amigáveis
Guia usuário para resolver problemas

Links diretos para configurações

Sugestões de solução

📊 Comparação de APIs de Mapas
Recurso	Google Maps	OpenStreetMap
Preço	Pago após limite	Gratuito
Limites	$200/mês gratuito	Sem limites
Precisão	Alta	Variável
Velocidade	Rápida	Moderada
🛣️ Próximos Passos e Melhorias
Funcionalidades Futuras
Navegação entre pontos

Geofencing e alertas

Compartilhamento de localização

Mapas offline

Histórico de rotas

Integração com mais APIs de mapas

Melhorias Técnicas
Cache de localizações

Otimização de performance

Testes unitários e e2e

PWA (Progressive Web App)
